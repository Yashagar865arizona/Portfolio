document.addEventListener('DOMContentLoaded', function() {
    const projects = [
        {
            title: "AQI vs EV Analysis",
            description: "A data analysis platform exploring environmental impact through Air Quality Index and Electric Vehicle adoption patterns. This project leverages advanced analytics and visualization techniques to uncover correlations between transportation choices and air quality metrics, providing insights for urban planning and policy decisions.",
            tech: ["Python", "Data Science", "Machine Learning", "Data Visualization", "Statistical Analysis", "Cloud Computing"],
            links: {
                github: "https://github.com/Yashagar865arizona/AQI-VS-EV",
                live: "#"
            },
            containerId: "aqi-ev-container",
            featured: true
        },
        {
            title: "Memory Game",
            description: "An engaging cognitive training application designed to enhance memory and pattern recognition skills. This browser-based game combines modern web technologies with cognitive science principles to deliver an adaptive learning experience that challenges users while tracking their progress and performance improvements.",
            tech: ["JavaScript", "Game Development", "UI/UX Design", "Web Animation", "Performance Optimization", "State Management"],
            links: {
                github: "#",
                live: "#"
            },
            containerId: "memory-game-container",
            featured: true
        },
        {
            title: "Breakout Game",
            description: "A modern interpretation of the classic arcade game, featuring advanced physics simulation and dynamic gameplay mechanics. This implementation showcases smooth animations, precise collision detection, and an engaging progression system that adapts to player skill level.",
            tech: ["JavaScript", "Canvas API", "Physics Engine", "Game Design", "Animation Systems", "Performance Tuning"],
            links: {
                github: "https://github.com/Yashagar865arizona/Breakout",
                live: "#"
            },
            containerId: "breakout-game-container",
            featured: true
        }
    ];

    const projectsSection = document.getElementById('projects-section');
    if (projectsSection) {
        projectsSection.innerHTML = projects.map(project => `
            <div class="project featured-project">
                <div class="project-content">
                    <div class="project-image">
                        <div id="${project.containerId}" class="project-icon"></div>
                    </div>
                    <div class="project-info">
                        <div class="project-header">
                            <h3>${project.title}</h3>
                        </div>
                        <div class="project-description">
                            ${project.description}
                        </div>
                        <div class="project-tech-list">
                            <ul>
                                ${project.tech.map(tech => `<li>${tech}</li>`).join('')}
                            </ul>
                        </div>
                        <div class="project-links">
                            <a href="${project.links.github}" class="btn" target="_blank" rel="noopener noreferrer">
                                <i class="fab fa-github"></i>
                                GitHub
                            </a>
                            <a href="${project.links.live}" class="btn btn-outline ${project.links.live === '#' ? 'disabled' : ''}" ${project.links.live !== '#' ? 'target="_blank" rel="noopener noreferrer"' : ''}>
                                <i class="fas fa-external-link-alt"></i>
                                ${project.links.live === '#' ? 'Live Demo Coming Soon' : 'Live Demo'}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        `).join('');
    }

    // Initialize Breakout Game visualization
    function initBreakoutGame(container) {
        // Game state
        const gameState = {
            ball: { x: 50, y: 70, dx: 3, dy: -3, radius: 1.5 }, // Increased initial speed
            paddle: { x: 40, width: 20, height: 3, speed: 1.2 },
            bricks: [],
            score: 0,
            lives: 3,
            gameWidth: 90,
            gameHeight: 85,
            gameStartX: 5,
            gameStartY: 5,
            paddleTarget: 40,
            reactionDelay: 0,
            isRunning: false,
            animationFrameId: null,
            gameOver: false
        };

        // Initialize bricks
        for (let row = 0; row < 4; row++) {
            for (let col = 0; col < 8; col++) {
                gameState.bricks.push({
                    x: 8 + col * 11,
                    y: 10 + row * 7,
                    width: 10,
                    height: 5,
                    visible: true
                });
            }
        }

        // Create initial SVG
        container.innerHTML = `
            <svg viewBox="0 0 100 100" class="breakout-game">
                <!-- Background -->
                <rect width="100" height="100" fill="#0a192f"/>
                
                <!-- Game Border -->
                <rect 
                    x="${gameState.gameStartX}" 
                    y="${gameState.gameStartY}" 
                    width="${gameState.gameWidth}" 
                    height="${gameState.gameHeight}"
                    fill="none" 
                    stroke="#64ffda" 
                    stroke-width="0.5"/>
                
                <!-- Game Elements Container -->
                <g id="gameElements">
                    <!-- Bricks will be updated here -->
                    <g id="bricks"></g>
                    
                    <!-- Paddle -->
                    <rect 
                        id="paddle"
                        x="${gameState.paddle.x}" 
                        y="${gameState.gameStartY + gameState.gameHeight - 8}"
                        width="${gameState.paddle.width}" 
                        height="${gameState.paddle.height}"
                        fill="#64ffda" 
                        rx="1.5"/>
                    
                    <!-- Ball -->
                    <circle 
                        id="ball"
                        cx="${gameState.ball.x}" 
                        cy="${gameState.ball.y}"
                        r="${gameState.ball.radius}" 
                        fill="#64ffda"/>

                    <!-- Game Over Text (hidden initially) -->
                    <text 
                        id="gameOverText"
                        x="50" 
                        y="50" 
                        text-anchor="middle"
                        fill="#64ffda" 
                        font-size="8"
                        opacity="0">
                        Game Over
                    </text>
                </g>
                
                <!-- Score and Lives -->
                <g transform="translate(0,92)">
                    <text 
                        id="score"
                        x="10" 
                        y="5" 
                        fill="#64ffda" 
                        font-size="5">
                        Score: ${gameState.score}
                    </text>
                    
                    <g id="lives">
                        ${Array.from({length: gameState.lives}, (_, i) => `
                            <circle 
                                cx="${90 - i * 6}" 
                                cy="2.5" 
                                r="2" 
                                fill="#64ffda">
                            </circle>
                        `).join('')}
                    </g>
                </g>
            </svg>
        `;

        // Get SVG elements
        const svg = container.querySelector('svg');
        const ball = svg.querySelector('#ball');
        const paddle = svg.querySelector('#paddle');
        const bricksContainer = svg.querySelector('#bricks');
        const scoreText = svg.querySelector('#score');
        const gameOverText = svg.querySelector('#gameOverText');

        // Update brick display
        function updateBricks() {
            bricksContainer.innerHTML = gameState.bricks
                .filter(brick => brick.visible)
                .map(brick => `
                    <rect 
                        x="${brick.x}" 
                        y="${brick.y}"
                        width="${brick.width}" 
                        height="${brick.height}"
                        fill="rgba(100, 255, 218, 0.8)" 
                        rx="0.5"/>
                `).join('');
        }

        // Check collisions
        function checkCollisions() {
            // Wall collisions
            if (gameState.ball.x + gameState.ball.dx > gameState.gameStartX + gameState.gameWidth - gameState.ball.radius || 
                gameState.ball.x + gameState.ball.dx < gameState.gameStartX + gameState.ball.radius) {
                gameState.ball.dx = -gameState.ball.dx;
            }
            if (gameState.ball.y + gameState.ball.dy < gameState.gameStartY + gameState.ball.radius) {
                gameState.ball.dy = -gameState.ball.dy;
            }

            // Paddle collision
            const paddleY = gameState.gameStartY + gameState.gameHeight - 8; // Match SVG paddle position
            
            // Only check for paddle collision if ball is moving downward
            if (gameState.ball.dy > 0) {
                // Check if ball's bottom edge touches paddle's top edge
                if (gameState.ball.y + gameState.ball.radius >= paddleY && 
                    gameState.ball.y - gameState.ball.radius <= paddleY + gameState.paddle.height &&
                    gameState.ball.x >= gameState.paddle.x && 
                    gameState.ball.x <= gameState.paddle.x + gameState.paddle.width) {
                    
                    gameState.ball.dy = -gameState.ball.dy;
                    const hitPos = (gameState.ball.x - gameState.paddle.x) / gameState.paddle.width;
                    gameState.ball.dx = 6 * (hitPos - 0.5);
                }
            }

            // Brick collisions
            gameState.bricks.forEach(brick => {
                if (brick.visible) {
                    if (gameState.ball.x + gameState.ball.radius > brick.x &&
                        gameState.ball.x - gameState.ball.radius < brick.x + brick.width &&
                        gameState.ball.y + gameState.ball.radius > brick.y &&
                        gameState.ball.y - gameState.ball.radius < brick.y + brick.height) {
                        
                        brick.visible = false;
                        gameState.ball.dy = -gameState.ball.dy;
                        gameState.score += 100;
                        scoreText.textContent = `Score: ${gameState.score}`;
                        updateBricks();

                        // Check if all bricks are cleared
                        if (gameState.bricks.every(b => !b.visible)) {
                            handleGameOver(true);
                        }
                    }
                }
            });

            // Ball out of bounds
            if (gameState.ball.y > gameState.gameStartY + gameState.gameHeight) {
                gameState.lives--;
                if (gameState.lives > 0) {
                    resetBall();
                } else {
                    handleGameOver(false);
                }
            }
        }

        // Move paddle with human-like behavior
        function movePaddle() {
            // Update target position with some prediction and delay
            if (gameState.reactionDelay <= 0) {
                // Predict where ball will land
                if (gameState.ball.dy > 0) {
                    const paddleY = gameState.gameStartY + gameState.gameHeight - 8;
                    let predictedX = gameState.ball.x + 
                        (gameState.ball.dx * (paddleY - gameState.ball.y) / gameState.ball.dy);
                    
                    predictedX = Math.max(gameState.gameStartX + gameState.paddle.width/2,
                        Math.min(gameState.gameStartX + gameState.gameWidth - gameState.paddle.width/2, 
                        predictedX));

                    predictedX += (Math.random() - 0.5) * 5;
                    
                    gameState.paddleTarget = predictedX - gameState.paddle.width/2;
                    gameState.reactionDelay = Math.random() * 30 + 10;
                }
            } else {
                gameState.reactionDelay--;
            }

            const diff = gameState.paddleTarget - gameState.paddle.x;
            if (Math.abs(diff) > 0.1) {
                const speed = Math.min(Math.abs(diff) * 0.1, gameState.paddle.speed);
                gameState.paddle.x += Math.sign(diff) * speed;
                
                gameState.paddle.x = Math.max(
                    gameState.gameStartX,
                    Math.min(gameState.gameStartX + gameState.gameWidth - gameState.paddle.width,
                    gameState.paddle.x)
                );
            }

            paddle.setAttribute('x', gameState.paddle.x);
        }

        // Reset ball
        function resetBall() {
            gameState.ball.x = 50;
            gameState.ball.y = 70;
            gameState.ball.dx = 3; // Increased reset speed
            gameState.ball.dy = -3; // Increased reset speed
            updateLives();
        }

        // Update lives
        function updateLives() {
            svg.querySelector('#lives').innerHTML = Array.from({length: gameState.lives}, (_, i) => `
                <circle 
                    cx="${90 - i * 6}" 
                    cy="2.5" 
                    r="2" 
                    fill="#64ffda">
                </circle>
            `).join('');
        }

        // Handle game over
        function handleGameOver(won) {
            gameState.gameOver = true;
            gameState.isRunning = false;
            
            // Show game over text
            gameOverText.textContent = won ? 'You Win!' : 'Game Over';
            gameOverText.setAttribute('opacity', '1');

            // Optional: Add restart functionality after delay
            setTimeout(() => {
                if (gameState.gameOver) {
                    resetGame();
                }
            }, 3000);
        }

        // Reset game
        function resetGame() {
            gameState.gameOver = false;
            gameState.lives = 3;
            gameState.score = 0;
            gameState.isRunning = true;
            
            // Reset ball and paddle
            resetBall();
            gameState.paddle.x = 40;
            
            // Reset bricks
            gameState.bricks.forEach(brick => brick.visible = true);
            updateBricks();
            
            // Hide game over text
            gameOverText.setAttribute('opacity', '0');
            
            // Update score display
            scoreText.textContent = `Score: ${gameState.score}`;
            
            // Restart game loop
            gameLoop();
        }

        // Game loop
        function gameLoop() {
            if (!gameState.isRunning) return;

            // Move ball with increased speed
            const speed = 0.3; // Doubled the speed
            const normalizedSpeed = speed / Math.sqrt(gameState.ball.dx * gameState.ball.dx + gameState.ball.dy * gameState.ball.dy);
            gameState.ball.x += gameState.ball.dx * normalizedSpeed;
            gameState.ball.y += gameState.ball.dy * normalizedSpeed;
            
            checkCollisions();
            movePaddle();

            // Update ball position
            ball.setAttribute('cx', gameState.ball.x);
            ball.setAttribute('cy', gameState.ball.y);

            if (gameState.lives > 0 && !gameState.gameOver) {
                gameState.animationFrameId = requestAnimationFrame(gameLoop);
            }
        }

        // Start/Stop game based on hover
        container.addEventListener('mouseenter', () => {
            if (!gameState.isRunning) {
                gameState.isRunning = true;
                gameLoop();
            }
        });

        container.addEventListener('mouseleave', () => {
            gameState.isRunning = false;
            if (gameState.animationFrameId) {
                cancelAnimationFrame(gameState.animationFrameId);
                gameState.animationFrameId = null;
            }
        });

        // Initial setup
        updateBricks();
    }

    // Initialize Memory Game visualization
    function initMemoryGame(container) {
        // Game state
        const memoryState = {
            cards: [],
            flipped: [],
            matched: new Set(),
            isRunning: false,
            canFlip: true,
            score: 0,
            moves: 0,
            symbols: ['⚡', '🔥', '💧', '🌿', '⭐', '❄️', '🌙', '☀️'],
            aiMemory: new Map(),
            aiThinking: false,
            aiMoveDelay: 300,
            demonstrationMode: true
        };

        // Initialize cards (4x4 grid)
        const symbols = [...memoryState.symbols, ...memoryState.symbols];
        
        // SVG dimensions and layout
        const svgWidth = 100;
        const svgHeight = 100;
        const gridPadding = 10;
        
        // Card dimensions
        const cardWidth = (svgWidth - (gridPadding * 2) - (3 * 4)) / 4;  // Divide remaining space by 4
        const cardHeight = cardWidth;  // Keep cards square
        const gap = 4;  // Space between cards
        
        // Calculate starting position to center the grid
        const totalGridWidth = (cardWidth * 4) + (gap * 3);
        const totalGridHeight = (cardHeight * 4) + (gap * 3);
        const startX = (svgWidth - totalGridWidth) / 2;
        const startY = (svgHeight - totalGridHeight - 10) / 2;  // Subtract 10 for text space

        for (let i = 0; i < 16; i++) {
            const col = i % 4;
            const row = Math.floor(i / 4);
            
            memoryState.cards.push({
                id: i,
                symbol: symbols[i],
                x: startX + (col * (cardWidth + gap)),
                y: startY + (row * (cardHeight + gap)),
                width: cardWidth,
                height: cardHeight
            });
        }

        // Shuffle cards
        for (let i = memoryState.cards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [memoryState.cards[i].symbol, memoryState.cards[j].symbol] = 
            [memoryState.cards[j].symbol, memoryState.cards[i].symbol];
        }

        // Create SVG
        container.innerHTML = `
            <svg viewBox="0 0 ${svgWidth} ${svgHeight}" class="memory-game">
                <!-- Background -->
                <rect width="${svgWidth}" height="${svgHeight}" fill="#0a192f"/>
                
                <!-- Cards Container -->
                ${memoryState.cards.map(card => `
                    <g class="card" data-id="${card.id}">
                        <rect 
                            x="${card.x}" y="${card.y}" 
                            width="${card.width}" height="${card.height}"
                            fill="#0a192f" 
                            stroke="#64ffda" 
                            stroke-width="0.5"
                            rx="2"/>
                        
                        <path 
                            d="M ${card.x},${card.y} l ${card.width},${card.height} M ${card.x},${card.y + card.height} l ${card.width},-${card.height}"
                            stroke="#64ffda" 
                            stroke-width="0.5" 
                            stroke-opacity="0.3"/>

                        <text
                            x="${card.x + card.width/2}"
                            y="${card.y + card.height/2}"
                            font-size="${cardWidth/3}"
                            fill="#64ffda"
                            text-anchor="middle"
                            dominant-baseline="middle"
                            opacity="0">
                            ${card.symbol}
                        </text>
                    </g>
                `).join('')}

                <!-- Info Text -->
                <text 
                    id="memoryScore"
                    x="${gridPadding}" 
                    y="${svgHeight - gridPadding}" 
                    fill="#64ffda" 
                    font-size="4">
                    Moves: 0
                </text>

                <text 
                    id="modeDisplay"
                    x="${svgWidth - gridPadding}" 
                    y="${svgHeight - gridPadding}" 
                    fill="#64ffda" 
                    font-size="4"
                    text-anchor="end">
                    AI Demo
                </text>
            </svg>
        `;

        const svg = container.querySelector('svg');
        const scoreText = svg.querySelector('#memoryScore');
        const modeDisplay = svg.querySelector('#modeDisplay');
        const cards = Array.from(svg.querySelectorAll('.card'));

        // AI Logic
        function aiMove() {
            if (!memoryState.isRunning || !memoryState.demonstrationMode || memoryState.aiThinking) return;
            
            memoryState.aiThinking = true;
            
            setTimeout(() => {
                // If no cards are flipped, try to make a match from memory or flip a random card
                if (memoryState.flipped.length === 0) {
                    let matchFound = false;
                    
                    // Check memory for potential matches
                    memoryState.aiMemory.forEach((symbol, id1) => {
                        memoryState.aiMemory.forEach((symbol2, id2) => {
                            if (id1 !== id2 && symbol === symbol2 && 
                                !memoryState.matched.has(id1) && !memoryState.matched.has(id2)) {
                                // Found a match in memory
                                handleCardClick({ currentTarget: cards[id1] });
                                setTimeout(() => {
                                    handleCardClick({ currentTarget: cards[id2] });
                                    memoryState.aiThinking = false;
                                }, memoryState.aiMoveDelay);
                                matchFound = true;
                            }
                        });
                    });
                    
                    if (!matchFound) {
                        // Flip a random unmatched card
                        const unmatched = cards.filter((_, i) => 
                            !memoryState.matched.has(i) && !memoryState.flipped.includes(i));
                        if (unmatched.length > 0) {
                            const randomCard = unmatched[Math.floor(Math.random() * unmatched.length)];
                            handleCardClick({ currentTarget: randomCard });
                            memoryState.aiThinking = false;
                        }
                    }
                }
                // If one card is flipped, try to match it from memory or flip a random card
                else if (memoryState.flipped.length === 1) {
                    const firstCard = memoryState.flipped[0];
                    const firstSymbol = memoryState.cards[firstCard].symbol;
                    let matchFound = false;
                    
                    // Remember this card
                    memoryState.aiMemory.set(firstCard, firstSymbol);
                    
                    // Check memory for a match
                    memoryState.aiMemory.forEach((symbol, id) => {
                        if (id !== firstCard && symbol === firstSymbol && !memoryState.matched.has(id)) {
                            handleCardClick({ currentTarget: cards[id] });
                            matchFound = true;
                        }
                    });
                    
                    if (!matchFound) {
                        // Flip a random unmatched and unflipped card
                        const unmatched = cards.filter((_, i) => 
                            !memoryState.matched.has(i) && !memoryState.flipped.includes(i));
                        if (unmatched.length > 0) {
                            const randomCard = unmatched[Math.floor(Math.random() * unmatched.length)];
                            handleCardClick({ currentTarget: randomCard });
                        }
                    }
                    memoryState.aiThinking = false;
                }
            }, memoryState.aiMoveDelay);
        }

        // Modified flip card animation
        function flipCard(cardEl, show) {
            const rect = cardEl.querySelector('rect');
            const pattern = cardEl.querySelector('path');
            const text = cardEl.querySelector('text');
            
            // Scale animation
            rect.setAttribute('transform', `scale(${show ? 0 : 1} 1)`);
            pattern.setAttribute('transform', `scale(${show ? 0 : 1} 1)`);
            text.setAttribute('transform', `scale(${show ? 1 : 0} 1)`);
            
            // Visibility
            pattern.style.opacity = show ? '0' : '0.3';
            text.style.opacity = show ? '1' : '0';
            
            // Transition
            [rect, pattern, text].forEach(el => {
                el.style.transition = 'transform 0.3s ease-in-out, opacity 0.3s ease-in-out';
            });

            // Remember card for AI
            if (show) {
                const cardId = parseInt(cardEl.dataset.id);
                memoryState.aiMemory.set(cardId, memoryState.cards[cardId].symbol);
            }
        }

        // Modified check match
        function checkMatch() {
            const [card1, card2] = memoryState.flipped;
            const el1 = cards[card1];
            const el2 = cards[card2];

            if (memoryState.cards[card1].symbol === memoryState.cards[card2].symbol) {
                memoryState.matched.add(card1);
                memoryState.matched.add(card2);
                
                // Highlight matched cards
                [el1, el2].forEach(el => {
                    el.querySelector('rect').style.fill = '#64ffda';
                    el.querySelector('text').style.fill = '#0a192f';
                });

                // Check win condition
                if (memoryState.matched.size === memoryState.cards.length) {
                    setTimeout(() => {
                        scoreText.textContent = `Won in ${memoryState.moves} moves!`;
                        // Reset game after delay
                        setTimeout(resetGame, 2000);
                    }, 500);
                } else if (memoryState.demonstrationMode) {
                    setTimeout(aiMove, memoryState.aiMoveDelay);
                }
            } else {
                // Flip back after delay
                setTimeout(() => {
                    flipCard(el1, false);
                    flipCard(el2, false);
                    if (memoryState.demonstrationMode) {
                        setTimeout(aiMove, memoryState.aiMoveDelay);
                    }
                }, 1000);
            }

            memoryState.flipped = [];
            memoryState.canFlip = true;
        }

        // Reset game
        function resetGame() {
            // Reset state
            memoryState.flipped = [];
            memoryState.matched.clear();
            memoryState.aiMemory.clear();
            memoryState.moves = 0;
            memoryState.canFlip = true;
            
            // Shuffle cards
            for (let i = memoryState.cards.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [memoryState.cards[i].symbol, memoryState.cards[j].symbol] = 
                [memoryState.cards[j].symbol, memoryState.cards[i].symbol];
            }
            
            // Reset UI
            cards.forEach((cardEl, i) => {
                const text = cardEl.querySelector('text');
                text.textContent = memoryState.cards[i].symbol;
                
                cardEl.querySelector('rect').style.fill = '#0a192f';
                text.style.fill = '#64ffda';
                flipCard(cardEl, false);
            });
            
            scoreText.textContent = 'Moves: 0';
            
            // Start AI if in demonstration mode
            if (memoryState.demonstrationMode) {
                aiMove();
            }
        }

        // Modified handle click
        function handleCardClick(e) {
            if (!memoryState.isRunning || !memoryState.canFlip) return;
            if (memoryState.demonstrationMode && !memoryState.aiThinking) return;

            const cardEl = e.currentTarget;
            const cardId = parseInt(cardEl.dataset.id);

            // Ignore if card is already flipped or matched
            if (memoryState.flipped.includes(cardId) || memoryState.matched.has(cardId)) return;

            // Flip card
            flipCard(cardEl, true);
            memoryState.flipped.push(cardId);

            // Update moves
            memoryState.moves++;
            scoreText.textContent = `Moves: ${memoryState.moves}`;

            // Check for pair
            if (memoryState.flipped.length === 2) {
                memoryState.canFlip = false;
                checkMatch();
            } else if (memoryState.demonstrationMode) {
                setTimeout(aiMove, memoryState.aiMoveDelay);
            }
        }

        // Add click listeners to cards
        cards.forEach(card => {
            card.addEventListener('click', handleCardClick);
        });

        // Start/Stop game based on hover
        container.addEventListener('mouseenter', () => {
            if (!memoryState.isRunning) {
                memoryState.isRunning = true;
                if (memoryState.demonstrationMode) {
                    modeDisplay.textContent = 'AI Demo';
                    aiMove();
                }
            }
        });

        container.addEventListener('mouseleave', () => {
            memoryState.isRunning = false;
        });

        // Initialize game
        resetGame();
    }

    // Initialize project visualizations
    const containers = {
        'tars-container': null,
        'aqi-ev-container': null,
        'breakout-game-container': initBreakoutGame,
        'memory-game-container': initMemoryGame
    };

    // Initialize each project if its container exists
    Object.entries(containers).forEach(([id, initFn]) => {
        const container = document.getElementById(id);
        if (container && initFn) {
            initFn(container);
        }
    });
});
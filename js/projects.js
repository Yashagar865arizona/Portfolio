document.addEventListener('DOMContentLoaded', function() {
    const projectsSection = document.getElementById('projects-section');
    if (projectsSection) {
        projectsSection.innerHTML = `
            <!-- AQI vs EV Analysis Project -->
            <div class="project featured-project">
                <div class="project-content">
                    <div class="project-image">
                        <div class="project-icon">
                            <svg viewBox="0 0 100 100" class="aqi-ev-analysis">
                                <!-- Background Grid -->
                                <defs>
                                    <pattern id="smallGrid" width="2" height="2" patternUnits="userSpaceOnUse">
                                        <path d="M 2 0 L 0 0 0 2" fill="none" stroke="rgba(100, 255, 218, 0.1)" stroke-width="0.2"/>
                                    </pattern>
                                </defs>
                                <rect width="100" height="100" fill="#0a192f"/>
                                <rect width="100" height="100" fill="url(#smallGrid)"/>
                                
                                <!-- Chart Area -->
                                <g transform="translate(15,5)">
                                    <!-- Axes -->
                                    <line x1="0" y1="75" x2="75" y2="75" stroke="#64ffda" stroke-width="0.5"/>
                                    <line x1="0" y1="75" x2="0" y2="5" stroke="#64ffda" stroke-width="0.5"/>
                                    
                                    <!-- Y-axis Labels (AQI) -->
                                    <text x="-3" y="75" fill="#64ffda" font-size="3" text-anchor="end">0</text>
                                    <text x="-3" y="55" fill="#64ffda" font-size="3" text-anchor="end">50</text>
                                    <text x="-3" y="35" fill="#64ffda" font-size="3" text-anchor="end">100</text>
                                    <text x="-3" y="15" fill="#64ffda" font-size="3" text-anchor="end">150</text>
                                    
                                    <!-- X-axis Labels (Years) -->
                                    <text x="0" y="82" fill="#64ffda" font-size="2.5" text-anchor="middle">2019</text>
                                    <text x="19" y="82" fill="#64ffda" font-size="2.5" text-anchor="middle">2020</text>
                                    <text x="38" y="82" fill="#64ffda" font-size="2.5" text-anchor="middle">2021</text>
                                    <text x="57" y="82" fill="#64ffda" font-size="2.5" text-anchor="middle">2022</text>
                                    <text x="75" y="82" fill="#64ffda" font-size="2.5" text-anchor="middle">2023</text>
                                    
                                    <!-- AQI Monthly Bars -->
                                    <g class="aqi-bars">
                                        ${Array.from({length: 48}, (_, i) => {
                                            const baseHeight = 45 - (i * 0.4); 
                                            const seasonalVariation = Math.sin((i % 12) * Math.PI / 6) * 5; 
                                            const randomVariation = Math.random() * 3 - 1.5; 
                                            const height = Math.min(70, Math.max(15, baseHeight + seasonalVariation + randomVariation));
                                            const y = 75 - height;
                                            
                                            return `
                                            <rect 
                                                x="${i * 1.55 + 1}" 
                                                y="${y}" 
                                                width="1.2" 
                                                height="${height}" 
                                                fill="rgba(100, 255, 218, 0.3)" 
                                                class="aqi-bar">
                                                <animate 
                                                    attributeName="height" 
                                                    from="0" 
                                                    to="${height}" 
                                                    dur="${0.5 + i * 0.02}s" 
                                                    fill="freeze"/>
                                                <animate 
                                                    attributeName="y" 
                                                    from="75" 
                                                    to="${y}" 
                                                    dur="${0.5 + i * 0.02}s" 
                                                    fill="freeze"/>
                                            </rect>
                                        `}).join('')}
                                    </g>
                                    
                                    <!-- EV Adoption Line -->
                                    <g class="ev-line">
                                        <!-- Trend Line -->
                                        <path 
                                            d="${Array.from({length: 49}, (_, i) => {
                                                const x = i * 1.55 + 1;
                                                
                                                // Calculate inverse relationship with AQI bars
                                                const baseHeight = 45 - (i * 0.4);
                                                const aqiValue = Math.min(70, Math.max(15, baseHeight + Math.sin((i % 12) * Math.PI / 6) * 5));
                                                
                                                // Convert AQI to EV adoption (inverse relationship)
                                                const maxAQI = 70;
                                                const minAQI = 15;
                                                const normalizedAQI = (aqiValue - minAQI) / (maxAQI - minAQI);
                                                const evAdoption = 75 - (normalizedAQI * 40 + 15); // Scale to 15-55 range
                                                
                                                // Add slight growth trend
                                                const growthFactor = Math.pow(i / 48, 0.5) * 10;
                                                const y = Math.max(25, Math.min(65, evAdoption - growthFactor));
                                                
                                                return (i === 0 ? 'M' : 'L') + ` ${x} ${y}`;
                                            }).join(' ')}"
                                            fill="none" 
                                            stroke="#64ffda" 
                                            stroke-width="0.5">
                                            <animate attributeName="stroke-dasharray" from="200" to="0" dur="3s" fill="freeze"/>
                                        </path>
                                        
                                        <!-- Data Points -->
                                        ${Array.from({length: 49}, (_, i) => {
                                            const x = i * 1.55 + 1;
                                            
                                            // Use same calculation as trend line for consistency
                                            const baseHeight = 45 - (i * 0.4);
                                            const aqiValue = Math.min(70, Math.max(15, baseHeight + Math.sin((i % 12) * Math.PI / 6) * 5));
                                            const maxAQI = 70;
                                            const minAQI = 15;
                                            const normalizedAQI = (aqiValue - minAQI) / (maxAQI - minAQI);
                                            const evAdoption = 75 - (normalizedAQI * 40 + 15);
                                            const growthFactor = Math.pow(i / 48, 0.5) * 10;
                                            const y = Math.max(25, Math.min(65, evAdoption - growthFactor));
                                            
                                            return `
                                            <circle 
                                                cx="${x}" 
                                                cy="${y}" 
                                                r="0.4" 
                                                fill="#64ffda" 
                                                class="data-point">
                                                <animate 
                                                    attributeName="r" 
                                                    from="0" 
                                                    to="0.4" 
                                                    dur="${0.2 + i * 0.05}s" 
                                                    fill="freeze"/>
                                            </circle>`;
                                        }).join('')}
                                        
                                        <!-- Highlighted Latest Point -->
                                        <circle 
                                            cx="75.7" 
                                            cy="${(() => {
                                                // Calculate the final point using the same logic as the curve
                                                const i = 48;  // Last data point
                                                const baseHeight = 45 - (i * 0.4);
                                                const aqiValue = Math.min(70, Math.max(15, baseHeight + Math.sin((i % 12) * Math.PI / 6) * 5));
                                                const maxAQI = 70;
                                                const minAQI = 15;
                                                const normalizedAQI = (aqiValue - minAQI) / (maxAQI - minAQI);
                                                const evAdoption = 75 - (normalizedAQI * 40 + 15);
                                                const growthFactor = Math.pow(i / 48, 0.5) * 10;
                                                return Math.max(25, Math.min(65, evAdoption - growthFactor));
                                            })()}" 
                                            r="0.6" 
                                            fill="#64ffda" 
                                            class="data-point-latest">
                                            <animate attributeName="fill-opacity" values="1;0.3;1" dur="1.5s" repeatCount="indefinite"/>
                                        </circle>
                                    </g>
                                </g>
                                
                                <!-- Legend -->
                                <g transform="translate(15,90)">
                                    <rect x="0" y="0" width="3" height="3" fill="rgba(100, 255, 218, 0.3)" class="legend-bar"/>
                                    <text x="4.5" y="2.5" fill="#64ffda" font-size="2.5">Monthly AQI</text>
                                    <line x1="20" y1="1.5" x2="25" y2="1.5" stroke="#64ffda" stroke-width="0.5" class="legend-line"/>
                                    <circle cx="22.5" cy="1.5" r="0.4" fill="#64ffda" class="legend-point"/>
                                    <text x="27" y="2.5" fill="#64ffda" font-size="2.5">EV Adoption</text>
                                </g>
                            </svg>
                        </div>
                    </div>
                    <div class="project-info">
                        <div class="project-header">
                            <h3>AQI vs EV Analysis</h3>
                        </div>
                        <div class="project-description">
                            A data analysis platform exploring environmental impact through Air Quality Index and Electric Vehicle adoption patterns. This project leverages advanced analytics and visualization techniques to uncover correlations between transportation choices and air quality metrics, providing insights for urban planning and policy decisions.
                        </div>
                        <div class="project-tech-list">
                            <ul>
                                <li>Python</li>
                                <li>Data Science</li>
                                <li>Machine Learning</li>
                                <li>Data Visualization</li>
                                <li>Statistical Analysis</li>
                                <li>Cloud Computing</li>
                            </ul>
                        </div>
                        <div class="project-links">
                            <a href="https://github.com/Yashagar865arizona/AQI-VS-EV" class="btn" target="_blank" rel="noopener noreferrer">
                                <i class="fab fa-github"></i>
                                GitHub
                            </a>
                            <a href="#" class="btn btn-outline disabled">
                                <i class="fas fa-external-link-alt"></i>
                                Live Demo Coming Soon
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Memory Game Project -->
            <div class="project featured-project">
                <div class="project-content">
                    <div class="project-image">
                        <div id="memory-game-container"></div>
                    </div>
                    <div class="project-info">
                        <div class="project-header">
                            <h3>Memory Game</h3>
                        </div>
                        <div class="project-description">
                            An engaging cognitive training application designed to enhance memory and pattern recognition skills. This browser-based game combines modern web technologies with cognitive science principles to deliver an adaptive learning experience that challenges users while tracking their progress and performance improvements.
                        </div>
                        <div class="project-tech-list">
                            <ul>
                                <li>JavaScript</li>
                                <li>Game Development</li>
                                <li>UI/UX Design</li>
                                <li>Web Animation</li>
                                <li>Performance Optimization</li>
                                <li>State Management</li>
                            </ul>
                        </div>
                        <div class="project-links">
                            <a href="#" class="btn btn-outline disabled">
                                <i class="fas fa-external-link-alt"></i>
                                Live Demo Coming Soon
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Breakout Game Project -->
            <div class="project featured-project">
                <div class="project-content">
                    <div class="project-image">
                        <div id="breakout-game-container"></div>
                    </div>
                    <div class="project-info">
                        <div class="project-header">
                            <h3>Breakout Game</h3>
                        </div>
                        <div class="project-description">
                            A modern interpretation of the classic arcade game, featuring advanced physics simulation and dynamic gameplay mechanics. This implementation showcases smooth animations, precise collision detection, and an engaging progression system that adapts to player skill level.
                        </div>
                        <div class="project-tech-list">
                            <ul>
                                <li>JavaScript</li>
                                <li>Canvas API</li>
                                <li>Physics Engine</li>
                                <li>Game Design</li>
                                <li>Animation Systems</li>
                                <li>Performance Tuning</li>
                            </ul>
                        </div>
                        <div class="project-links">
                            <a href="https://github.com/Yashagar865arizona/Breakout" class="btn" target="_blank" rel="noopener noreferrer">
                                <i class="fab fa-github"></i>
                                GitHub
                            </a>
                            <a href="#" class="btn btn-outline disabled">
                                <i class="fas fa-external-link-alt"></i>
                                Live Demo Coming Soon
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        `;

    }

    // Initialize Breakout Game visualization
    const breakoutContainer = document.getElementById('breakout-game-container');
    if (breakoutContainer) {
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
        breakoutContainer.innerHTML = `
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
        const svg = breakoutContainer.querySelector('svg');
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
        breakoutContainer.addEventListener('mouseenter', () => {
            if (!gameState.isRunning) {
                gameState.isRunning = true;
                gameLoop();
            }
        });

        breakoutContainer.addEventListener('mouseleave', () => {
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
    const memoryContainer = document.getElementById('memory-game-container');
    if (memoryContainer) {
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
        memoryContainer.innerHTML = `
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

        const svg = memoryContainer.querySelector('svg');
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
        memoryContainer.addEventListener('mouseenter', () => {
            if (!memoryState.isRunning) {
                memoryState.isRunning = true;
                if (memoryState.demonstrationMode) {
                    modeDisplay.textContent = 'AI Demo';
                    aiMove();
                }
            }
        });

        memoryContainer.addEventListener('mouseleave', () => {
            memoryState.isRunning = false;
        });

        // Initialize game
        resetGame();
    }
});
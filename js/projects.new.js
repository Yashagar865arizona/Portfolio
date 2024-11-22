document.addEventListener('DOMContentLoaded', function() {
    const projectsSection = document.getElementById('projects-section');
    if (projectsSection) {
        projectsSection.innerHTML = `
            <!-- AQI vs EV Analysis Project -->
            <div class="project featured-project">
                <div class="project-content">
                    <div class="project-image">
                        <div class="project-icon">
                            <svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
                                <!-- Background Grid -->
                                <defs>
                                    <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                                        <path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(100, 255, 218, 0.1)" stroke-width="0.5"/>
                                    </pattern>
                                </defs>
                                <rect width="100" height="100" fill="url(#grid)"/>
                                
                                <!-- Main Chart Area -->
                                <rect x="10" y="10" width="80" height="80" rx="2" fill="rgba(100, 255, 218, 0.05)" stroke="rgba(100, 255, 218, 0.2)"/>
                                
                                <!-- EV Line Chart -->
                                <path d="M 20,80 L 35,60 50,45 65,35 80,20" fill="none" stroke="#64ffda" stroke-width="2" class="chart-line"/>
                                
                                <!-- AQI Bars -->
                                <rect x="25" y="50" width="8" height="30" fill="rgba(100, 255, 218, 0.3)" class="bar"/>
                                <rect x="40" y="35" width="8" height="45" fill="rgba(100, 255, 218, 0.3)" class="bar"/>
                                <rect x="55" y="25" width="8" height="55" fill="rgba(100, 255, 218, 0.3)" class="bar"/>
                                <rect x="70" y="15" width="8" height="65" fill="rgba(100, 255, 218, 0.3)" class="bar"/>
                                
                                <!-- Data Points -->
                                <circle cx="35" cy="60" r="2" fill="#64ffda" class="data-point"/>
                                <circle cx="50" cy="45" r="2" fill="#64ffda" class="data-point"/>
                                <circle cx="65" cy="35" r="2" fill="#64ffda" class="data-point"/>
                                <circle cx="80" cy="20" r="2" fill="#64ffda" class="data-point"/>
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
                        <div class="project-icon">
                            <svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
                                <!-- Background -->
                                <rect width="100" height="100" fill="rgba(100, 255, 218, 0.05)"/>
                                
                                <!-- Game Grid -->
                                <g transform="translate(10,10)">
                                    <!-- Row 1 -->
                                    <rect x="0" y="0" width="35" height="35" rx="2" class="memory-card"/>
                                    <rect x="45" y="0" width="35" height="35" rx="2" class="memory-card active"/>
                                    <!-- Row 2 -->
                                    <rect x="0" y="45" width="35" height="35" rx="2" class="memory-card active"/>
                                    <rect x="45" y="45" width="35" height="35" rx="2" class="memory-card"/>
                                    
                                    <!-- Card Symbols -->
                                    <path d="M 15,15 L 25,25 M 15,25 L 25,15" stroke="#64ffda" stroke-width="2" class="symbol"/>
                                    <circle cx="62" cy="17" r="8" stroke="#64ffda" stroke-width="2" fill="none" class="symbol"/>
                                    <circle cx="17" cy="62" r="8" stroke="#64ffda" stroke-width="2" fill="none" class="symbol"/>
                                    <path d="M 60,55 L 70,65 M 60,65 L 70,55" stroke="#64ffda" stroke-width="2" class="symbol"/>
                                </g>
                            </svg>
                        </div>
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
                        <div class="project-icon">
                            <svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
                                <!-- Game Background -->
                                <rect width="100" height="100" fill="rgba(100, 255, 218, 0.05)"/>
                                
                                <!-- Game Area -->
                                <rect x="10" y="10" width="80" height="80" rx="2" stroke="rgba(100, 255, 218, 0.2)" fill="none"/>
                                
                                <!-- Bricks -->
                                <g class="bricks">
                                    <!-- Row 1 -->
                                    <rect x="15" y="15" width="22" height="8" rx="1" class="brick"/>
                                    <rect x="39" y="15" width="22" height="8" rx="1" class="brick"/>
                                    <rect x="63" y="15" width="22" height="8" rx="1" class="brick"/>
                                    <!-- Row 2 -->
                                    <rect x="15" y="25" width="22" height="8" rx="1" class="brick"/>
                                    <rect x="39" y="25" width="22" height="8" rx="1" class="brick"/>
                                    <rect x="63" y="25" width="22" height="8" rx="1" class="brick"/>
                                    <!-- Row 3 -->
                                    <rect x="15" y="35" width="22" height="8" rx="1" class="brick"/>
                                    <rect x="39" y="35" width="22" height="8" rx="1" class="brick"/>
                                    <rect x="63" y="35" width="22" height="8" rx="1" class="brick"/>
                                </g>
                                
                                <!-- Ball -->
                                <circle cx="50" cy="60" r="3" class="ball"/>
                                
                                <!-- Paddle -->
                                <rect x="35" y="85" width="30" height="5" rx="2.5" class="paddle"/>
                                
                                <!-- Particle Effects -->
                                <g class="particles">
                                    <circle cx="45" cy="30" r="1" class="particle"/>
                                    <circle cx="55" cy="25" r="1" class="particle"/>
                                    <circle cx="65" cy="35" r="1" class="particle"/>
                                </g>
                            </svg>
                        </div>
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
});

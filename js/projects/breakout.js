import { createBreakoutSvg } from './svg/breakout.js';

export function createBreakoutGame() {
    return `
        <div class="project featured-project">
            <div class="project-content">
                <div class="project-image">
                    <div class="project-icon">
                        ${createBreakoutSvg()}
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

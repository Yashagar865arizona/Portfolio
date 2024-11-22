import { createMemoryGameSvg } from './svg/memory-game.js';

export function createMemoryGame() {
    return `
        <div class="project featured-project">
            <div class="project-content">
                <div class="project-image">
                    <div class="project-icon">
                        ${createMemoryGameSvg()}
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
    `;
}

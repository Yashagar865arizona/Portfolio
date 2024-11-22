import { createAQIEVSvg } from './svg/aqi-ev.js';

export function createAQIEVProject() {
    return `
        <div class="project featured-project">
            <div class="project-content">
                <div class="project-image">
                    <div class="project-icon">
                        ${createAQIEVSvg()}
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
    `;
}

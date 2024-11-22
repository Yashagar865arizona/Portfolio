export function createAQIEVSvg() {
    return `
        <svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet" width="100%" height="100%">
            <!-- Background Grid -->
            <defs>
                <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                    <path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(100, 255, 218, 0.1)" stroke-width="0.5"/>
                </pattern>
                <!-- Gradient for EV line -->
                <linearGradient id="evGradient" x1="0%" y1="100%" x2="100%" y2="0%">
                    <stop offset="0%" style="stop-color:#64ffda;stop-opacity:0.3" />
                    <stop offset="100%" style="stop-color:#64ffda;stop-opacity:0.8" />
                </linearGradient>
            </defs>
            <rect width="100" height="100" fill="url(#grid)"/>
            
            <!-- Axis Labels -->
            <text x="5" y="15" fill="#64ffda" font-size="4">AQI</text>
            <text x="85" y="95" fill="#64ffda" font-size="4">EV</text>
            
            <!-- Main Chart Area -->
            <rect x="10" y="10" width="80" height="80" rx="2" fill="rgba(100, 255, 218, 0.05)" stroke="rgba(100, 255, 218, 0.2)"/>
            
            <!-- Grid Lines -->
            <g stroke="rgba(100, 255, 218, 0.1)" stroke-width="0.5">
                <line x1="10" y1="30" x2="90" y2="30" />
                <line x1="10" y1="50" x2="90" y2="50" />
                <line x1="10" y1="70" x2="90" y2="70" />
                <line x1="30" y1="10" x2="30" y2="90" />
                <line x1="50" y1="10" x2="50" y2="90" />
                <line x1="70" y1="10" x2="70" y2="90" />
            </g>
            
            <!-- AQI Bars with Animation -->
            <g class="aqi-bars">
                <rect x="20" y="60" width="6" height="30" fill="rgba(100, 255, 218, 0.3)" class="bar">
                    <animate attributeName="height" from="0" to="30" dur="1s" />
                </rect>
                <rect x="35" y="45" width="6" height="45" fill="rgba(100, 255, 218, 0.3)" class="bar">
                    <animate attributeName="height" from="0" to="45" dur="1s" delay="0.2s" />
                </rect>
                <rect x="50" y="25" width="6" height="65" fill="rgba(100, 255, 218, 0.3)" class="bar">
                    <animate attributeName="height" from="0" to="65" dur="1s" delay="0.4s" />
                </rect>
                <rect x="65" y="15" width="6" height="75" fill="rgba(100, 255, 218, 0.3)" class="bar">
                    <animate attributeName="height" from="0" to="75" dur="1s" delay="0.6s" />
                </rect>
                <rect x="80" y="5" width="6" height="85" fill="rgba(100, 255, 218, 0.3)" class="bar">
                    <animate attributeName="height" from="0" to="85" dur="1s" delay="0.8s" />
                </rect>
            </g>
            
            <!-- EV Trend Line -->
            <path d="M 15,85 Q 35,60 55,35 T 85,15" 
                  fill="none" 
                  stroke="url(#evGradient)" 
                  stroke-width="2" 
                  class="chart-line">
                <animate attributeName="stroke-dasharray" 
                         from="0,1000" to="1000,0" 
                         dur="2s" fill="freeze" />
            </path>
            
            <!-- Data Points with Pulse Animation -->
            <g class="data-points">
                <circle cx="15" cy="85" r="2" fill="#64ffda" class="data-point">
                    <animate attributeName="r" values="2;3;2" dur="2s" repeatCount="indefinite" />
                </circle>
                <circle cx="35" cy="60" r="2" fill="#64ffda" class="data-point">
                    <animate attributeName="r" values="2;3;2" dur="2s" repeatCount="indefinite" begin="0.4s" />
                </circle>
                <circle cx="55" cy="35" r="2" fill="#64ffda" class="data-point">
                    <animate attributeName="r" values="2;3;2" dur="2s" repeatCount="indefinite" begin="0.8s" />
                </circle>
                <circle cx="85" cy="15" r="2" fill="#64ffda" class="data-point">
                    <animate attributeName="r" values="2;3;2" dur="2s" repeatCount="indefinite" begin="1.2s" />
                </circle>
            </g>
        </svg>
    `;
}

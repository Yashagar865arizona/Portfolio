export function createBreakoutSvg() {
    return `
        <svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
            <!-- Background Pattern -->
            <defs>
                <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                    <path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(100, 255, 218, 0.1)" stroke-width="0.5"/>
                </pattern>
                <!-- Brick Gradient -->
                <linearGradient id="brickGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#64ffda;stop-opacity:0.4"/>
                    <stop offset="100%" style="stop-color:#64ffda;stop-opacity:0.2"/>
                </linearGradient>
            </defs>
            
            <!-- Background -->
            <rect width="100" height="100" fill="url(#grid)"/>
            
            <!-- Game Container -->
            <rect x="5" y="5" width="90" height="90" rx="2" 
                  fill="rgba(100, 255, 218, 0.05)" 
                  stroke="rgba(100, 255, 218, 0.2)" 
                  stroke-width="0.5"/>
            
            <!-- Score -->
            <text x="10" y="15" fill="#64ffda" font-size="4">SCORE: 240</text>
            
            <!-- Bricks -->
            <g class="bricks">
                <!-- Row 1 -->
                <rect x="10" y="20" width="18" height="6" rx="1" fill="url(#brickGradient)" stroke="#64ffda" stroke-width="0.5">
                    <animate attributeName="fill-opacity" values="0.3;0.5;0.3" dur="3s" repeatCount="indefinite"/>
                </rect>
                <rect x="31" y="20" width="18" height="6" rx="1" fill="url(#brickGradient)" stroke="#64ffda" stroke-width="0.5">
                    <animate attributeName="fill-opacity" values="0.3;0.5;0.3" dur="3s" repeatCount="indefinite" begin="0.2s"/>
                </rect>
                <rect x="52" y="20" width="18" height="6" rx="1" fill="url(#brickGradient)" stroke="#64ffda" stroke-width="0.5">
                    <animate attributeName="fill-opacity" values="0.3;0.5;0.3" dur="3s" repeatCount="indefinite" begin="0.4s"/>
                </rect>
                <rect x="73" y="20" width="18" height="6" rx="1" fill="url(#brickGradient)" stroke="#64ffda" stroke-width="0.5">
                    <animate attributeName="fill-opacity" values="0.3;0.5;0.3" dur="3s" repeatCount="indefinite" begin="0.6s"/>
                </rect>
                
                <!-- Row 2 -->
                <rect x="10" y="29" width="18" height="6" rx="1" fill="url(#brickGradient)" stroke="#64ffda" stroke-width="0.5">
                    <animate attributeName="fill-opacity" values="0.3;0.5;0.3" dur="3s" repeatCount="indefinite" begin="0.8s"/>
                </rect>
                <rect x="31" y="29" width="18" height="6" rx="1" fill="url(#brickGradient)" stroke="#64ffda" stroke-width="0.5">
                    <animate attributeName="fill-opacity" values="0.3;0.5;0.3" dur="3s" repeatCount="indefinite" begin="1s"/>
                </rect>
                <rect x="52" y="29" width="18" height="6" rx="1" fill="url(#brickGradient)" stroke="#64ffda" stroke-width="0.5">
                    <animate attributeName="fill-opacity" values="0.3;0.5;0.3" dur="3s" repeatCount="indefinite" begin="1.2s"/>
                </rect>
                <rect x="73" y="29" width="18" height="6" rx="1" fill="url(#brickGradient)" stroke="#64ffda" stroke-width="0.5">
                    <animate attributeName="fill-opacity" values="0.3;0.5;0.3" dur="3s" repeatCount="indefinite" begin="1.4s"/>
                </rect>
                
                <!-- Row 3 -->
                <rect x="10" y="38" width="18" height="6" rx="1" fill="url(#brickGradient)" stroke="#64ffda" stroke-width="0.5">
                    <animate attributeName="fill-opacity" values="0.3;0.5;0.3" dur="3s" repeatCount="indefinite" begin="1.6s"/>
                </rect>
                <rect x="31" y="38" width="18" height="6" rx="1" fill="url(#brickGradient)" stroke="#64ffda" stroke-width="0.5">
                    <animate attributeName="fill-opacity" values="0.3;0.5;0.3" dur="3s" repeatCount="indefinite" begin="1.8s"/>
                </rect>
                <rect x="52" y="38" width="18" height="6" rx="1" fill="url(#brickGradient)" stroke="#64ffda" stroke-width="0.5">
                    <animate attributeName="fill-opacity" values="0.3;0.5;0.3" dur="3s" repeatCount="indefinite" begin="2s"/>
                </rect>
                <rect x="73" y="38" width="18" height="6" rx="1" fill="url(#brickGradient)" stroke="#64ffda" stroke-width="0.5">
                    <animate attributeName="fill-opacity" values="0.3;0.5;0.3" dur="3s" repeatCount="indefinite" begin="2.2s"/>
                </rect>
            </g>
            
            <!-- Ball -->
            <circle cx="50" cy="60" r="2" fill="#64ffda">
                <animate attributeName="cx" values="50;52;50;48;50" dur="2s" repeatCount="indefinite"/>
                <animate attributeName="cy" values="60;58;56;58;60" dur="2s" repeatCount="indefinite"/>
            </circle>
            
            <!-- Paddle -->
            <rect x="35" y="85" width="30" height="3" rx="1.5" fill="#64ffda" fill-opacity="0.8" stroke="#64ffda" stroke-width="0.5">
                <animate attributeName="fill-opacity" values="0.6;0.8;0.6" dur="2s" repeatCount="indefinite"/>
            </rect>
        </svg>
    `;
}

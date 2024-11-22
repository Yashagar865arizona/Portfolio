export function createMemoryGameSvg() {
    return `
        <svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
            <!-- Background Pattern -->
            <defs>
                <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                    <path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(100, 255, 218, 0.1)" stroke-width="0.5"/>
                </pattern>
            </defs>
            
            <!-- Background -->
            <rect width="100" height="100" fill="url(#grid)"/>
            
            <!-- Game Board -->
            <rect x="5" y="5" width="90" height="90" rx="2" 
                  fill="rgba(100, 255, 218, 0.05)" 
                  stroke="rgba(100, 255, 218, 0.2)" 
                  stroke-width="0.5"/>
            
            <!-- Score -->
            <text x="10" y="15" fill="#64ffda" font-size="4">MATCHES: 2</text>
            
            <!-- Memory Cards (4x4 grid) -->
            <g class="cards">
                <!-- Row 1 -->
                <rect x="10" y="20" width="18" height="24" rx="2" fill="rgba(100, 255, 218, 0.1)" stroke="#64ffda" stroke-width="0.5">
                    <animate attributeName="fill-opacity" values="0.1;0.2;0.1" dur="3s" repeatCount="indefinite"/>
                </rect>
                <rect x="32" y="20" width="18" height="24" rx="2" fill="rgba(100, 255, 218, 0.1)" stroke="#64ffda" stroke-width="0.5">
                    <animate attributeName="fill-opacity" values="0.1;0.2;0.1" dur="3s" repeatCount="indefinite" begin="0.2s"/>
                </rect>
                <rect x="54" y="20" width="18" height="24" rx="2" fill="rgba(100, 255, 218, 0.1)" stroke="#64ffda" stroke-width="0.5">
                    <animate attributeName="fill-opacity" values="0.1;0.2;0.1" dur="3s" repeatCount="indefinite" begin="0.4s"/>
                </rect>
                <rect x="76" y="20" width="18" height="24" rx="2" fill="rgba(100, 255, 218, 0.1)" stroke="#64ffda" stroke-width="0.5">
                    <animate attributeName="fill-opacity" values="0.1;0.2;0.1" dur="3s" repeatCount="indefinite" begin="0.6s"/>
                </rect>
                
                <!-- Row 2 -->
                <rect x="10" y="48" width="18" height="24" rx="2" fill="rgba(100, 255, 218, 0.1)" stroke="#64ffda" stroke-width="0.5">
                    <animate attributeName="fill-opacity" values="0.1;0.2;0.1" dur="3s" repeatCount="indefinite" begin="0.8s"/>
                </rect>
                <!-- Flipped Card 1 -->
                <g transform="translate(32,48)">
                    <rect width="18" height="24" rx="2" fill="rgba(100, 255, 218, 0.2)" stroke="#64ffda" stroke-width="0.5"/>
                    <text x="9" y="15" fill="#64ffda" font-size="8" text-anchor="middle">♦</text>
                </g>
                <rect x="54" y="48" width="18" height="24" rx="2" fill="rgba(100, 255, 218, 0.1)" stroke="#64ffda" stroke-width="0.5">
                    <animate attributeName="fill-opacity" values="0.1;0.2;0.1" dur="3s" repeatCount="indefinite" begin="1.2s"/>
                </rect>
                <!-- Flipped Card 2 -->
                <g transform="translate(76,48)">
                    <rect width="18" height="24" rx="2" fill="rgba(100, 255, 218, 0.2)" stroke="#64ffda" stroke-width="0.5"/>
                    <text x="9" y="15" fill="#64ffda" font-size="8" text-anchor="middle">♦</text>
                </g>
                
                <!-- Row 3 -->
                <rect x="10" y="76" width="18" height="24" rx="2" fill="rgba(100, 255, 218, 0.1)" stroke="#64ffda" stroke-width="0.5">
                    <animate attributeName="fill-opacity" values="0.1;0.2;0.1" dur="3s" repeatCount="indefinite" begin="1.6s"/>
                </rect>
                <rect x="32" y="76" width="18" height="24" rx="2" fill="rgba(100, 255, 218, 0.1)" stroke="#64ffda" stroke-width="0.5">
                    <animate attributeName="fill-opacity" values="0.1;0.2;0.1" dur="3s" repeatCount="indefinite" begin="1.8s"/>
                </rect>
                <rect x="54" y="76" width="18" height="24" rx="2" fill="rgba(100, 255, 218, 0.1)" stroke="#64ffda" stroke-width="0.5">
                    <animate attributeName="fill-opacity" values="0.1;0.2;0.1" dur="3s" repeatCount="indefinite" begin="2s"/>
                </rect>
                <rect x="76" y="76" width="18" height="24" rx="2" fill="rgba(100, 255, 218, 0.1)" stroke="#64ffda" stroke-width="0.5">
                    <animate attributeName="fill-opacity" values="0.1;0.2;0.1" dur="3s" repeatCount="indefinite" begin="2.2s"/>
                </rect>
            </g>
        </svg>
    `;
}

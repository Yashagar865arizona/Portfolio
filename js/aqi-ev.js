document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('aqi-ev-container');
    if (container) {
        // Create SVG element
        const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svg.setAttribute('viewBox', '0 0 100 100');
        svg.classList.add('aqi-ev-analysis');
        
        // Add SVG content
        svg.innerHTML = `
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
            </g>
        `;

        // Add AQI bars
        const aqiBarsGroup = document.createElementNS("http://www.w3.org/2000/svg", "g");
        aqiBarsGroup.classList.add('aqi-bars');
        aqiBarsGroup.setAttribute('transform', 'translate(15,5)');

        for (let i = 0; i < 48; i++) {
            const baseHeight = 45 - (i * 0.4);
            const seasonalVariation = Math.sin((i % 12) * Math.PI / 6) * 5;
            const randomVariation = Math.random() * 3 - 1.5;
            const height = Math.min(70, Math.max(15, baseHeight + seasonalVariation + randomVariation));
            const y = 75 - height;
            
            const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
            rect.setAttribute('x', `${i * 1.55 + 1}`);
            rect.setAttribute('y', `${y}`);
            rect.setAttribute('width', '1.2');
            rect.setAttribute('height', `${height}`);
            rect.setAttribute('fill', 'rgba(100, 255, 218, 0.2)');
            rect.classList.add('aqi-bar');
            
            const heightAnim = document.createElementNS("http://www.w3.org/2000/svg", "animate");
            heightAnim.setAttribute('attributeName', 'height');
            heightAnim.setAttribute('from', '0');
            heightAnim.setAttribute('to', `${height}`);
            heightAnim.setAttribute('dur', `${0.5 + i * 0.02}s`);
            heightAnim.setAttribute('fill', 'freeze');
            
            const yAnim = document.createElementNS("http://www.w3.org/2000/svg", "animate");
            yAnim.setAttribute('attributeName', 'y');
            yAnim.setAttribute('from', '75');
            yAnim.setAttribute('to', `${y}`);
            yAnim.setAttribute('dur', `${0.5 + i * 0.02}s`);
            yAnim.setAttribute('fill', 'freeze');
            
            rect.appendChild(heightAnim);
            rect.appendChild(yAnim);
            aqiBarsGroup.appendChild(rect);
        }

        svg.appendChild(aqiBarsGroup);

        // Add EV adoption line
        const evLineGroup = document.createElementNS("http://www.w3.org/2000/svg", "g");
        evLineGroup.classList.add('ev-line');
        evLineGroup.setAttribute('transform', 'translate(15,5)');

        // Create path for trend line
        const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
        let pathData = '';

        for (let i = 0; i < 49; i++) {
            const x = i * 1.55 + 1;
            const baseHeight = 45 - (i * 0.4);
            const aqiValue = Math.min(70, Math.max(15, baseHeight + Math.sin((i % 12) * Math.PI / 6) * 5));
            const maxAQI = 70;
            const minAQI = 15;
            const normalizedAQI = (aqiValue - minAQI) / (maxAQI - minAQI);
            const evAdoption = 75 - (normalizedAQI * 40 + 15);
            const growthFactor = Math.pow(i / 48, 0.5) * 10;
            const y = Math.max(25, Math.min(65, evAdoption - growthFactor));
            
            pathData += `${i === 0 ? 'M' : 'L'} ${x} ${y} `;
            
            // Add data points
            const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
            circle.setAttribute('cx', `${x}`);
            circle.setAttribute('cy', `${y}`);
            circle.setAttribute('r', '0.4');
            circle.setAttribute('fill', '#64ffda');
            circle.classList.add('data-point');
            
            const rAnim = document.createElementNS("http://www.w3.org/2000/svg", "animate");
            rAnim.setAttribute('attributeName', 'r');
            rAnim.setAttribute('from', '0');
            rAnim.setAttribute('to', '0.4');
            rAnim.setAttribute('dur', `${0.2 + i * 0.05}s`);
            rAnim.setAttribute('fill', 'freeze');
            
            circle.appendChild(rAnim);
            evLineGroup.appendChild(circle);
        }

        path.setAttribute('d', pathData);
        path.setAttribute('fill', 'none');
        path.setAttribute('stroke', '#64ffda');
        path.setAttribute('stroke-width', '0.5');
        
        const dashAnim = document.createElementNS("http://www.w3.org/2000/svg", "animate");
        dashAnim.setAttribute('attributeName', 'stroke-dasharray');
        dashAnim.setAttribute('from', '200');
        dashAnim.setAttribute('to', '0');
        dashAnim.setAttribute('dur', '3s');
        dashAnim.setAttribute('fill', 'freeze');
        
        path.appendChild(dashAnim);
        evLineGroup.appendChild(path);
        svg.appendChild(evLineGroup);

        // Add legend
        const legend = document.createElementNS("http://www.w3.org/2000/svg", "g");
        legend.setAttribute('transform', 'translate(15,90)');
        legend.innerHTML = `
            <rect x="0" y="0" width="3" height="3" fill="rgba(100, 255, 218, 0.3)" class="legend-bar"/>
            <text x="4.5" y="2.5" fill="#64ffda" font-size="2.5">Monthly AQI</text>
            <line x1="20" y1="1.5" x2="25" y2="1.5" stroke="#64ffda" stroke-width="0.5" class="legend-line"/>
            <circle cx="22.5" cy="1.5" r="0.4" fill="#64ffda" class="legend-point"/>
            <text x="27" y="2.5" fill="#64ffda" font-size="2.5">EV Adoption</text>
        `;
        svg.appendChild(legend);

        // Add SVG to container
        container.appendChild(svg);
    }
});

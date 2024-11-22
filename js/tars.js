    document.addEventListener('DOMContentLoaded', function() {
    // First, make sure D3.js is loaded
    if (typeof d3 === 'undefined') {
        const d3Script = document.createElement('script');
        d3Script.src = 'https://d3js.org/d3.v7.min.js';
        d3Script.onload = initTARS;
        document.head.appendChild(d3Script);
    } else {
        initTARS();
    }
});

function initTARS() {
    document.getElementById('tars-section').innerHTML = `
        <div class="project featured-project">
            <div class="project-content">
                <div class="project-info">
                    <h3>TARS - Advanced AI Assistant</h3>
                    <div class="project-description">
                        <p>A sophisticated AI assistant combining computer vision, natural language processing, and voice interaction capabilities. Features real-time face recognition, contextual memory, and adaptive personality traits inspired by advanced AI systems.</p>
                    </div>
                    <div class="project-tech-list">
                        <ul>
                            <li>Python</li>
                            <li>OpenAI</li>
                            <li>PyTorch</li>
                            <li>OpenCV</li>
                            <li>FAISS</li>
                        </ul>
                    </div>
                    <div class="project-links">
                        <a href="https://github.com/Yashagar865arizona/trs-main" class="btn" target="_blank" rel="noopener noreferrer">
                            <i class="fab fa-github"></i>
                            GitHub
                        </a>
                        <a href="#" class="btn btn-outline disabled">
                            <i class="fas fa-external-link-alt"></i>
                            Live
                        </a>
                    </div>
                </div>
                <div class="project-image">
                    <div id="tars-container" class="project-icon">
                        <!-- SVG will be dynamically inserted here -->
                    </div>
                </div>
            </div>
        </div>
    `;

    generateTARSVisualization();
}

// TARS SVG Generation
function generateTARSVisualization() {
    const svg = d3.select("#tars-container")
        .append("svg")
        .attr("viewBox", "0 0 400 400")
        .attr("preserveAspectRatio", "xMidYMid meet");

    // Add filters and gradients
    const defs = svg.append("defs");
    
    // Glow filter
    const filter = defs.append("filter")
        .attr("id", "glow")
        .attr("x", "-50%")
        .attr("y", "-50%")
        .attr("width", "200%")
        .attr("height", "200%");
        
    filter.append("feGaussianBlur")
        .attr("stdDeviation", "2")
        .attr("result", "coloredBlur");
        
    const feMerge = filter.append("feMerge");
    feMerge.append("feMergeNode")
        .attr("in", "coloredBlur");
    feMerge.append("feMergeNode")
        .attr("in", "SourceGraphic");

    // Modern glass morphism effect
    const glassFilter = defs.append("filter")
        .attr("id", "glass")
        .attr("x", "-50%")
        .attr("y", "-50%")
        .attr("width", "200%")
        .attr("height", "200%");

    glassFilter.append("feGaussianBlur")
        .attr("in", "SourceGraphic")
        .attr("stdDeviation", "4")
        .attr("result", "blur");

    glassFilter.append("feColorMatrix")
        .attr("in", "blur")
        .attr("type", "matrix")
        .attr("values", "1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7");

    // Background gradient
    const gradient = defs.append("linearGradient")
        .attr("id", "bg-gradient")
        .attr("x1", "0%")
        .attr("y1", "0%")
        .attr("x2", "100%")
        .attr("y2", "100%");

    gradient.append("stop")
        .attr("offset", "0%")
        .attr("style", "stop-color: rgba(100, 255, 218, 0.1)");

    gradient.append("stop")
        .attr("offset", "100%")
        .attr("style", "stop-color: rgba(10, 25, 47, 0.1)");

    // Background
    svg.append("rect")
        .attr("width", "100%")
        .attr("height", "100%")
        .attr("fill", "url(#bg-gradient)");

    // Add a subtle grid pattern
    const gridSize = 20;
    const grid = svg.append("g").attr("class", "grid");
    
    for (let x = 0; x <= 400; x += gridSize) {
        grid.append("line")
            .attr("x1", x)
            .attr("y1", 0)
            .attr("x2", x)
            .attr("y2", 400)
            .attr("stroke", "rgba(100, 255, 218, 0.1)")
            .attr("stroke-width", "0.5");
    }
    
    for (let y = 0; y <= 400; y += gridSize) {
        grid.append("line")
            .attr("x1", 0)
            .attr("y1", y)
            .attr("x2", 400)
            .attr("y2", y)
            .attr("stroke", "rgba(100, 255, 218, 0.1)")
            .attr("stroke-width", "0.5");
    }

    // Knowledge Base System (New component in top left)
    const knowledge = svg.append("g")
        .attr("transform", "translate(80,100)");

    // Hexagonal shape for knowledge base
    const hexagonPoints = [
        [0, -25], [22, -12.5], 
        [22, 12.5], [0, 25], 
        [-22, 12.5], [-22, -12.5]
    ].map(point => point.join(',')).join(' ');

    knowledge.append("polygon")
        .attr("points", hexagonPoints)
        .attr("class", "knowledge-base")
        .attr("fill", "#64ffda")
        .attr("fill-opacity", "0.2")
        .attr("stroke", "#64ffda")
        .attr("stroke-width", "2");

    // Add pulsing dots inside hexagon
    const dots = [[-10, -5], [10, -5], [0, 10]];
    dots.forEach(([x, y]) => {
        knowledge.append("circle")
            .attr("cx", x)
            .attr("cy", y)
            .attr("r", 3)
            .attr("class", "knowledge-dot")
            .attr("fill", "#64ffda");
    });

    // Core System
    const core = svg.append("g")
        .attr("transform", "translate(200,200)");

    core.append("circle")
        .attr("r", 30)
        .attr("class", "core-center")
        .attr("fill", "#64ffda")
        .attr("fill-opacity", "0.3")
        .attr("stroke", "#64ffda")
        .attr("stroke-width", "2");

    // Rotating rings
    const rings = [
        { radius: 40, class: "outer-ring" },
        { radius: 50, class: "middle-ring" },
        { radius: 60, class: "inner-ring" }
    ];

    rings.forEach(ring => {
        core.append("circle")
            .attr("r", ring.radius)
            .attr("class", ring.class)
            .attr("fill", "none")
            .attr("stroke", "#64ffda")
            .attr("stroke-width", "1")
            .attr("stroke-dasharray", "4,4");
    });

    // Core details
    const coreDetails = core.append("g")
        .attr("class", "core-detail");

    for (let i = 0; i < 8; i++) {
        const angle = (i * Math.PI * 2) / 8;
        coreDetails.append("line")
            .attr("x1", Math.cos(angle) * 20)
            .attr("y1", Math.sin(angle) * 20)
            .attr("x2", Math.cos(angle) * 35)
            .attr("y2", Math.sin(angle) * 35)
            .attr("stroke", "#64ffda")
            .attr("stroke-width", "2");
    }

    // Vision System
    const vision = svg.append("g")
        .attr("transform", "translate(320,100)");

    vision.append("circle")
        .attr("r", 25)
        .attr("class", "lens-base")
        .attr("fill", "#64ffda")
        .attr("fill-opacity", "0.2")
        .attr("stroke", "#64ffda")
        .attr("stroke-width", "2");

    vision.append("circle")
        .attr("r", 30)
        .attr("class", "lens-ring")
        .attr("fill", "none")
        .attr("stroke", "#64ffda")
        .attr("stroke-width", "1")
        .attr("stroke-dasharray", "2,4");

    // Scanning beam
    vision.append("path")
        .attr("d", "M-20,-20 L20,20")
        .attr("class", "scan-beam")
        .attr("stroke", "#64ffda")
        .attr("stroke-width", "2")
        .attr("stroke-opacity", "0.5");

    // Memory System
    const memory = svg.append("g")
        .attr("transform", "translate(80,300)");

    memory.append("rect")
        .attr("x", -25)
        .attr("y", -25)
        .attr("width", 50)
        .attr("height", 50)
        .attr("class", "memory-core")
        .attr("fill", "#64ffda")
        .attr("fill-opacity", "0.2")
        .attr("stroke", "#64ffda")
        .attr("stroke-width", "2");

    // Memory nodes
    const memoryNodes = [
        { x: -15, y: -15 },
        { x: 15, y: -15 },
        { x: -15, y: 15 },
        { x: 15, y: 15 }
    ];

    memoryNodes.forEach(node => {
        memory.append("circle")
            .attr("cx", node.x)
            .attr("cy", node.y)
            .attr("r", 4)
            .attr("class", "node-pulse")
            .attr("fill", "#64ffda");
    });

    // Memory paths
    memory.append("path")
        .attr("d", "M-15,-15 L15,-15 L15,15 L-15,15 Z")
        .attr("class", "memory-paths")
        .attr("fill", "none")
        .attr("stroke", "#64ffda")
        .attr("stroke-width", "1");

    // Communication System
    const comm = svg.append("g")
        .attr("transform", "translate(320,300)");

    comm.append("circle")
        .attr("r", 25)
        .attr("class", "comm-base")
        .attr("fill", "#64ffda")
        .attr("fill-opacity", "0.2")
        .attr("stroke", "#64ffda")
        .attr("stroke-width", "2");

    // Wave forms
    for (let i = 0; i < 3; i++) {
        const offset = i * 15;
        comm.append("path")
            .attr("d", `M-20,${offset-20} Q0,${offset-25} 20,${offset-20}`)
            .attr("class", "wave-form")
            .attr("fill", "none")
            .attr("stroke", "#64ffda")
            .attr("stroke-width", "1");
    }

    // Signal points
    for (let i = 0; i < 4; i++) {
        const angle = (i * Math.PI * 2) / 4;
        comm.append("circle")
            .attr("cx", Math.cos(angle) * 30)
            .attr("cy", Math.sin(angle) * 30)
            .attr("r", 2)
            .attr("class", "signal-point")
            .attr("fill", "#64ffda");
    }

    // Add label backgrounds and labels
    const labels = [
        { x: 200, y: 140, text: "CORE SYSTEM", width: 100 },
        { x: 320, y: 60, text: "VISION MODULE", width: 110 },
        { x: 80, y: 60, text: "KNOWLEDGE BASE", width: 120 },
        { x: 80, y: 340, text: "MEMORY BANK", width: 100 },
        { x: 320, y: 340, text: "COMM INTERFACE", width: 120 }
    ];

    labels.forEach(label => {
        const labelGroup = svg.append("g")
            .attr("class", "label-group")
            .attr("transform", `translate(${label.x},${label.y})`);

        // Label background
        labelGroup.append("rect")
            .attr("class", "label-bg")
            .attr("x", -label.width/2)
            .attr("y", -12)
            .attr("width", label.width)
            .attr("height", 20)
            .attr("filter", "url(#glass)");

        // Label text
        labelGroup.append("text")
            .attr("class", "component-label")
            .attr("text-anchor", "middle")
            .attr("dy", "0.3em")
            .text(label.text);
    });

    // Neural Network Connections
    const connections = [
        { source: [200,200], target: [320,100] },  // Core to Vision
        { source: [200,200], target: [80,300] },   // Core to Memory
        { source: [200,200], target: [320,300] },  // Core to Comm
        { source: [200,200], target: [80,100] },   // Core to Knowledge
        { source: [80,100], target: [320,100] },   // Knowledge to Vision
        { source: [80,100], target: [80,300] },    // Knowledge to Memory
        { source: [320,100], target: [320,300] },  // Vision to Comm
        { source: [80,300], target: [320,300] }    // Memory to Comm
    ];

    connections.forEach((conn, i) => {
        const pathId = `path-${i}`;
        const gradientId = `gradient-${i}`;

        // Create gradient for each path
        const pathGradient = defs.append("linearGradient")
            .attr("id", gradientId)
            .attr("gradientUnits", "userSpaceOnUse")
            .attr("x1", conn.source[0])
            .attr("y1", conn.source[1])
            .attr("x2", conn.target[0])
            .attr("y2", conn.target[1]);

        pathGradient.append("stop")
            .attr("offset", "0%")
            .attr("style", "stop-color: #64ffda; stop-opacity: 0.6");

        pathGradient.append("stop")
            .attr("offset", "100%")
            .attr("style", "stop-color: #64ffda; stop-opacity: 0.2");

        // Create path with gradient
        svg.append("path")
            .attr("id", pathId)
            .attr("d", `M${conn.source[0]},${conn.source[1]} L${conn.target[0]},${conn.target[1]}`)
            .attr("class", "neural-path")
            .attr("stroke", `url(#${gradientId})`)
            .attr("stroke-width", "1.5")
            .attr("filter", "url(#glow)");

        // Animated particle
        const particle = svg.append("circle")
            .attr("r", "2")
            .attr("class", "data-particle")
            .attr("fill", "#64ffda");

        particle.append("animateMotion")
            .attr("dur", "3s")
            .attr("repeatCount", "indefinite")
            .attr("path", `M${conn.source[0]},${conn.source[1]} L${conn.target[0]},${conn.target[1]}`);
    });

    // Add tooltips
    const tooltips = [
        { selector: ".core-center", text: "Central Processing Core" },
        { selector: ".lens-base", text: "Vision Analysis Module" },
        { selector: ".memory-core", text: "Memory Bank" },
        { selector: ".comm-base", text: "Communication Interface" },
        { selector: ".knowledge-base", text: "Knowledge & Learning Module" }
    ];

    tooltips.forEach(tooltip => {
        d3.selectAll(tooltip.selector)
            .append("title")
            .text(tooltip.text);
    });
}
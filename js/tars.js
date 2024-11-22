    document.addEventListener('DOMContentLoaded', function() {
    initTARS();
});

function initTARS() {
    const container = document.getElementById('tars-container');
    if (!container) return;

    // Create visualization container
    const visualization = document.createElement('div');
    visualization.className = 'project-icon tars-visualization';
    container.appendChild(visualization);

    // Create TARS core
    const core = document.createElement('div');
    core.className = 'tars-core';
    visualization.appendChild(core);

    // Create rings
    ['outer', 'middle', 'inner'].forEach(ringType => {
        const ring = document.createElement('div');
        ring.className = `tars-ring ${ringType}`;
        core.appendChild(ring);
    });

    // Create center and pulse
    const center = document.createElement('div');
    center.className = 'tars-center';
    core.appendChild(center);

    const pulse = document.createElement('div');
    pulse.className = 'tars-pulse';
    core.appendChild(pulse);

    // Add intersection observer for animations
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        },
        { threshold: 0.2 }
    );

    observer.observe(container);
}

// TARS SVG Generation
function generateTARSVisualization(isMobile) {
    const svg = d3.select("#tars-container")
        .append("svg")
        .attr("viewBox", "0 0 300 300")
        .attr("preserveAspectRatio", "xMidYMid meet")
        .attr("width", "100%")
        .attr("height", "100%");

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
    
    for (let x = 0; x <= 300; x += gridSize) {
        grid.append("line")
            .attr("x1", x)
            .attr("y1", 0)
            .attr("x2", x)
            .attr("y2", 300)
            .attr("stroke", "rgba(100, 255, 218, 0.1)")
            .attr("stroke-width", "0.5");
    }
    
    for (let y = 0; y <= 300; y += gridSize) {
        grid.append("line")
            .attr("x1", 0)
            .attr("y1", y)
            .attr("x2", 300)
            .attr("y2", y)
            .attr("stroke", "rgba(100, 255, 218, 0.1)")
            .attr("stroke-width", "0.5");
    }

    // Knowledge Base System (New component in top left)
    const knowledge = svg.append("g")
        .attr("transform", "translate(60,80)");

    // Hexagonal shape for knowledge base
    const hexagonPoints = [
        [0, -20], [18, -10], 
        [18, 10], [0, 20], 
        [-18, 10], [-18, -10]
    ].map(point => point.join(',')).join(' ');

    knowledge.append("polygon")
        .attr("points", hexagonPoints)
        .attr("class", "knowledge-base")
        .attr("fill", "#64ffda")
        .attr("fill-opacity", "0.2")
        .attr("stroke", "#64ffda")
        .attr("stroke-width", "2");

    // Add pulsing dots inside hexagon
    const dots = [[-8, -4], [8, -4], [0, 8]];
    dots.forEach(([x, y]) => {
        knowledge.append("circle")
            .attr("cx", x)
            .attr("cy", y)
            .attr("r", 2)
            .attr("class", "knowledge-dot")
            .attr("fill", "#64ffda");
    });

    // Core System
    const core = svg.append("g")
        .attr("transform", "translate(150,150)");

    core.append("circle")
        .attr("r", 25)
        .attr("class", "core-center")
        .attr("fill", "#64ffda")
        .attr("fill-opacity", "0.3")
        .attr("stroke", "#64ffda")
        .attr("stroke-width", "2");

    // Rotating rings
    const rings = [
        { radius: 30, class: "outer-ring" },
        { radius: 40, class: "middle-ring" },
        { radius: 50, class: "inner-ring" }
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
            .attr("x1", Math.cos(angle) * 15)
            .attr("y1", Math.sin(angle) * 15)
            .attr("x2", Math.cos(angle) * 25)
            .attr("y2", Math.sin(angle) * 25)
            .attr("stroke", "#64ffda")
            .attr("stroke-width", "2");
    }

    // Vision System
    const vision = svg.append("g")
        .attr("transform", "translate(240,80)");

    vision.append("circle")
        .attr("r", 20)
        .attr("class", "lens-base")
        .attr("fill", "#64ffda")
        .attr("fill-opacity", "0.2")
        .attr("stroke", "#64ffda")
        .attr("stroke-width", "2");

    vision.append("circle")
        .attr("r", 25)
        .attr("class", "lens-ring")
        .attr("fill", "none")
        .attr("stroke", "#64ffda")
        .attr("stroke-width", "1")
        .attr("stroke-dasharray", "2,4");

    // Scanning beam
    vision.append("path")
        .attr("d", "M-15,-15 L15,15")
        .attr("class", "scan-beam")
        .attr("stroke", "#64ffda")
        .attr("stroke-width", "2")
        .attr("stroke-opacity", "0.5");

    // Memory System
    const memory = svg.append("g")
        .attr("transform", "translate(60,240)");

    memory.append("rect")
        .attr("x", -20)
        .attr("y", -20)
        .attr("width", 40)
        .attr("height", 40)
        .attr("class", "memory-core")
        .attr("fill", "#64ffda")
        .attr("fill-opacity", "0.2")
        .attr("stroke", "#64ffda")
        .attr("stroke-width", "2");

    // Memory nodes
    const memoryNodes = [
        { x: -10, y: -10 },
        { x: 10, y: -10 },
        { x: -10, y: 10 },
        { x: 10, y: 10 }
    ];

    memoryNodes.forEach(node => {
        memory.append("circle")
            .attr("cx", node.x)
            .attr("cy", node.y)
            .attr("r", 3)
            .attr("class", "node-pulse")
            .attr("fill", "#64ffda");
    });

    // Memory paths
    memory.append("path")
        .attr("d", "M-10,-10 L10,-10 L10,10 L-10,10 Z")
        .attr("class", "memory-paths")
        .attr("fill", "none")
        .attr("stroke", "#64ffda")
        .attr("stroke-width", "1");

    // Communication System
    const comm = svg.append("g")
        .attr("transform", "translate(240,240)");

    comm.append("circle")
        .attr("r", 20)
        .attr("class", "comm-base")
        .attr("fill", "#64ffda")
        .attr("fill-opacity", "0.2")
        .attr("stroke", "#64ffda")
        .attr("stroke-width", "2");

    // Wave forms
    for (let i = 0; i < 3; i++) {
        const offset = i * 10;
        comm.append("path")
            .attr("d", `M-15,${offset-15} Q0,${offset-20} 15,${offset-15}`)
            .attr("class", "wave-form")
            .attr("fill", "none")
            .attr("stroke", "#64ffda")
            .attr("stroke-width", "1");
    }

    // Signal points
    for (let i = 0; i < 4; i++) {
        const angle = (i * Math.PI * 2) / 4;
        comm.append("circle")
            .attr("cx", Math.cos(angle) * 25)
            .attr("cy", Math.sin(angle) * 25)
            .attr("r", 2)
            .attr("class", "signal-point")
            .attr("fill", "#64ffda");
    }

    // Add label backgrounds and labels
    const labels = [
        { x: 150, y: 110, text: "CORE SYSTEM", width: 80 },
        { x: 240, y: 50, text: "VISION MODULE", width: 90 },
        { x: 60, y: 50, text: "KNOWLEDGE BASE", width: 100 },
        { x: 60, y: 260, text: "MEMORY BANK", width: 80 },
        { x: 240, y: 260, text: "COMM INTERFACE", width: 100 }
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
        { source: [150,150], target: [240,80] },  // Core to Vision
        { source: [150,150], target: [60,240] },   // Core to Memory
        { source: [150,150], target: [240,240] },  // Core to Comm
        { source: [150,150], target: [60,80] },   // Core to Knowledge
        { source: [60,80], target: [240,80] },   // Knowledge to Vision
        { source: [60,80], target: [60,240] },    // Knowledge to Memory
        { source: [240,80], target: [240,240] },  // Vision to Comm
        { source: [60,240], target: [240,240] }    // Memory to Comm
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

    // Adjust animation complexity for mobile
    if (isMobile) {
        // Reduce number of particles
        const particleCount = Math.floor(100 * 0.6);
        // Increase animation intervals to improve performance
        const animationInterval = 2000 * 1.5;
        
        // Add touch event listeners for interactive elements
        svg.selectAll(".interactive-element")
            .on("touchstart", function() {
                d3.select(this)
                    .transition()
                    .duration(200)
                    .style("opacity", 0.8);
            })
            .on("touchend", function() {
                d3.select(this)
                    .transition()
                    .duration(200)
                    .style("opacity", 1);
            });
    }
}

function startTARSAnimations() {
    // Start animations for TARS components
    const svg = d3.select("#tars-container svg");
    
    svg.selectAll(".neural-path")
        .style("opacity", 0.6)
        .style("animation", "neuralPulse 3s ease-in-out infinite");
    
    svg.selectAll(".data-particle")
        .style("opacity", 0.8)
        .style("animation", "particleFlow 4s linear infinite");
    
    svg.selectAll(".tars-center")
        .style("opacity", 1)
        .style("animation", "pulse 3s ease-in-out infinite");
}
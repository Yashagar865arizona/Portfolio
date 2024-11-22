document.addEventListener('DOMContentLoaded', function() {
    // Load navigation section
    document.getElementById('nav-section').innerHTML = `
        <nav class="nav-container">
            <div class="nav-logo">
                <div class="logo-vector">
                    <div class="logo-hexagon"></div>
                    <div class="logo-inner">
                        <span class="logo-text">YA</span>
                    </div>
                </div>
            </div>
            <div class="hamburger">
                <span></span><span></span><span></span>
            </div>
            <ul class="nav-links">
                <li><a href="#about">About</a></li>
                <li><a href="#tars-section">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    `;

    // Load landing section
    document.getElementById('landing-section').innerHTML = `
        <section id="landing-page">
            <div class="logo-container">
                <div class="logo-vector">
                    <div class="logo-hexagon"></div>
                    <div class="logo-inner">
                        <span class="logo-text">YA</span>
                    </div>
                </div>
            </div>
            <div class="hero-content">
                <h1 class="main-title">Hi, I'm <span class="highlight">Yash</span></h1>
                <p class="subtitle">AI Engineer & Full Stack Developer</p>
                <p class="description">Specializing in AI-powered applications and innovative web solutions</p>
                <div class="cta-buttons">
                    <a href="#tars-section" class="btn btn-primary">View My Work</a>
                    <a href="#contact" class="btn btn-outline">Get In Touch</a>
                </div>
            </div>
        </section>
    `;

    // Load about section
    document.getElementById('about-section').innerHTML = `
        <section id="about">
            <h2 class="section-title">About Me</h2>
            <div class="about-content">
                <div class="about-text">
                    <p class="lead-text">Creating intelligent solutions that push the boundaries of technology.</p>
                    <p>As an AI Engineer and Full Stack Developer, I specialize in developing advanced AI applications and modern web solutions. My flagship project, TARS, demonstrates my ability to create sophisticated AI systems that can understand, learn, and interact naturally with users.</p>
                    <p>With a deep understanding of both AI/ML technologies and full-stack development, I bridge the gap between complex AI systems and user-friendly applications. I'm passionate about leveraging cutting-edge technologies to solve real-world problems and create impactful solutions.</p>
                    <p>My experience spans from developing intelligent AI assistants and data analysis tools to creating engaging games and web applications. I believe in writing clean, maintainable code and following best practices in software development. Whether it's implementing complex algorithms, designing intuitive user interfaces, or optimizing system performance, I approach each project with attention to detail and a focus on quality.</p>
                </div>
                <div class="skills-container">
                    <div class="skill">
                        <h3>AI & Machine Learning</h3>
                        <ul class="skill-list">
                            <li>Natural Language Processing</li>
                            <li>OpenAI GPT Integration</li>
                            <li>Machine Learning Models</li>
                            <li>Neural Networks</li>
                        </ul>
                    </div>
                    <div class="skill">
                        <h3>Backend Development</h3>
                        <ul class="skill-list">
                            <li>Python & FastAPI</li>
                            <li>Node.js & Express</li>
                            <li>RESTful APIs</li>
                            <li>Database Architecture</li>
                        </ul>
                    </div>
                    <div class="skill">
                        <h3>Frontend & Tools</h3>
                        <ul class="skill-list">
                            <li>React & Next.js</li>
                            <li>Docker & Kubernetes</li>
                            <li>AWS & Cloud Services</li>
                            <li>CI/CD & DevOps</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    `;

    // Add event listener for hamburger menu
    document.querySelector('.hamburger').addEventListener('click', function() {
        document.querySelector('.nav-links').classList.toggle('active');
    });
});

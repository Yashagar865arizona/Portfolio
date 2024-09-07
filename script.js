// JavaScript for smooth scroll-based animations tied to scroll percentage
window.addEventListener('scroll', function() {
    const logo = document.getElementById('background-logo');
    const sections = document.querySelectorAll('section');

    let scrollY = window.scrollY; // Current scroll position
    let windowHeight = window.innerHeight; // Viewport height

    // Calculate the percentage of scroll for the background logo
    let scrollPercent = Math.min(scrollY / windowHeight, 1); // Clamped between 0 and 1

    // Adjust logo opacity and scale based on scroll percentage
    logo.style.opacity = 1 - scrollPercent; // Fades out as you scroll down
    logo.style.transform = `scale(${1 - (0.5 * scrollPercent)})`; // Scales down as you scroll down

    // Loop through each section and apply a scroll effect
    sections.forEach((section, index) => {
        let sectionTop = section.getBoundingClientRect().top;
        let scrollPos = (windowHeight - sectionTop) / windowHeight; // Calculate position in viewport
        let sectionScrollPercent = Math.min(Math.max(scrollPos, 0), 1); // Keep between 0 and 1

        // Apply fading and moving based on scroll percentage
        section.style.opacity = sectionScrollPercent;
        section.style.transform = `translateY(${50 * (1 - sectionScrollPercent)}px)`; // Moves up as you scroll down
    });
});
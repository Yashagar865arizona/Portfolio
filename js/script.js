// Add at the start of the file
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Improved smooth scroll with animation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const target = document.querySelector(targetId);
        
        if (!target) return;

        // Close mobile menu if open
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
        }

        // Calculate scroll position
        const headerOffset = 80; // Adjust this value based on your header height
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        // Smooth scroll
        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });

        // Update URL without jumping
        history.pushState(null, '', targetId);

        // Add active class to the clicked section
        document.querySelectorAll('section').forEach(section => {
            section.classList.remove('active');
        });
        target.classList.add('active');
    });
});

// Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Enhanced scroll animations
const optimizedScroll = debounce(() => {
    const sections = document.querySelectorAll('section');
    const windowHeight = window.innerHeight;

    sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        const scrollPercent = Math.min(Math.max((windowHeight - rect.top) / windowHeight, 0), 1);
        
        // Add staggered animation delay based on section index
        const delay = index * 0.1;
        const adjustedPercent = Math.max(0, scrollPercent - delay);

        smoothAnimation(section, {
            opacity: adjustedPercent,
            transform: `
                translateY(${20 * (1 - adjustedPercent)}px)
                scale(${0.98 + (0.02 * adjustedPercent)})
            `
        });
    });
}, 16);

window.addEventListener('scroll', optimizedScroll);

// Use requestAnimationFrame for smooth animations
function smoothAnimation(element, properties) {
    requestAnimationFrame(() => {
        Object.entries(properties).forEach(([key, value]) => {
            element.style[key] = value;
        });
    });
}

// Form handling
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const data = Object.fromEntries(formData);
        
        // Add loading state
        const submitButton = this.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;
        submitButton.textContent = 'Sending...';
        submitButton.disabled = true;

        // Simulate form submission (replace with actual API call)
        setTimeout(() => {
            console.log('Form data:', data);
            submitButton.textContent = 'Message Sent!';
            this.reset();
            
            // Reset button after 2 seconds
            setTimeout(() => {
                submitButton.textContent = originalText;
                submitButton.disabled = false;
            }, 2000);
        }, 1000);
    });
}

// Add intersection observer for skill animations
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.skill').forEach(skill => {
    observer.observe(skill);
});

// Add ARIA labels and keyboard navigation
document.querySelectorAll('.nav-links a, .btn').forEach(element => {
    // Add focus styles
    element.addEventListener('focus', () => {
        element.style.outline = `2px solid ${getComputedStyle(document.documentElement)
            .getPropertyValue('--primary')}`;
    });

    // Remove focus styles on blur
    element.addEventListener('blur', () => {
        element.style.outline = 'none';
    });
});

// Add keyboard navigation for hamburger menu
const hamburger = document.querySelector('.hamburger');
if (hamburger) {
    hamburger.setAttribute('role', 'button');
    hamburger.setAttribute('aria-label', 'Menu');
    hamburger.setAttribute('tabindex', '0');
    
    hamburger.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            hamburger.click();
        }
    });
}

// Background particles animation
function createParticleBackground() {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.zIndex = '1';
    canvas.style.pointerEvents = 'none';
    document.body.prepend(canvas);

    let particles = [];
    const particleCount = 100;

    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    class Particle {
        constructor() {
            this.reset();
        }

        reset() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 2;
            this.speedX = (Math.random() - 0.5) * 0.5;
            this.speedY = (Math.random() - 0.5) * 0.5;
            this.opacity = Math.random() * 0.5;
        }

        update() {
            this.x += this.speedX;
            this.y += this.speedY;

            if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
            if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;

            this.opacity += (Math.random() - 0.5) * 0.01;
            if (this.opacity < 0.1) this.opacity = 0.1;
            if (this.opacity > 0.5) this.opacity = 0.5;
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(100, 255, 218, ${this.opacity})`;
            ctx.fill();
        }
    }

    function init() {
        particles = [];
        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(particle => {
            particle.update();
            particle.draw();
        });
        requestAnimationFrame(animate);
    }

    window.addEventListener('resize', resize);
    resize();
    init();
    animate();
}

// Initialize particle background
createParticleBackground();

document.documentElement.style.scrollBehavior = 'smooth';
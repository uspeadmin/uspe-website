// ═══════════════════════════════════════════════════════════════
// UsPe Website JavaScript
// ═══════════════════════════════════════════════════════════════

document.addEventListener('DOMContentLoaded', function() {
    
    // ═══════════════════════════════════════════════════════════════
    // Mobile Menu Toggle
    // ═══════════════════════════════════════════════════════════════
    
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            mobileMenuBtn.classList.toggle('active');
            
            // Animate hamburger icon
            const spans = mobileMenuBtn.querySelectorAll('span');
            if (mobileMenuBtn.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
        
        // Close mobile menu when clicking a link
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                mobileMenuBtn.classList.remove('active');
                
                const spans = mobileMenuBtn.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            });
        });
    }
    
    // ═══════════════════════════════════════════════════════════════
    // Smooth Scrolling for Anchor Links
    // ═══════════════════════════════════════════════════════════════
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Skip if it's just "#" or empty
            if (href === '#' || href === '') {
                e.preventDefault();
                return;
            }
            
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                
                const navHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = target.offsetTop - navHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // ═══════════════════════════════════════════════════════════════
    // Navbar Background on Scroll
    // ═══════════════════════════════════════════════════════════════
    
    const navbar = document.querySelector('.navbar');
    let lastScroll = 0;
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        // Add shadow when scrolled
        if (currentScroll > 50) {
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.boxShadow = 'none';
        }
        
        lastScroll = currentScroll;
    });
    
    // ═══════════════════════════════════════════════════════════════
    // Intersection Observer for Fade-in Animations
    // ═══════════════════════════════════════════════════════════════
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe all cards and sections
    const elementsToAnimate = document.querySelectorAll(`
        .problem-card,
        .feature-card,
        .timeline-item,
        .impact-item,
        .recognition-card,
        .tech-card
    `);
    
    elementsToAnimate.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
    
    // Add fade-in class styles dynamically
    const style = document.createElement('style');
    style.textContent = `
        .fade-in {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(style);
    
    // ═══════════════════════════════════════════════════════════════
    // Stats Counter Animation
    // ═══════════════════════════════════════════════════════════════
    
    function animateCounter(element, target, suffix = '') {
        let current = 0;
        const increment = target / 50; // 50 steps
        const duration = 2000; // 2 seconds
        const stepTime = duration / 50;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                element.textContent = target + suffix;
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(current) + suffix;
            }
        }, stepTime);
    }
    
    // Observe stats and animate when visible
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const statNumber = entry.target.querySelector('.stat-big-number');
                if (statNumber && !statNumber.classList.contains('animated')) {
                    const text = statNumber.textContent;
                    const number = parseInt(text.replace(/[^0-9]/g, ''));
                    const suffix = text.replace(/[0-9]/g, '');
                    
                    statNumber.classList.add('animated');
                    animateCounter(statNumber, number, suffix);
                }
                statsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    document.querySelectorAll('.impact-stats-card').forEach(card => {
        statsObserver.observe(card);
    });
    
    // ═══════════════════════════════════════════════════════════════
    // Form Handling (if you add a contact form later)
    // ═══════════════════════════════════════════════════════════════
    
    const contactForm = document.querySelector('#contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData);
            
            // Here you would typically send to a backend
            console.log('Form submitted:', data);
            
            // Show success message
            alert('Thank you for your interest! We will contact you soon.');
            contactForm.reset();
        });
    }
    
    // ═══════════════════════════════════════════════════════════════
    // Mobile Menu Responsive Styles
    // ═══════════════════════════════════════════════════════════════
    
    // Add mobile menu styles dynamically
    const mobileStyle = document.createElement('style');
    mobileStyle.textContent = `
        @media (max-width: 768px) {
            .nav-links {
                position: fixed;
                top: 70px;
                left: -100%;
                width: 100%;
                height: calc(100vh - 70px);
                background: white;
                flex-direction: column;
                gap: 0;
                padding: 32px 24px;
                transition: left 0.3s ease;
                box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
            }
            
            .nav-links.active {
                left: 0;
            }
            
            .nav-links li {
                width: 100%;
                padding: 16px 0;
                border-bottom: 1px solid var(--border);
            }
            
            .nav-links a {
                display: block;
                width: 100%;
                font-size: 18px;
            }
            
            .btn-nav {
                display: block;
                text-align: center;
                margin-top: 16px;
            }
        }
    `;
    document.head.appendChild(mobileStyle);
    
    // ═══════════════════════════════════════════════════════════════
    // Console Log for Developers
    // ═══════════════════════════════════════════════════════════════
    
    console.log(`
    %c╔════════════════════════════════════════════╗
    ║                                            ║
    ║           UsPe - Website v1.0              ║
    ║      Uspe Kardo, Hisaab Humara            ║
    ║                                            ║
    ║   Built by: Toufeeq Ahmed Siddiqui        ║
    ║   MBA Final Year Project                   ║
    ║   Engineering College Ajmer                ║
    ║                                            ║
    ╚════════════════════════════════════════════╝
    `, 'color: #2563EB; font-weight: bold; font-size: 12px;');
});

// ═══════════════════════════════════════════════════════════════
// Utility Functions
// ═══════════════════════════════════════════════════════════════

// Debounce function for performance
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

// Check if element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

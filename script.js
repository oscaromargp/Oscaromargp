/**
 * OSCAROMARGP - Landing Page Script
 * Premium Dark Mode with Animations
 */

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functions
    initParticles();
    initNavbar();
    initMobileMenu();
    initScrollAnimations();
    initCounters();
    initFlipCards();
    initSmoothScroll();
    initFAQ();
    initForms();
});

/**
 * Particle System
 * Creates floating particles in the background
 */
function initParticles() {
    const container = document.getElementById('particles');
    if (!container) return;

    const particleCount = window.innerWidth < 768 ? 20 : 50;
    const colors = [
        'rgba(168, 85, 247, 0.4)',  // Primary purple
        'rgba(192, 132, 252, 0.3)', // Light purple
        'rgba(147, 51, 234, 0.3)',  // Dark purple
    ];

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Random position
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        
        // Random size
        const size = Math.random() * 4 + 2;
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        
        // Random color from palette
        particle.style.background = colors[Math.floor(Math.random() * colors.length)];
        
        // Random animation delay and duration
        particle.style.animationDelay = Math.random() * 20 + 's';
        particle.style.animationDuration = (15 + Math.random() * 10) + 's';
        
        container.appendChild(particle);
    }
}

/**
 * Navbar scroll effect
 * Changes appearance when scrolling
 */
function initNavbar() {
    const navbar = document.getElementById('navbar');
    if (!navbar) return;

    let lastScroll = 0;
    const scrollThreshold = 50;

    window.addEventListener('scroll', debounce(function() {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > scrollThreshold) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        lastScroll = currentScroll;
    }, 10));
}

/**
 * Mobile Menu Toggle
 */
function initMobileMenu() {
    const toggle = document.getElementById('mobileToggle');
    const navLinks = document.getElementById('navLinks');
    
    if (!toggle || !navLinks) return;

    toggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        
        // Animate hamburger
        const spans = toggle.querySelectorAll('span');
        if (navLinks.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });

    // Close menu when clicking a link
    const links = navLinks.querySelectorAll('.nav-link');
    links.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.classList.remove('active');
            const spans = toggle.querySelectorAll('span');
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        });
    });
}

/**
 * Scroll Animations
 * Reveal elements on scroll using Intersection Observer
 */
function initScrollAnimations() {
    const revealElements = document.querySelectorAll('.servicios, .casos-exito, .testimonios, .faq, .porque-elegirnos, .contacto, .cta-final');
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry, index) {
            if (entry.isIntersecting) {
                // Add stagger delay
                setTimeout(function() {
                    entry.target.classList.add('active');
                }, index * 100);
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    revealElements.forEach(function(el) {
        el.classList.add('reveal');
        observer.observe(el);
    });

    // Add stagger class to service cards
    const serviceCards = document.querySelectorAll('.service-card-flip');
    serviceCards.forEach(function(card, index) {
        card.classList.add('reveal-delay-' + ((index % 6) + 1));
    });
}

/**
 * Animated Counters
 * Counts up to target number
 */
function initCounters() {
    const counters = document.querySelectorAll('.stat-number[data-target]');
    
    const observerOptions = {
        threshold: 0.5
    };

    const counterObserver = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                const targetAttr = entry.target.getAttribute('data-target');
                const target = parseInt(targetAttr);
                if (!isNaN(target)) {
                    animateCounter(entry.target, target);
                }
                counterObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    counters.forEach(function(counter) {
        counterObserver.observe(counter);
    });
}

/**
 * Counter animation helper
 */
function animateCounter(element, target, duration) {
    duration = duration || 2000;
    const increment = target / (duration / 16);
    let current = 0;
    
    const timer = setInterval(function() {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

/**
 * Flip Cards for Mobile
 * Click to flip on touch devices
 */
function initFlipCards() {
    const cards = document.querySelectorAll('.service-card-flip');
    
    // Check if device supports hover (desktop)
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    
    if (isTouchDevice) {
        cards.forEach(function(card) {
            card.addEventListener('click', function(e) {
                // Prevent flip when clicking links inside card
                if (e.target.closest('a')) return;
                
                card.classList.toggle('flipped');
            });
        });
    }
}

/**
 * Smooth Scroll
 * Smooth scrolling for anchor links
 */
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(function(link) {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Skip if it's just #
            if (href === '#') return;
            
            const target = document.querySelector(href);
            
            if (target) {
                e.preventDefault();
                
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/**
 * Debounce helper function
 * Limits function execution rate
 */
function debounce(func, wait) {
    let timeout;
    return function() {
        const context = this;
        const args = arguments;
        clearTimeout(timeout);
        timeout = setTimeout(function() {
            func.apply(context, args);
        }, wait);
    };
}

/**
 * Lazy loading for images
 * Only loads images when in viewport
 */
function initLazyLoad() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    }, {
        rootMargin: '50px'
    });

    images.forEach(function(img) {
        imageObserver.observe(img);
    });
}

/**
 * Add glow effect to primary elements on hover
 */
document.addEventListener('mousemove', function(e) {
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;
    
    const sphere = document.querySelector('.sphere');
    if (sphere) {
        const moveX = (mouseX - 0.5) * 20;
        const moveY = (mouseY - 0.5) * 20;
        sphere.style.transform = `translate(${moveX}px, ${moveY}px)`;
    }
});

// Reset sphere position when mouse leaves window
document.addEventListener('mouseleave', function() {
    const sphere = document.querySelector('.sphere');
    if (sphere) {
        sphere.style.transform = 'translate(0, 0)';
    }
});

/**
 * FAQ Accordion
 * Toggle FAQ items
 */
function initFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(function(item) {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        
        if (question && answer) {
            // Set up for smooth animation
            answer.style.maxHeight = '0';
            answer.style.overflow = 'hidden';
            answer.style.transition = 'max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1), padding 0.4s ease, opacity 0.3s ease';
            answer.style.padding = '0 24px';
            answer.style.opacity = '0';
            
            // Add ARIA attributes for accessibility
            question.setAttribute('role', 'button');
            question.setAttribute('aria-expanded', 'false');
            question.style.cursor = 'pointer';
            
            question.addEventListener('click', function() {
                const isOpen = question.getAttribute('aria-expanded') === 'true';
                
                // Close all others
                faqItems.forEach(function(otherItem) {
                    const otherQuestion = otherItem.querySelector('.faq-question');
                    const otherAnswer = otherItem.querySelector('.faq-answer');
                    if (otherAnswer && otherItem !== item) {
                        otherAnswer.style.maxHeight = '0';
                        otherAnswer.style.padding = '0 24px';
                        otherAnswer.style.opacity = '0';
                        if (otherQuestion) otherQuestion.setAttribute('aria-expanded', 'false');
                    }
                });
                
                // Toggle current
                if (isOpen) {
                    answer.style.maxHeight = '0';
                    answer.style.padding = '0 24px';
                    answer.style.opacity = '0';
                    question.setAttribute('aria-expanded', 'false');
                } else {
                    answer.style.maxHeight = answer.scrollHeight + 40 + 'px';
                    answer.style.padding = '16px 24px';
                    answer.style.opacity = '1';
                    question.setAttribute('aria-expanded', 'true');
                }
            });
        }
    });
}

/**
 * Form Submission Handler
 * Handles native form submissions via Web3Forms API
 */
function initForms() {
    const forms = document.querySelectorAll('.premium-form');
    
    forms.forEach(function(form) {
        form.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            const submitBtn = form.querySelector('button[type="submit"]');
            const statusDiv = form.querySelector('.form-status');
            const originalText = submitBtn.innerHTML;
            
            // Disable button and show loading
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<span class="btn-icon">⏳</span> Enviando...';
            
            // Reset status
            statusDiv.className = 'form-status';
            statusDiv.style.display = 'none';
            
            try {
                const formData = new FormData(form);
                const response = await fetch(form.action, {
                    method: 'POST',
                    body: formData
                });
                
                const result = await response.json();
                
                if (result.success) {
                    statusDiv.className = 'form-status success';
                    statusDiv.textContent = '✅ ¡Mensaje enviado! Te contactaré en menos de 24 horas.';
                    statusDiv.style.display = 'block';
                    form.reset();
                } else {
                    throw new Error(result.message || 'Error al enviar');
                }
            } catch (error) {
                statusDiv.className = 'form-status error';
                statusDiv.textContent = '❌ Error al enviar. Intenta por WhatsApp: +52 612 107 8075';
                statusDiv.style.display = 'block';
            } finally {
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalText;
            }
        });
    });
}
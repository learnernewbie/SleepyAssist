// Animation helper function
function animateElement(element, keyframes, options) {
    return element.animate(keyframes, options);
}

// Initialize animations once DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Fade in elements on page load
    const fadeInElements = document.querySelectorAll('.header-content, .features-grid, .categories-grid, .cta-section');
    fadeInElements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            element.style.transition = 'all 0.6s ease';
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, index * 200);
    });

    // Add hover animations to feature cards
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-5px)';
            card.style.boxShadow = '0 10px 30px rgba(99, 102, 241, 0.1)';
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
            card.style.boxShadow = 'none';
        });
    });

    // Add hover animations to category cards
    const categoryCards = document.querySelectorAll('.category-card');
    categoryCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-5px)';
            card.style.borderColor = 'rgb(99, 102, 241)';
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
            card.style.borderColor = 'rgba(99, 102, 241, 0.2)';
        });
    });

    // Animate command items on scroll
    const commandItems = document.querySelectorAll('.command-item');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateX(0)';
            }
        });
    }, { threshold: 0.1 });

    commandItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateX(-20px)';
        item.style.transition = 'all 0.3s ease';
        observer.observe(item);
    });

    // Add pulse animation to CTA buttons
    const ctaButtons = document.querySelectorAll('.cta-button');
    ctaButtons.forEach(button => {
        const pulseAnimation = [
            { boxShadow: '0 0 0 0 rgba(239, 68, 68, 0)' },
            { boxShadow: '0 0 0 10px rgba(239, 68, 68, 0.2)' },
            { boxShadow: '0 0 0 20px rgba(239, 68, 68, 0)' }
        ];

        const pulseOptions = {
            duration: 2000,
            iterations: Infinity
        };

        animateElement(button, pulseAnimation, pulseOptions);
    });

    // Add floating animation to icons
    const floatingIcons = document.querySelectorAll('.bot-icon, .discord-icon');
    floatingIcons.forEach((icon, index) => {
        const floatAnimation = [
            { transform: 'translateY(0)' },
            { transform: 'translateY(-10px)' },
            { transform: 'translateY(0)' }
        ];

        const floatOptions = {
            duration: 3000,
            iterations: Infinity,
            easing: 'ease-in-out',
            delay: index * 500
        };

        animateElement(icon, floatAnimation, floatOptions);
    });
});

// Theme customization (if needed)
function updateTheme(color) {
    const themes = {
        indigo: {
            primary: 'rgb(99 102 241)',
            gradientStart: 'rgb(139 92 246)',
            gradientMid: 'rgb(217 70 239)',
            gradientEnd: 'rgb(236 72 153)'
        },
        purple: {
            primary: 'rgb(147 51 234)',
            gradientStart: 'rgb(147 51 234)',
            gradientMid: 'rgb(168 85 247)',
            gradientEnd: 'rgb(192 132 252)'
        },
        blue: {
            primary: 'rgb(59 130 246)',
            gradientStart: 'rgb(59 130 246)',
            gradientMid: 'rgb(99 102 241)',
            gradientEnd: 'rgb(139 92 246)'
        }
    };

    const selectedTheme = themes[color];
    if (selectedTheme) {
        document.documentElement.style.setProperty('--primary', selectedTheme.primary);
        document.documentElement.style.setProperty('--gradient-start', selectedTheme.gradientStart);
        document.documentElement.style.setProperty('--gradient-mid', selectedTheme.gradientMid);
        document.documentElement.style.setProperty('--gradient-end', selectedTheme.gradientEnd);
    }
}

// Animation helper function
function animateElement(element, keyframes, options) {
    return element.animate(keyframes, options);
}

// Features data
const features = [
    {
        icon: "bolt",
        title: "Lightning Fast",
        description: "Instant responses to all your commands"
    },
    {
        icon: "favorite",
        title: "User Friendly",
        description: "Easy to use commands for everyone"
    }
];

// Bot categories data
const botCategories = [
    {
        title: "Events Category",
        description: "Stay on top of your community's happenings with seamless event management.",
        icon: "calendar_month",
        commands: [
            { name: "/event", desc: "Create new events with custom details", admin: true },
            { name: "/cancel", desc: "Cancel scheduled events effortlessly", admin: true },
            { name: "/duplicate", desc: "Copy and replicate existing events", admin: true },
            { name: "/events", desc: "View all upcoming server events" },
            { name: "/notify", desc: "Send event reminders to participants", admin: true },
            { name: "/settimezone", desc: "Set your local time for events", admin: true }
        ]
    },
    {
        title: "Fun Category",
        description: "Add some fun and engagement to your server with these commands.",
        icon: "sentiment_very_satisfied",
        commands: [
            { name: "/coinflip", desc: "Flip a coin for a random result" },
            { name: "/poll", desc: "Create polls to get your community's opinion" },
            { name: "/pollstats", desc: "View the current results of your polls" },
            { name: "/endpoll", desc: "End an active poll prematurely", admin: true }
        ]
    },
    {
        title: "Utility Category",
        description: "Boost your server's efficiency with these handy tools.",
        icon: "build",
        commands: [
            { name: "/afk", desc: "Set your AFK status and message" },
            { name: "/botinvite", desc: "Get an invite link for the bot" },
            { name: "/calc", desc: "Perform quick calculations" },
            { name: "/remind", desc: "Set reminders for important tasks" },
            { name: "/serverinfo", desc: "Get information about your server" },
            { name: "/userinfo", desc: "Get information about a user" },
            { name: "/sticky", desc: "Pin a message to the top of the channel", admin: true },
            { name: "/unsticky", desc: "Remove a pinned message", admin: true }
        ]
    },
    {
        title: "Reputation Category",
        description: "Give recognition and rewards to your active community members.",
        icon: "military_tech",
        commands: [
            { name: "/rep", desc: "Give reputation points to other users" },
            { name: "/toprep", desc: "See the top users in the reputation leaderboard" },
            { name: "/repbackup", desc: "Create a backup of the reputation data", admin: true },
            { name: "/backupdata", desc: "Backup all server data", admin: true },
            { name: "/restorebackup", desc: "Restore a backup of the reputation data", admin: true }
        ]
    },
    {
        title: "Tickets Category",
        description: "Manage support tickets efficiently to provide quick assistance.",
        icon: "confirmation_number",
        commands: [
            { name: "/ticket", desc: "Open a new support ticket" },
            { name: "/ticketclose", desc: "Close an existing support ticket" },
            { name: "/getticket", desc: "Retrieve the transcript of a closed ticket" },
            { name: "/listsupportroles", desc: "View roles assigned for support" },
            { name: "/setticketchannel", desc: "Set the default channel for tickets", admin: true },
            { name: "/addsupportrole", desc: "Assign a role to handle support tickets", admin: true },
            { name: "/removesupportrole", desc: "Remove a support role", admin: true },
            { name: "/channelticketbackup", desc: "Set up a channel to store ticket backups", admin: true },
            { name: "/setticketmessage", desc: "Customize the messages for tickets", admin: true },
            { name: "/addticketrole", desc: "Grant access to a role for tickets", admin: true },
            { name: "/removeticketrole", desc: "Revoke access to a role for tickets", admin: true }
        ]
    },
    {
        title: "Birthday Category",
        description: "Celebrate birthdays with your community and never miss a special day.",
        icon: "cake",
        commands: [
            { name: "/setbirthday", desc: "Set your birthday" },
            { name: "/mybirthday", desc: "Check your own birthday" },
            { name: "/upcomingbirthdays", desc: "View upcoming birthdays in the server" },
            { name: "/birthdaylist", desc: "Browse a list of all birthdays", admin: true },
            { name: "/addbirthday", desc: "Add a birthday for a member", admin: true },
            { name: "/birthdayconfig", desc: "Configure birthday settings", admin: true }
        ]
    }
];

// Initialize animations once DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Populate features
    const featuresGrid = document.querySelector('.features-grid');
    const headerContent = document.querySelector('.content');

    // Update header content
    headerContent.innerHTML = `
        <h1 class="gradient-text">SleepyAssist</h1>
        <div class="icon-container">
            <div class="bot-icon">
                <span class="material-icons">smart_toy</span>
            </div>
            <div class="discord-icon">
                <span class="material-icons">discord</span>
            </div>
        </div>
        <p class="subtitle">Your All-in-One Server Management Solution</p>
        <p class="description">Streamline your server operations with powerful automation and intuitive controls</p>
    `;

    featuresGrid.innerHTML = features.map(feature => `
        <div class="feature-card">
            <span class="material-icons">${feature.icon}</span>
            <h3>${feature.title}</h3>
            <p>${feature.description}</p>
        </div>
    `).join('');

    // Add hover effects to feature cards
    const cards = document.querySelectorAll('.feature-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px)';
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
        });
    });


    // Add floating animation to icons
    const icons = document.querySelectorAll('.feature-icon');
    icons.forEach(icon => {
        icon.style.animation = 'float 3s ease-in-out infinite';
    });

    // Enhance hover effect
    document.querySelectorAll('.feature-icon').forEach(icon => {
        const pulseAnimation = [
            { transform: 'scale(1)', opacity: 0.5 },
            { transform: 'scale(1.1)', opacity: 0.2 },
            { transform: 'scale(1)', opacity: 0.5 }
        ];

        const pulseOptions = {
            duration: 2000,
            iterations: Infinity,
            easing: 'cubic-bezier(0.4, 0, 0.6, 1)'
        };

        icon.animate(pulseAnimation, pulseOptions);
    });


    // Update the animation for bot icon
    const botIcon = document.querySelector('.bot-icon');
    const botIconAnimation = [
        { transform: 'translateY(0) rotate(0deg)' },
        { transform: 'translateY(-10px) rotate(5deg)' },
        { transform: 'translateY(0) rotate(0deg)' }
    ];

    animateElement(botIcon, botIconAnimation, {
        duration: 3000,
        iterations: Infinity,
        easing: 'ease-in-out'
    });

    // Update Discord icon animation
    const discordIcon = document.querySelector('.discord-icon');
    const discordIconAnimation = [
        { transform: 'translateY(0) rotate(-5deg)' },
        { transform: 'translateY(-10px) rotate(5deg)' },
        { transform: 'translateY(0) rotate(-5deg)' }
    ];

    animateElement(discordIcon, discordIconAnimation, {
        duration: 3000,
        iterations: Infinity,
        easing: 'ease-in-out'
    });

    // Fade in animations for text
    const elements = [
        document.querySelector('.gradient-text'),
        document.querySelector('.subtitle'),
        document.querySelector('.description')
    ];

    elements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';

        setTimeout(() => {
            element.style.transition = 'all 0.6s ease';
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, index * 200);
    });

    // Populate categories and commands
    const categoriesGrid = document.querySelector('.categories-grid');
    categoriesGrid.innerHTML = botCategories.map(category => `
        <div class="category-card" data-category="${category.title.toLowerCase()}">
            <div class="category-header">
                <div class="category-icon">
                    <span class="material-icons">${category.icon}</span>
                </div>
                <h3>${category.title}</h3>
            </div>
            <p class="category-description">${category.description}</p>
            <div class="commands-list">
                ${category.commands.map(cmd => `
                    <div class="command-item">
                        <div class="${cmd.admin ? 'admin-command' : 'public-command'}">
                            <span class="material-icons">${cmd.admin ? 'lock' : 'public'}</span>
                        </div>
                        <div>
                            <p class="command-name">${cmd.name}</p>
                            <p class="command-desc">${cmd.desc}</p>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `).join('');

    // Add hover animations to category cards
    const categoryCards = document.querySelectorAll('.category-card');
    categoryCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-5px)';
            card.style.borderColor = 'rgba(99, 102, 241, 0.6)';
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
        item.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
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
    const floatingIcons = document.querySelectorAll('.bot-icon, .discord-icon, .feature-icon');
    floatingIcons.forEach((icon, index) => {
        const floatAnimation = [
            { transform: 'translateY(0)' },
            { transform: 'translateY(-10px)' },
            { transform: 'translateY(0)' }
        ];

        const floatOptions = {
            duration: 3000,
            iterations: Infinity,
            easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
            delay: index * 500
        };

        icon.animate(floatAnimation, floatOptions);
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
// UI Elements
const serverCountElement = document.getElementById('serverCount');
const userCountElement = document.getElementById('userCount');
const commandCountElement = document.getElementById('commandCount');
const botStatusElement = document.getElementById('botStatus');

// Initialize the dashboard with static data
function initializeDashboard() {
    // Set static numbers
    serverCountElement.textContent = '10';
    userCountElement.textContent = '500';
    commandCountElement.textContent = '1250';

    // Set bot status to online
    botStatusElement.textContent = 'Online';
    document.querySelector('.status-indicator').classList.add('online');
}

// Start the application
document.addEventListener('DOMContentLoaded', initializeDashboard);
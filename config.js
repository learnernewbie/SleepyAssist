// Dashboard Configuration
const config = {
    // Feature flags
    features: {
        monitoring: true,
        commandLogging: true,
        autoModeration: false
    },

    // Update intervals (in milliseconds)
    refreshIntervals: {
        stats: 5000,
        status: 3000
    }
};

export default config;
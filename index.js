// Write your code in this file!
// Define the currentUser variable
const currentUser = "John Smith";

// Generate the reply messages
const welcomeMessage = `Welcome to Flatbook, ${currentUser}!`;
const excitedWelcomeMessage = `WELCOME TO FLATBOOK, ${currentUser.toUpperCase()}!`;
const shortGreeting = `Welcome, ${currentUser.charAt(0)}!`;

module.exports = {
    currentUser,
    welcomeMessage,
    excitedWelcomeMessage,
    shortGreeting,
};

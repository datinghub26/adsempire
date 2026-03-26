// Your smartlinks
const links = [
    "https://tinyurl.com/3tkj328c",
    "https://tinyurl.com/3jma9hw2",
    "https://tinyurl.com/4nfd7z7a"
];

// Function to pick random link
function getRandomLink() {
    return links[Math.floor(Math.random() * links.length)];
}

// Button click redirect
function goToOffer() {
    const randomLink = getRandomLink();
    window.location.href = randomLink;
}

// OPTIONAL: Auto redirect after few seconds
setTimeout(() => {
    const randomLink = getRandomLink();
    window.location.href = randomLink;
}, 5000); // 5 seconds

let quotes = [
    "You are the sunshine that brightens my day.",
    "My love for you grows stronger with each passing day.",
    "You are my heart's desire and my soul's mate.",
    "Loving you is the best decision I've ever made.",
    "You are my forever and always.",
    "With you, every moment is a beautiful memory.",
    "Your smile is my favorite thing in the world.",
    "You complete me in every way.",
    "My love for you knows no bounds.",
    "I cherish every moment we spend together.",
    "You make my heart skip a beat.",
    "I am grateful for your love and support.",
    "You are my rock and my confidant.",
    "Your love is a treasure I hold dear.",
    "You make every day worth living.",
    "I am the luckiest person to have you in my life.",
    "You are my dream come true.",
    "I am always here for you, no matter what.",
    "You are the reason I believe in love.",
    "With you, life is a beautiful journey.",
    "Your love is my guiding light.",
    "You are my everything.",
    "I love you more than words can say.",
    "You are my best friend and my lover.",
    "I am blessed to have you by my side.",
    "You make my life complete.",
    "You are the love of my life.",
    "I will love you forever and always.",
    "You are my one and only.",
    "You are my heart's delight.",
    "I am thankful for every moment with you.",
    "You are my soulmate and my love.",
    "You are my greatest adventure.",
    "You are the love that I have always dreamed of.",
    "I am yours, and you are mine.",
    "You are my perfect match.",
    "You make my world a better place.",
    "You are my heart's true desire.",
    "I love you more than you will ever know.",
    "You are the love of my dreams.",
    "You are my everything, my love.",
    "You are the best thing that ever happened to me.",
    "You are my heart and my soul.",
    "You are the love that I hold dear.",
    "You are my one true love.",
    "You are my heart's deepest desire.",
    "You are my love and my life.",
    "You are my forever love.",
    "You are the love that completes me.",
    "You are my heart's joy.",
    "You are my love, my life, my everything.",
    "You are the love that fills my heart.",
    "You are my heart's greatest treasure.",
    "You are my love, my heart, my soul.",
    "You are the one I love.",
    "You are my heart's passion.",
    "You are my love, my heart's delight.",
    "You are my forever love, my heart's desire.",
    "You are my love, my heart, my everything.",
    "You are the love that fills my soul.",
    "You are my heart's true love.",
    "You are my love, my heart's desire.",
    "You are my heart's joy, my love.",
    "You are my heart's delight, my love.",
    "You are the love that fills my heart with joy.",
    "You are my love, my heart's greatest treasure.",
    "You are my heart's joy, my love.",
    "You are my love, my heart's delight.",
    "You are my heart's passion, my love.",
    "You are the love that fills my soul with joy.",
    "You are my love, my heart's true desire.",
    "You are my heart's joy, my love.",
    "You are my heart's delight, my love.",
    "You are the love that completes me, my heart.",
    "You are my heart's greatest treasure, my love.",
    "You are my heart's passion, my love.",
    "You are the love that fills my heart with joy.",
    "You are my love, my heart's delight.",
    "You are my heart's joy, my love.",
    "You are my heart's passion, my love.",
    "You are the love that fills my soul with joy.",
    "You are my love, my heart's true desire.",
    "You are my heart's joy, my love.",
    "You are my heart's delight, my love.",
    "You are the love that completes me, my heart.",
    "You are my heart's greatest treasure, my love.",
    "You are my heart's passion, my love.",
    "You are the love that fills my heart with joy.",
    "You are my love, my heart's delight.",
    "You are my heart's joy, my love.",
    "You are my heart's passion, my love.",
    "You are the love that fills my soul with joy.",
    "You are my love, my heart's true desire.",
    "You are my heart's joy, my love.",
    "You are my heart's delight, my love.",
    "You are the love that completes me, my heart.",
    "You are my heart's greatest treasure, my love.",
    "You are my heart's passion, my love.",
    "You are the love that fills my heart with joy.",
    "You are my love, my heart's delight."
];

let shuffledQuotes = [];

function shuffleQuotes() {
    shuffledQuotes = quotes.slice();
    for (let i = shuffledQuotes.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledQuotes[i], shuffledQuotes[j]] = [shuffledQuotes[j], shuffledQuotes[i]];
    }
}

function generateQuote() {
    if (shuffledQuotes.length === 0) {
        shuffleQuotes();
    }
    const quote = shuffledQuotes.pop();
    document.getElementById('quoteDisplay').innerText = quote;
}

// Initial shuffle
shuffleQuotes();

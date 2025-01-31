// script.js
const quoteDisplay = document.getElementById('quoteDisplay');
const newQuoteButton = document.getElementById('newQuote');

 ["innerHTML"]
["createAddQuoteForm"]
["createElement", "appendChild"]

let quotes = [
    { text: "The only way to do great work is to love what you do.", category: "Inspiration" },
    { text: "Innovation distinguishes between a leader and a follower.", category: "Leadership" },
    { text: "The future belongs to those who believe in the beauty of their dreams.", category: "Motivation" },
    // Add more initial quotes here
];

function showRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    quoteDisplay.textContent = `"${randomQuote.text}" - ${randomQuote.category}`;
}

function addQuote() {
    const newQuoteText = document.getElementById('newQuoteText').value;
    const newQuoteCategory = document.getElementById('newQuoteCategory').value;

    if (newQuoteText.trim() !== "" && newQuoteCategory.trim() !== "") {
        const newQuote = { text: newQuoteText, category: newQuoteCategory };
        quotes.push(newQuote);

        // Clear input fields after adding
        document.getElementById('newQuoteText').value = "";
        document.getElementById('newQuoteCategory').value = "";

        showRandomQuote(); // Optionally show a new quote after adding
    } else {
        alert("Please enter both a quote and a category.");
    }
}


newQuoteButton.addEventListener('click', showRandomQuote);

// Show initial quote on page load
showRandomQuote();

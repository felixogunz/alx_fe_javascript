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

// script.js
// ... (quoteDisplay, newQuoteButton, quotes array, showRandomQuote) ...

const exportQuotesButton = document.getElementById('exportQuotes');
const importFile = document.getElementById('importFile');

// Local Storage Functions
function saveQuotes() {
    localStorage.setItem('quotes', JSON.stringify(quotes));
}

function loadQuotes() {
    const storedQuotes = localStorage.getItem('quotes');
    if (storedQuotes) {
        quotes = JSON.parse(storedQuotes);
    }
}

// JSON Export
exportQuotesButton.addEventListener('click', () => {
    const quotesJson = JSON.stringify(quotes, null, 2); // Pretty print JSON
    const blob = new Blob([quotesJson], { type: 'application/json' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = 'quotes.json';
    a.style.display = 'none';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
});

// JSON Import
function importFromJsonFile(event) {
    const file = event.target.files[0];
    if (file) {
        const fileReader = new FileReader();
        fileReader.onload = function(event) {
            try {
                const importedQuotes = JSON.parse(event.target.result);

                // Validate the imported data (important!)
                if (Array.isArray(importedQuotes) && importedQuotes.every(quote => quote.text && quote.category)) {
                    quotes.push(...importedQuotes);  // Add the imported quotes
                    saveQuotes();                   // Save to local storage
                    showRandomQuote();                // Update the displayed quote
                    alert('Quotes imported successfully!');
                } else {
                    alert('Invalid JSON file format. Please provide a JSON file with an array of quote objects, each having "text" and "category" properties.');
                }


            } catch (error) {
                alert('Error parsing JSON file.  Please check the file format.');
                console.error("JSON parsing error:", error); // Log the error for debugging
            }
        };
        fileReader.readAsText(file);
    }
}


// ... (addQuote function - remember to call saveQuotes() after adding a quote) ...
function addQuote() {
    // ... (get text and category) ...

    if (newQuoteText.trim() !== "" && newQuoteCategory.trim() !== "") {
        const newQuote = { text: newQuoteText, category: newQuoteCategory };
        quotes.push(newQuote);
        saveQuotes();// Save to Local Storage
        // ... (clear inputs, show new quote) ...
    } else {
        alert("Please enter both a quote and a category.");
    }
}


// Load quotes from local storage on initialization
loadQuotes();
showRandomQuote(); // Show initial quote

newQuoteButton.addEventListener('click', showRandomQuote);

// script.js
// ... (quoteDisplay, newQuoteButton, quotes array, showRandomQuote) ...

const exportQuotesButton = document.getElementById('exportQuotes');
const importFile = document.getElementById('importFile');

// Local Storage Functions
function saveQuotes() {
    localStorage.setItem('quotes', JSON.stringify(quotes));
}

function loadQuotes() {
    const storedQuotes = localStorage.getItem('quotes');
    if (storedQuotes) {
        quotes = JSON.parse(storedQuotes);
    }
}

// JSON Export
exportQuotesButton.addEventListener('click', () => {
    const quotesJson = JSON.stringify(quotes, null, 2); // Pretty print JSON
    const blob = new Blob([quotesJson], { type: 'application/json' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = 'quotes.json';
    a.style.display = 'none';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
});

// JSON Import
function importFromJsonFile(event) {
    const file = event.target.files[0];
    if (file) {
        const fileReader = new FileReader();
        fileReader.onload = function(event) {
            try {
                const importedQuotes = JSON.parse(event.target.result);

                // Validate the imported data (important!)
                if (Array.isArray(importedQuotes) && importedQuotes.every(quote => quote.text && quote.category)) {
                    quotes.push(...importedQuotes);  // Add the imported quotes
                    saveQuotes();                   // Save to local storage
                    showRandomQuote();                // Update the displayed quote
                    alert('Quotes imported successfully!');
                } else {
                    alert('Invalid JSON file format. Please provide a JSON file with an array of quote objects, each having "text" and "category" properties.');
                }


            } catch (error) {
                alert('Error parsing JSON file.  Please check the file format.');
                console.error("JSON parsing error:", error); // Log the error for debugging
            }
        };
        fileReader.readAsText(file);
    }
}


// ... (addQuote function - remember to call saveQuotes() after adding a quote) ...
function addQuote() {
    // ... (get text and category) ...

    if (newQuoteText.trim() !== "" && newQuoteCategory.trim() !== "") {
        const newQuote = { text: newQuoteText, category: newQuoteCategory };
        quotes.push(newQuote);
        saveQuotes();// Save to Local Storage
        // ... (clear inputs, show new quote) ...
    } else {
        alert("Please enter both a quote and a category.");
    }
}


// Load quotes from local storage on initialization
loadQuotes();
showRandomQuote(); // Show initial quote

newQuoteButton.addEventListener('click', showRandomQuote);


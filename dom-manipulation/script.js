// script.js
const quoteDisplay = document.getElementById('quoteDisplay');
const newQuoteButton = document.getElementById('newQuote');

["innerHTML"]
["createAddQuoteForm"]
["createElement", "appendChild"]
["map"]
["fetchQuotesFromServer"]
["await", "async", "https://jsonplaceholder.typicode.com/posts"]

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

  let quotes = JSON.parse(localStorage.getItem('quotes')) || [
    { text: "The only way to do great work is to love what you do.", category: "Inspiration" },
    { text: "Innovation distinguishes between a leader and a follower.", category: "Innovation" },
    { text: "The future belongs to those who believe in the beauty of their dreams.", category: "Inspiration" },
    { text: "Strive not to be a success, but rather to be of value.", category: "Motivation" },
        {text: "The best time to plant a tree was 20 years ago. The second best time is today.", category: "Time Management"}


  ];

  localStorage.setItem('quotes', JSON.stringify(quotes));


  function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const displayedQuote = quotes[randomIndex].text;
    document.getElementById("quoteDisplay").textContent = `"${displayedQuote}"`;
  }

  function populateCategories() {
    const categorySet = new Set();
    quotes.forEach(quote => categorySet.add(quote.category));
    const categoryFilter = document.getElementById("categoryFilter");
    categorySet.forEach(category => {
      const option = document.createElement("option");
      option.value = category;
      option.text = category;
      categoryFilter.appendChild(option);
    });

        // Restore last selected filter
    const lastSelectedCategory = localStorage.getItem('lastSelectedCategory') || 'all';
    categoryFilter.value = lastSelectedCategory;
    filterQuotes(); // Apply the filter on load
  }

  function filterQuotes() {
    const selectedCategory = document.getElementById("categoryFilter").value;
    localStorage.setItem('lastSelectedCategory', selectedCategory); // Save the filter

    const quoteDisplay = document.getElementById("quoteDisplay");
    quoteDisplay.innerHTML = ""; // Clear previous quotes

    if (selectedCategory === "all") {
      generateQuote(); // Display a random quote if "All" is selected. You could choose to display all quotes instead.
    } else {
        const filteredQuotes = quotes.filter(quote => quote.category === selectedCategory);
        if (filteredQuotes.length > 0) {
            const randomIndex = Math.floor(Math.random() * filteredQuotes.length);
            quoteDisplay.textContent = `"${filteredQuotes[randomIndex].text}"`;
        } else {
            quoteDisplay.textContent = "No quotes found in this category.";
        }

    }
  }


  function addQuote() {
    const newQuoteInput = document.getElementById("newQuoteInput");
    const newCategoryInput = document.getElementById("newCategoryInput");
    const newQuote = newQuoteInput.value.trim();
    const newCategory = newCategoryInput.value.trim();

    if (newQuote !== "" && newCategory !== "") {
      quotes.push({ text: newQuote, category: newCategory });
      localStorage.setItem('quotes', JSON.stringify(quotes));

      newQuoteInput.value = "";
      newCategoryInput.value = "";

      // Update the categories dropdown
      const categoryFilter = document.getElementById("categoryFilter");
      categoryFilter.innerHTML = '<option value="all">All Categories</option>'; // Reset the options
      populateCategories();

      filterQuotes(); //Refresh the displayed quote
    }
  }



  // Initialize
  populateCategories();
  generateQuote();

const quoteDisplay = document.getElementById("quoteDisplay");
  const categoryFilter = document.getElementById("categoryFilter");
  const conflictNotification = document.getElementById("conflictNotification");

  let quotes = JSON.parse(localStorage.getItem('quotes')) || []; // Initialize from local storage

  // Simulate server interaction (using a simple timeout)
  function simulateServerFetch() {
    setTimeout(() => {
      const serverQuotes = [ // Simulate data from server
        { text: "Server Quote 1", category: "Server" },
        { text: "Server Quote 2", category: "Server" },
        { text: "A new quote from the cloud!", category: "Cloud" }
      ];
      syncData(serverQuotes);
    }, 2000); // Fetch every 2 seconds (adjust as needed)
  }

  function syncData(serverQuotes) {
    const localQuotes = JSON.parse(localStorage.getItem('quotes')) || [];

    // Simple conflict resolution: Server data wins
    if (JSON.stringify(localQuotes) !== JSON.stringify(serverQuotes)) {
      quotes = serverQuotes;
      localStorage.setItem('quotes', JSON.stringify(quotes));
      conflictNotification.textContent = "Data synced with server. Local changes overwritten.";
      populateCategories(); // Update categories
      filterQuotes();      // Update displayed quotes
    } else {
      conflictNotification.textContent = ""; // Clear notification if no conflict
    }
  }

  function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteDisplay.textContent = `"${quotes[randomIndex].text}"`;
  }

  function populateCategories() {
    const categorySet = new Set();
    quotes.forEach(quote => categorySet.add(quote.category));
    categoryFilter.innerHTML = '<option value="all">All Categories</option>'; // Reset options
    categorySet.forEach(category => {
      const option = document.createElement("option");
      option.value = category;
      option.text = category;
      categoryFilter.appendChild(option);
    });

    const lastSelectedCategory = localStorage.getItem('lastSelectedCategory') || 'all';
    categoryFilter.value = lastSelectedCategory;
    filterQuotes();
  }

  function filterQuotes() {
    const selectedCategory = categoryFilter.value;
    localStorage.setItem('lastSelectedCategory', selectedCategory);

    quoteDisplay.innerHTML = ""; // Clear previous quotes

    if (selectedCategory === "all") {
      generateQuote();
    } else {
      const filteredQuotes = quotes.filter(quote => quote.category === selectedCategory);
      if (filteredQuotes.length > 0) {
          const randomIndex = Math.floor(Math.random() * filteredQuotes.length);
          quoteDisplay.textContent = `"${filteredQuotes[randomIndex].text}"`;
      } else {
          quoteDisplay.textContent = "No quotes found in this category.";
      }
    }
  }

  function addQuote() {
    const newQuoteInput = document.getElementById("newQuoteInput");
    const newCategoryInput = document.getElementById("newCategoryInput");
    const newQuote = newQuoteInput.value.trim();
    const newCategory = newCategoryInput.value.trim();

    if (newQuote !== "" && newCategory !== "") {
      quotes.push({ text: newQuote, category: newCategory });
      localStorage.setItem('quotes', JSON.stringify(quotes));

      newQuoteInput.value = "";
      newCategoryInput.value = "";

      populateCategories();
      filterQuotes();
    }
  }


  // Initialize and start syncing
  populateCategories();
  generateQuote();
  simulateServerFetch(); // Start periodic fetching


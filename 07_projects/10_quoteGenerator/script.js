document.getElementById("new-quote").addEventListener("click", fetchQuote);

async function fetchQuote() {
    try {
        const response = await fetch("https://api.quotable.io/random");
        const data = await response.json();
        
        document.getElementById("quote").innerText = `"${data.content}"`;
        document.getElementById("author").innerText = `- ${data.author}`;
    } catch (error) {
        console.error("Error fetching quote:", error);
    }
}

// Load a quote when the page loads
fetchQuote();

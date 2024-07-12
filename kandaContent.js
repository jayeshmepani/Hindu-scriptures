// Function to fetch JSON file
function fetchJSONFile(filePath) {
    return fetch(filePath)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Failed to fetch JSON file: ${filePath}`);
            }
            return response.json();
        })
        .catch(error => {
            console.error(`Error fetching JSON file: ${filePath}`, error);
            throw error;
        });
}

// Function to display the content of a selected Kanda on kandaContent.html
function displayKandaContent() {
    // Get query parameters from the URL
    const searchResultsContainer = document.querySelector('.search-results');
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);

    // Get kandaNumber and selectedKanda from URL parameters
    const kandaNumber = urlParams.get('kandaNumber');
    const selectedKanda = urlParams.get('selectedKanda');

    // Log the values for debugging
    console.log(`kandaNumber: ${kandaNumber}, selectedKanda: ${selectedKanda}`);

    // Check if selectedKanda is not undefined before using toLowerCase
    if (selectedKanda) {
        // Use selectedKanda.toLowerCase() safely
        console.log(`Lowercased selectedKanda: ${selectedKanda.toLowerCase()}`);
    } else {
        console.log('selectedKanda is undefined or null');
    }

    // Add additional parameters to the URL
    const additionalParams = `&_x_tr_sl=sa&_x_tr_tl=en&_x_tr_hl=en-GB`;
    const originalBaseUrl = 'https://jayeshmepani.github.io';
    const translatedBaseUrl = 'https://jayeshmepani-github-io.translate.goog';
    const currentUrl = window.location.href;
    const translatedUrl = currentUrl.replace(originalBaseUrl, translatedBaseUrl);
    const extendedUrl = `${translatedUrl}${additionalParams}`;
    console.log(`Extended URL: ${extendedUrl}`);

    // Open the new URL in a new tab
    window.open(extendedUrl, '_blank');

    // Load the JSON file dynamically based on the selected Kanda
    const jsonFilePath = `DharmicData/ValmikiRamayana/${kandaNumber}_${selectedKanda.toLowerCase()}.json`;
    console.log(`jsonFilePath: ${jsonFilePath}`);

    // Fetch and display the JSON file content
    fetchJSONFile(jsonFilePath)
        .then(data => {
            // Log the data for debugging
            console.log('Fetched data:', data);

            // Display the content in the search-results container
            data.forEach(entry => {
                const entryDetails = document.createElement('div');
                // Display Kaanda, Sarg, Shloka, and Text
                entryDetails.innerHTML = `
                    <div style="display: grid; align-items: center; justify-content: center;">
                        <p style="color: yellow;">Kaanda: ${entry.kaanda.charAt(0).toUpperCase() + entry.kaanda.slice(1)}</p>
                        <p style="color: white;">Sarg: ${entry.sarg}</p>
                        <p style="color: white;">Shloka: ${entry.shloka}</p>
                        <p style="color: orange;">${formatText(entry.text)}</p>
                        <br><br>
                    </div>
                `;

                searchResultsContainer.appendChild(entryDetails);
            });
        })
        .catch(error => {
            console.error(`Error loading ${selectedKanda} data:`, error);
            displayNoResults();
        });
}

// Function to format text
function formatText(text) {
    const indexOfPipe = text.indexOf('।');
    if (indexOfPipe !== -1) {
        return text.replace('।', ' ।<br>');
    }
    return text;
}

// Function to display no results message
function displayNoResults() {
    const searchResultsContainer = document.querySelector('.search-results');
    const noResultsMessage = document.createElement('div');
    noResultsMessage.innerHTML = `<p>No results found.</p>`;
    searchResultsContainer.appendChild(noResultsMessage);
}

// Call the function to display the content when the page loads
window.onload = displayKandaContent;

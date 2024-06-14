// Get the filename from the query parameters
const urlParams = new URLSearchParams(window.location.search);
const filename = urlParams.get('filename');
console.log('Filename:', filename);

// Fetch and display the selected JSON file
fetch(`DharmicData/Mahabharata/${filename}`)
  .then(response => {
    if (!response.ok) {
      throw new Error(`Failed to fetch JSON file: ${filename}`);
    }
    return response.json();
  })
  .then(data => {
    console.log('JSON Data:', data);
    // Handle the JSON data here (e.g., display it on the page)
    const jsonContentDiv = document.getElementById('jsonContent');

    // Get the book name from the filenameToBook mapping
    const bookName = filenameToBook[filename] || filename;

    // Iterate over each entry in the JSON array
    data.forEach(entry => {
      // Create a new div for each entry
      const entryDiv = document.createElement('div');

      // Display Book, Chapter, Shloka, and Text
      entryDiv.innerHTML = `
      <div style="display: grid; align-items: center; justify-content: center;">
        <p style="color: yellow;">Book: ${bookName}</p>
        <p style="color: white;">Chapter: ${entry.chapter}</p>
        <p style="color: white;">Shloka: ${entry.shloka}</p>
        <p style="color: orange;">${entry.text.replace(/\n/g, ' ।<br> ').trim()} ॥</p>

        <br>
        <br>
      </div>
`;


      // Append the entry div to the main content div
      jsonContentDiv.appendChild(entryDiv);
    });
  })
  .catch(error => {
    // Handle errors here
    console.error(`Error fetching or displaying JSON file ${filename}:`, error);
  });

// Map filenames to book names
const filenameToBook = {
  '1.json': 'Adi Parva',
  '2.json': 'Sabha Parva',
  '3.json': 'Vana Parva',
  '4.json': 'Virata Parva',
  '5.json': 'Udyoga Parva',
  '6.json': 'Bhishma Parva',
  '7.json': 'Drona Parva',
  '8.json': 'Karna Parva',
  '9.json': 'Shalya Parva',
  '10.json': 'Sauptika Parva',
  '11.json': 'Stri Parva',
  '12.json': 'Shanti Parva',
  '13.json': 'Anushasana Parva',
  '14.json': 'Ashvamedhika Parva',
  '15.json': 'Ashramavasika Parva',
  '16.json': 'Mausala Parva',
  '17.json': 'Mahaprasthanika Parva',
  '18.json': 'Swargarohanika Parva',
};

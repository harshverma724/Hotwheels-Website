/**
 * Filters car cards based on the text entered in the search bar.
 */
function filterCars() {
    // Get the search input value
    const searchTerm = document.getElementById('carSearch').value.toLowerCase();
    
    // Get all the car card elements
    const cards = document.getElementsByClassName('car-card');

    // Loop through cards
    for (let i = 0; i < cards.length; i++) {
        // Get the car title from the h3 tag inside the card
        const title = cards[i].querySelector('h3').innerText.toLowerCase();
        
        // Check if the search term exists in the title
        if (title.includes(searchTerm)) {
            cards[i].style.display = "block"; // Show if match
        } else {
            cards[i].style.display = "none";  // Hide if no match
        }
    }
}
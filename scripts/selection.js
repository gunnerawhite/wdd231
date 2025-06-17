const movieSelect = document.getElementById('movie');
const proceedButton = document.getElementById('proceed');

proceedButton.addEventListener('click', () => {
    const selectedIndex = movieSelect.selectedIndex;
    const selectedPrice = movieSelect.value;

    // Save movie data to localStorage
    localStorage.setItem('selectedMovieIndex', selectedIndex);
    localStorage.setItem('selectedMoviePrice', selectedPrice);

    // Redirect to seat selection page
    window.location.href = 'seats.html';
});

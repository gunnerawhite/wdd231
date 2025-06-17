// Retrieve data from localStorage
const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats')) || [];
const ticketPrice = localStorage.getItem('selectedMoviePrice') || 0;
const selectedMovieIndex = localStorage.getItem('selectedMovieIndex');

const movieNames = ['Avengers', 'Joker', 'Toy Story', 'Lion King'];

// Display order summary
document.getElementById('summary').innerHTML = `
    <h2>Order Summary</h2>
    <p>Movie: ${movieNames[selectedMovieIndex]}</p>
    <p>Seats Selected: ${selectedSeats.length}</p>
    <p>Total Price: $${selectedSeats.length * ticketPrice}</p>
`;

// (Optional) You can add form validation or final payment process here
document.getElementById('finish').addEventListener('click', () => {
    // Clear localStorage if you want to reset after payment
    localStorage.clear();

    // Redirect to a confirmation page or display a message
    alert('Thank you for your purchase!');
    window.location.href = 'index.html';
});

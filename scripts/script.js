const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat'); // FIX: select all seats
const count = document.getElementById('count');
const total = document.getElementById('total');

populateUI();

let ticketPrice = localStorage.getItem('selectedMoviePrice')
    ? +localStorage.getItem('selectedMoviePrice')
    : 0;

// Save selected seats to localStorage
function updateSelectedCount() {
    const selectedSeats = document.querySelectorAll('.row .seat.selected');

    const seatsIndex = [...selectedSeats].map(seat => [...seats].indexOf(seat));
    localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));

    const selectedSeatsCount = selectedSeats.length;

    count.innerText = selectedSeatsCount;
    total.innerText = selectedSeatsCount * ticketPrice;
}

// Load saved seats from localStorage
function populateUI() {
    const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));

    if (selectedSeats !== null && selectedSeats.length > 0) {
        seats.forEach((seat, index) => {
            if (selectedSeats.indexOf(index) > -1) {
                seat.classList.add('selected');
            }
        });
    }
}

container.addEventListener('click', e => {
    if (e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {
        e.target.classList.toggle('selected');
    }

    updateSelectedCount();
});

// Initial count and total
updateSelectedCount();

// Display movie info on seats page
const movieTitle = document.getElementById('movie-title');
const ticketPriceDisplay = document.getElementById('ticket-price');

const selectedMovieIndex = localStorage.getItem('selectedMovieIndex');
const selectedMoviePrice = localStorage.getItem('selectedMoviePrice');

const movieNames = ['Avengers', 'Joker', 'Toy Story', 'Lion King'];

if (selectedMovieIndex !== null) {
    movieTitle.textContent = movieNames[selectedMovieIndex];
    ticketPriceDisplay.textContent = selectedMoviePrice;
}

ticketPrice = +selectedMoviePrice;

document.getElementById('checkout').addEventListener('click', () => {
    updateSelectedCount(); // Ensure latest selection is stored
    window.location.href = 'payment.html';
});

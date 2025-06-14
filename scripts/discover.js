// Fetch and display the cards
async function getDiscoverData() {
    const response = await fetch('data/discover.json');
    const items = await response.json();
    displayDiscover(items);
}

function displayDiscover(items) {
    const container = document.getElementById('card-container');

    items.forEach(item => {
        let card = document.createElement('section');
        card.classList.add('card');

        card.innerHTML = `
            <h2>${item.name}</h2>
            <figure>
                <img src="${item.image}" alt="${item.name}">
            </figure>
            <address>${item.address}</address>
            <p>${item.description}</p>
            <button>Learn More</button>
        `;

        container.appendChild(card);
    });
}

getDiscoverData();

// Visitor tracking
const sidebar = document.querySelector('.sidebar');
const lastVisit = localStorage.getItem('lastVisit');
const now = Date.now();

if (!lastVisit) {
    sidebar.textContent = 'Welcome! Let us know if you have any questions.';
} else {
    const daysDiff = Math.floor((now - lastVisit) / (1000 * 60 * 60 * 24));
    if (daysDiff < 1) {
        sidebar.textContent = 'Back so soon! Awesome!';
    } else if (daysDiff === 1) {
        sidebar.textContent = 'You last visited 1 day ago.';
    } else {
        sidebar.textContent = `You last visited ${daysDiff} days ago.`;
    }
}

localStorage.setItem('lastVisit', now);

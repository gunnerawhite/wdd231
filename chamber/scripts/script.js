const directory = document.getElementById('directory');
const gridView = document.getElementById('gridView');
const listView = document.getElementById('listView');

// View toggle
function toggleImageVisibility() {
  const isListView = directory.classList.contains('list-view');
  directory.querySelectorAll('.card img').forEach(img => {
    img.style.display = isListView ? 'none' : 'block';
  });
}

gridView.addEventListener('click', () => {
  directory.classList.add('grid-view');
  directory.classList.remove('list-view');
  toggleImageVisibility();
});

listView.addEventListener('click', () => {
  directory.classList.add('list-view');
  directory.classList.remove('grid-view');
  toggleImageVisibility();
});

async function loadMembers() {
  const response = await fetch('data/members.json');
  const members = await response.json();

  members.forEach(member => {
    const card = document.createElement('section');
    card.classList.add('card'); 
    card.innerHTML = `
      <img src="images/${member.image}" alt="${member.name} logo">
      <h3>${member.name}</h3>
      <p>${member.address}</p>
      <p>${member.phone}</p>
      <a href="${member.website}" target="_blank">Visit Website</a>
      <p class="membership">Level: ${['','Member','Silver','Gold'][member.membership]}</p>
    `;
    directory.appendChild(card);
  });

  // Make sure images hide/show correctly after loading
  toggleImageVisibility();
}

loadMembers();

// Footer dates
document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = document.lastModified;
const spotlightContainer = document.querySelector('.spotlights');

fetch('data/members.json')
  .then(response => response.json())
  .then(members => {
    // Filter for gold/silver
    const spotlightCandidates = members.filter(member => member.membership === 2 || member.membership === 3);

    // Shuffle and pick 2 or 3
    const shuffled = spotlightCandidates.sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 3);

    selected.forEach(member => {
      const card = document.createElement('div');
      card.classList.add('card');

      card.innerHTML = `
        <h3>${member.name}</h3>
        <img src="images/${member.image}" alt="${member.name} logo">
        <p>${member.address}</p>
        <p>${member.phone}</p>
        <a href="${member.website}" target="_blank">Visit Website</a>
        <p><strong>Membership Level:</strong> ${member.membership === 3 ? 'Gold' : 'Silver'}</p>
      `;

      spotlightContainer.appendChild(card);
    });
  });
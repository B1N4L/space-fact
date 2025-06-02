// Verified space fun facts
const facts = [
  "Space is completely silent.",
  "A day on Venus is longer than a year on Venus.",
  "Neutron stars can spin at a rate of 600 rotations per second.",
  "There are more stars in the universe than grains of sand on all the Earth’s beaches.",
  "The footprints on the Moon will be there for millions of years.",
  "A spoonful of a neutron star would weigh about 6 billion tons.",
  "Jupiter’s Great Red Spot is a giant storm bigger than Earth.",
  "One million Earths could fit inside the Sun.",
  "If two pieces of the same type of metal touch in space, they will bond permanently (cold welding).",
  "A year on Mercury is just 88 days long."
];

function showRandomFact() {
  const factElem = document.getElementById('fact');
  const randomIndex = Math.floor(Math.random() * facts.length);
  factElem.textContent = facts[randomIndex];
}

document.getElementById('factButton').addEventListener('click', showRandomFact);

// Show a fact on initial load
window.onload = showRandomFact;

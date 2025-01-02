const relationInput = document.getElementById('relation-input');
const relationDropdown = document.getElementById('relation-dropdown');

// Toggle le menu déroulant
relationInput.addEventListener('click', (event) => {
    event.stopPropagation(); // Empêche la fermeture immédiate
    relationDropdown.classList.toggle('hidden');
});

// Gestion de la sélection
relationDropdown.addEventListener('click', (event) => {
    if (event.target.classList.contains('dropdown-item')) {
        relationInput.value = event.target.textContent; // Met à jour la valeur de l'input
        relationDropdown.classList.add('hidden'); // Ferme le menu
    }
});

// Fermer le dropdown si on clique en dehors
document.addEventListener('click', () => {
    relationDropdown.classList.add('hidden');
});

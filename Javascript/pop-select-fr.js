// Initialise le calendrier avec Flatpickr
flatpickr("#date-picker", {
    dateFormat: "d / m / Y",
    onChange: function (selectedDates, dateStr) {
        // Met à jour la valeur dans le champ après sélection
        document.getElementById("date-picker").value = dateStr;

        // Ouvre le pop-up select
        const popSelect = document.getElementById("pop-select");
        const dateSelect = document.getElementById("date-select");

        // Met à jour les options du select avec la date sélectionnée
        dateSelect.innerHTML = `<option value="${dateStr}">${dateStr}</option>`;

        // Affiche le pop-up select
        popSelect.classList.add("visible");
    }
});

// Ajoute un gestionnaire pour masquer le pop-up lorsque l'utilisateur clique ailleurs
document.addEventListener('click', function (event) {
    const popSelect = document.getElementById("pop-select");
    const calendarContainer = document.getElementById("calendar-container");

    // Si le clic n'est pas dans le calendrier ou le pop-up select, cache le pop-up
    if (!calendarContainer.contains(event.target) && !popSelect.contains(event.target)) {
        popSelect.classList.remove("visible");
    }
});

// Ajoute un gestionnaire pour que la sélection dans le select ferme le pop-up
document.getElementById("date-select").addEventListener("change", function () {
    const popSelect = document.getElementById("pop-select");
    const selectedDate = this.value;

    // Met à jour le champ de texte avec la date sélectionnée
    if (selectedDate) {
        document.getElementById("date-picker").value = selectedDate;
    }

    // Ferme le pop-up select
    popSelect.classList.remove("visible");
});
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.article-form-pop form');
    const inputs = form.querySelectorAll('.inpt-child');
    const saveButton = form.querySelector('button');

    const checkInputs = () => {
        let allFilled = true;

        inputs.forEach(input => {
            if (input.value.trim() === '') {
                allFilled = false;
            }
        });

        saveButton.disabled = !allFilled;
    };

    inputs.forEach(input => {
        input.addEventListener('input', checkInputs);
    });

    // Initial check in case some fields are pre-filled
    checkInputs();
});

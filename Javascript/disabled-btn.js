document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const saveButton = document.getElementById("save-button");
    let initialFormData = new FormData(form);

    const checkForChanges = () => {
        const currentFormData = new FormData(form);
        for (let [key, value] of currentFormData.entries()) {
            if (value !== initialFormData.get(key)) {
                saveButton.disabled = false;
                saveButton.classList.remove("disabled-button");
                return;
            }
        }
        saveButton.disabled = true;
        saveButton.classList.add("disabled-button");
    };

    form.addEventListener("input", checkForChanges);
});
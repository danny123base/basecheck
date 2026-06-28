document.addEventListener("DOMContentLoaded", () => {

    const input = document.getElementById("imei");
    const button = document.getElementById("checkBtn");

    button.addEventListener("click", () => {

        const value = input.value.trim();

        if (value === "") {
            alert("Please enter an IMEI or Serial Number.");
            return;
        }

        alert("Searching for: " + value);

        // Здесь позже подключим настоящее API
    });

});
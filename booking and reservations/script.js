const dateInput = document.getElementById("date");
const timeInput = document.getElementById("time");
const locationInput = document.getElementById("location");
const addEventButton = document.getElementById("addEvent");
const calendar = document.getElementById("calendar");

// Function to add a new event to the calendar
function addEvent() {
    // Get user input values
    const date = dateInput.value;
    const time = timeInput.value;
    const location = locationInput.value;

    // Check if all fields are filled
    if (!date || !time || !location) {
        alert("Please fill all fields!");
        return;
    }

    // Create a new event element
    const event = document.createElement("div");
    event.className = "event";
    event.innerHTML = `
        <strong>Date:</strong> ${date} <br>
        <strong>Time:</strong> ${time} <br>
        <strong>Location:</strong> ${location}
        <button class="remove-button">Remove</button>
    `;

    // Add event to the calendar
    calendar.appendChild(event);

    // Clear the form fields
    dateInput.value = "";
    timeInput.value = "";
    locationInput.value = "";

    // Add functionality to the remove button
    const removeButton = event.querySelector(".remove-button");
    removeButton.addEventListener("click", () => event.remove());
}

// Event listener for the "Add to Planner" button
addEventButton.addEventListener("click", addEvent);

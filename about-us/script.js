// Select the "Read More" button and the additional content section
const readMoreBtn = document.getElementById('read-more-btn');
const additionalContent = document.getElementById('additional-content');

// Add a click event listener to toggle the visibility of additional content
readMoreBtn.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent default anchor behavior

    // Toggle the "hidden" class
    additionalContent.classList.toggle('hidden');

    // Update the button text based on visibility
    if (additionalContent.classList.contains('hidden')) {
        readMoreBtn.textContent = 'Read More';
    } else {
        readMoreBtn.textContent = 'Read Less';
    }
});

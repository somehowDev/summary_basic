/**
 * setupToggle function connects the toggle button with the section content.
 * @param {string} toggleButtonId - The HTML element ID of the toggle button
 * @param {string} contentId - The ID of the content section to show or hide
 */
function setupToggle(toggleButtonId, contentId) {
  document
    .getElementById(toggleButtonId)
    .addEventListener("click", function () {
      const content = document.getElementById(contentId);
      const button = this;

      if (content.style.display === "none") {
        content.style.display = "block";
        button.innerHTML = "➖";
      } else {
        content.style.display = "none";
        button.innerHTML = "➕";
      }
    });
}

// Setup toggle functionality for each section.
setupToggle("toggleTravel", "travelJournal");
setupToggle("toggleMusic", "musicPlaylist");
setupToggle("toggleGame", "gameReview");
setupToggle("toggleFashion", "fashionContent");
setupToggle("toggleBooks", "booksContent");
setupToggle("toggleMovie", "movieContent");

// Toggle the mobile navigation menu
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    const menuButton = document.querySelector('.toggle-menu');

    // Toggle visibility of the navigation menu
    if (navLinks.style.display === "flex") {
        navLinks.style.display = "none";
    } else {
        navLinks.style.display = "flex";
    }

    // Optional: Change the icon of the menu button
    if (menuButton.textContent === "☰") {
        menuButton.textContent = "✕"; // Change to 'close' icon
    } else {
        menuButton.textContent = "☰"; // Change back to 'menu' icon
    }
}

// Smooth scroll to section
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);

    window.scrollTo({
        top: section.offsetTop - 60,  // Adjust for fixed header height
        behavior: 'smooth'            // Smooth scrolling effect
    });
}

// Load more content dynamically (optional)
function loadMoreContent() {
    const newContent = document.createElement('div');
    newContent.innerHTML = `
        <div class="dynamic-content">
            <h2>More About Our Studio</h2>
            <p>This section was dynamically loaded using JavaScript!</p>
        </div>
    `;

    // Append the new content to the container
    document.querySelector('.about-section').appendChild(newContent);
}

// Attach the load more content function to a button
document.querySelector('.load-more-btn').addEventListener('click', loadMoreContent);

// Select the menu button and the responsive menu
let MenuButton = document.querySelector(".menu-btn");
let Menu = document.querySelector(".responsive-menu");

// Determine if the menu is currently open or closed
let IsMenuOpen = false;

// Event handler for the menu button click
MenuButton.onclick = function() {
    // Check if the menu is currently closed
    if (!IsMenuOpen) {
        // Display the menu
        Menu.style.display = "block";
        // Change the background position to show the open menu icon
        MenuButton.style.backgroundPosition = "center left 50px, center";
        // Update the menu state to open
        IsMenuOpen = true;
    }
    // Check if the menu is currently open
    else if (IsMenuOpen) {
        // Hide the menu
        Menu.style.display = "none";
        // Change the background position to show the closed menu icon
        MenuButton.style.backgroundPosition = "center, center left 50px";
        // Update the menu state to closed
        IsMenuOpen = false;
    }
};


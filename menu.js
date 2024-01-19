let MenuButton = document.querySelector(".menu-btn");
let Menu = document.querySelector(".responsive-menu");

// determine if the menu is open or not
let IsMenuOpen = false;

// if menu open, the icon position will change
MenuButton.onclick = function(){
    if (!IsMenuOpen) {
        Menu.style.display = "block";
        MenuButton.style.backgroundPosition = "center left 50px, center";
        IsMenuOpen = true;
    }

    else if(IsMenuOpen) {
        Menu.style.display = "none";
        MenuButton.style.backgroundPosition = "center, center left 50px";
        IsMenuOpen = false;
    }
}


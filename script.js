

function menuToggle(){
    const toggleMenu  = document.querySelector(".toggle");
    const section  = document.querySelector("section");
    const navigation  = document.querySelector(".navigation");
    toggleMenu.classList.toggle("active")
    section.classList.toggle("active")
    navigation.classList.toggle("active")
}


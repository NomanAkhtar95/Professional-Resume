const toggleButton = document.getElementById("toggle-skills")as HTMLButtonElement | null;
const skills = document.getElementById("section skills") as HTMLElement | null;

toggleButton.addEventListener("click", ()=>{
    if (skills.style.display === "none") {
        skills.style.display = "block"
    }
    else{
        skills.style.display = "none"
    }
});



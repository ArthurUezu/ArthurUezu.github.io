const dropdown = document.getElementById("nav-list");
const handleDropdown = ()=>{
    dropdown.classList.contains("active") ? dropdown.classList.remove("active") : dropdown.classList.add("active");
}
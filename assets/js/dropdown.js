const dropdown = document.getElementById("nav-list");
const configDropdown = document.getElementById("config-dropdown");
const body = document.getElementById("body");
const css = document.getElementById("main-style");

const handleDropdown = ()=>{
    dropdown.classList.contains("active") ? dropdown.classList.remove("active") : dropdown.classList.add("active");
}
const handleConfigDropdown = ()=>{
    configDropdown.classList.contains("active") ? configDropdown.classList.remove("active") : configDropdown.classList.add("active");
}
const changeLayout = (layoutNumber)=>{
    switch(layoutNumber){
        case 1:
            if(body.classList.contains("side-header")){
                body.classList.remove("side-header");
                body.classList.add("top-header");
            }
            break;
        case 2:
            if(body.classList.contains("top-header")){
                body.classList.remove("top-header");
                body.classList.add("side-header");
            }
            break;
        case 3:
            body.classList.contains("dark") ? body.classList.remove("dark") : body.classList.add("dark");
            break;
    }
}
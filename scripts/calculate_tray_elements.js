
function updateNumberOfElements(){
    let windowWidth = window.innerWidth;
    let minimum_size = 350;

    let num_tray_ele = Math.max(1, Math.trunc(windowWidth / minimum_size));
    let percentage_of_screen = `${100/ num_tray_ele}%`;

    document.documentElement.style.setProperty('--tray-elements-size', percentage_of_screen);
}

updateNumberOfElements();

window.addEventListener("resize", updateNumberOfElements);


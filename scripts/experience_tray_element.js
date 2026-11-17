function initalize_tray(experiences){
    const left_button = document.getElementById("left-button");
    const right_button = document.getElementById("right-button");
    const tray_content = document.getElementById("experience-tray-object");

    let small_gap = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--small-gap").trim());
    let element_size = document.querySelector(".experience").offsetWidth + small_gap;
    let index = 0;
    let UPPER_BOUND = 99999;

    if(experiences - 1 < UPPER_BOUND){
        UPPER_BOUND = experiences - 1;
    }
    else{
        // Add implementation here to only use the most recent experiences
    }

    function updateButtonVisibility(){
        if(index == 0){
            left_button.style.display = "none";
        }
        else{
            left_button.style.display = "grid";
        }

        if(index === UPPER_BOUND){
            right_button.style.display = "none";
        }
        else{
            right_button.style.display = "grid";
        }
    }

    updateButtonVisibility();


    left_button.addEventListener('click', (event) => {
        index-=1;
        tray_content.scrollBy({
            left: -1 * element_size,
            behavior: "smooth"
        });
        updateButtonVisibility();
    });

    right_button.addEventListener('click', (event) => {
        index +=1;
        tray_content.scrollBy({
            left: element_size,
            behavior: "smooth"
        });
        updateButtonVisibility();
    })
}

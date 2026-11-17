function initalize_tray(experiences){
    const left_button = document.getElementById("left-button");
    const right_button = document.getElementById("right-button");
    const tray_content = document.getElementById("experience-tray-object");

    let small_gap = parseInt(getComputedStyle(document.documentElement).getPropertyValue("--small-gap").trim());
    let element_size = document.querySelector(".experience").offsetWidth + small_gap;
    let index = 0;
    let UPPER_BOUND = 99999;

    if(experiences - 1 < UPPER_BOUND){
        UPPER_BOUND = experiences - 1;
    }
    else{
        // Add implementation here to only use the most recent experiences
    }

    function checkScrollPosition(){
        if(tray_content.scrollLeft <= 0){
            left_button.style.display = "none";
        }
        else{
            left_button.style.display = "grid";
        }

        const max_scroll = tray_content.scrollWidth - tray_content.clientWidth;

        if(tray_content.scrollLeft >= max_scroll - 2){
            right_button.style.display = "none";
        }
        else{
            right_button.style.display = "grid";
        }
    }

   checkScrollPosition();

    tray_content.addEventListener("scroll", checkScrollPosition);

    let running_scroll_animation = false;

    left_button.addEventListener('click', () => {
        if(running_scroll_animation){return;}
        running_scroll_animation = true;
        tray_content.scrollBy({
            left: -1 * element_size,
            behavior: "smooth"
        });

        setTimeout( () => { running_scroll_animation = false; }, 400)
    });

    right_button.addEventListener('click', () => {
        if(running_scroll_animation){return;}
        running_scroll_animation = true;
        tray_content.scrollBy({
            left: element_size,
            behavior: "smooth"
        });

        setTimeout( () => { running_scroll_animation = false; }, 400)
    })
}

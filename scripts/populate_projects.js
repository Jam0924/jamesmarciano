let projects = 0;

async function load_projects(){
    const data = await load_json("projects");
    const tray = document.getElementById("projects-tray-object");
    data.forEach( ({decorativeText, title, imageName, briefDesc, tags}) => {
        const project_card = document.createElement("div");
        project_card.classList.add("project");
        projects += 1;

        project_card.innerHTML = `

        <div class = "decorative-project-title">
            <p>${decorativeText}</p>
        </div>

        <div class = "project-title">
            <p>${title}</p>
        </div>
        
        <div class = "project-image">
            <img src = "images/${imageName}">
        </div>

        <div class = "project-description">
            <p class = "project-description-text">${briefDesc}</p>
        </div>

        <div class = "tags-area">
            <div class = "tags-tray">
                ${tags.map((tag) => 
                    `
                    <div class = "tag">
                        <p class = "tag-text">${tag}</p>
                    </div>
                    `
                ).join('')}
            </div>
            <div class = "explore-more-tag"></div>
        </div>
        `

        tray.appendChild(project_card);
    });

    let element_size = document.querySelector(".project").offsetWidth;
    let element_height = document.querySelector(".project").offsetHeight;
    let MIN_TAB_WIDTH = 100;

    const project_cards = document.querySelectorAll(".project")

    project_cards.forEach( (card) => {
        const text_element = card.querySelector(".decorative-project-title");
        let text_height = text_element.offsetHeight;
        let text_width = text_element.offsetWidth;
        if (text_width < MIN_TAB_WIDTH){
            text_width = MIN_TAB_WIDTH;
        }

        card.style.clipPath = `path('M 0 0 L ${text_width} 0 L ${text_width} ${text_height} L ${element_size} ${text_height} L ${element_size} ${element_height} L 0 ${element_height} Z')`;
    })

    initalize_projects_tray(projects);
}


load_projects();



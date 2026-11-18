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
        <div class = "project-body">
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
        </div>
        `

        tray.appendChild(project_card);
    });

    initalize_projects_tray(projects);
}


load_projects();



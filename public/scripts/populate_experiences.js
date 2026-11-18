let experiences = 0;

async function load_experiences(){
    const data = await load_json("experiences");
    const tray = document.getElementById("experience-tray-object");
    data.forEach( ({title, location, date, imageName, briefDesc, tags}) => {
        const experience_card = document.createElement("div");
        experience_card.classList.add("experience");
        experiences += 1;

        experience_card.innerHTML = `
        <div class = "experience-general-info">
            <div class = "experience-title">
                <p>${title}</p>
            </div>
            
            <!--
            <div class = "experience-location">
                <p class = experience-location-text>${location}</p>
            </div>
            -->

            <div class = "experience-date">
                <p class = "experience-date-text">${date}</p>
            </div>

            ${imageName!="none"?
            `<div class = "experience-location-logo">
                <img src = "images/${imageName}">
            </div>` : ``}
        </div>
        <div class = "experience-description">
            <p class = experience-description-text>${briefDesc}</p> 
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
            <!-- <div class = "explore-more-tag"></div> -->
        </div>
        `

        tray.appendChild(experience_card);
    });

    initalize_tray(experiences);
}

load_experiences();
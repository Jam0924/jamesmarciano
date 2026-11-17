async function load_skills(){
    const data = await load_json("skills");
    const skills_section = document.getElementById("skills-list-section");


    data.forEach( ( {imageName, skill} ) => {
        const skill_bubble = document.createElement("div");
        skill_bubble.classList.add("skill")

        skill_bubble.innerHTML = `
        <div class = "skill-image">
            <img src = "images/${imageName}">
        </div>
        <div class = "skill-text">
            <p>${skill}</p>
        </div>
        `

        skills_section.appendChild(skill_bubble);

    })
}

load_skills();
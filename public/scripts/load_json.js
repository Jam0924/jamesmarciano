const website_information_base_url = new URL("../website_information/", document.currentScript.src);

async function load_json(url){
    const response = await fetch(new URL(`${url}.json`, website_information_base_url));
    if(!response.ok){
        throw new Error(`Could not load website_information/${url}.json: HTTP ${response.status}`);
    }
    return response.json();
}
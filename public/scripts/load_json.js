async function load_json(url){
    const response = await fetch(`website_information/${url}.json`);
    if(!response.ok){
        throw new Error(`Could not load website_information/${url}.json: HTTP ${response.status}`);
    }
    return response.json();
}
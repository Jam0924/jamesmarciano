async function load_json(url){
    try{
        const response = await fetch(`../website_information/${url}.json`);
        if(!response.ok){
            throw new Error(`HTTP Error! Status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    }
    catch(error){
        alert("Local file could not be found", error);
    }
}
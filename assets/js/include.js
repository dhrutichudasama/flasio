function loadComponent(id, file, basePath) {
    return fetch(file)
        .then(response => {
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
            return response.text();
        })
        .then(data => {
            let processedData = data.replace(/\{\{BASE_URL\}\}/g, basePath);
            let el = document.getElementById(id);
            if(el) el.innerHTML = processedData;
        })
        .catch(err => console.error("Error loading component:", err));
}

function initIncludes(basePath = ".") {
    const promises = [];
    
    if (document.getElementById("header")) {
        promises.push(loadComponent("header", basePath + "/components/header.html", basePath));
    }
    if (document.getElementById("footer")) {
        promises.push(loadComponent("footer", basePath + "/components/footer.html", basePath));
    }

    Promise.all(promises).then(() => {
        document.dispatchEvent(new CustomEvent('componentsLoaded'));
    });
}
const url = "https://pokeapi.co/api/v2/type";


async function getTypes() {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data)
    return data;
}

function typeTemplate(type) {
    return `<li>${type.name}<li>`;
}

function renderTypes(types) {
    const html = types.map(typeTemplate);
    const listElement = document.querySelector('#typesList');
    listElement.innerHTML = html.join('');
    console.log(types)
}

async function init() {
    const types = await getTypes();
    renderTypes(types.results);
}

init();
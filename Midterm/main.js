
document.getElementById('PlaceSearchForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let placeName = document.getElementById('placeName').value;
    searchPlaces(placeName);
});

function searchPlaces(placeName){
    const apiUrl = `https://api.inaturalist.org/v1/places/autocomplete?q=${placeName}`;
    fetch(apiUrl)
    .then(function(response) {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(function(data) {
        displayResults(data.results);
    })
    .catch(function(error) {
        console.error('Error:', error);
    });
}

function displayResults(results) {
    let resultList = document.querySelector('#searchResults');
    resultList.innerHTML = '';

    if (results.length === 0) {
        resultList.innerHTML = '<p>No places found.</p>';
        return;
    }

    let list = document.createElement('ul');
    results.forEach(function(place) {
        let listItem = document.createElement('li');
        listItem.textContent = place.display_name;
        list.appendChild(listItem);
        // Check if place has a placeID before calling displayImage
        if (place.id) {
            displayImage(place.id, listItem);
        } else {
            console.error('Place ID is missing:', place);
        }
    });
    resultList.appendChild(list);
}

function displayImage(placeID, listItem) {
    const imgURL = `https://api.inaturalist.org/v1/identifications/${placeID}`
}

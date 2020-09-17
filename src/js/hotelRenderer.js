const FAVOURITE = `<svg class="disabled-clicks" viewBox="0 0 16 16" class="bi bi-heart-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/></svg>`;
const UNFAVOURITE = `<svg class="disabled-clicks" viewBox="0 0 16 16" class="bi bi-heart" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/></svg>`;

const hotelsContainer = document.querySelector('#hotels');

export {
    renderNewHotel,
    updateFavouriteStatusForHotel
}

function renderNewHotel(hotel) {
    hotelsContainer.appendChild(createCardFor(hotel));
}

function updateFavouriteStatusForHotel(hotel) {
    let favouriteStatusContainer = findFavouriteStatusContainer(hotel.id);
    if (!favouriteStatusContainer) {
        return;
    }
    let updatedView = favouriteStatusFor(hotel);
    favouriteStatusContainer
        .replaceWith(updatedView);
}

function findFavouriteStatusContainer(hotelId) {
    return document.querySelector(`#hotels > li.card[data-id="${hotelId}"] > div.hotel-details > div.hotel-status-container`);
}

function createCardFor(hotel) {
    let cardDiv = document.createElement('li');
    cardDiv.classList.add('card');
    cardDiv.dataset.id = hotel.id;
    cardDiv.appendChild(logoElementFor(hotel.logoUrl));
    cardDiv.appendChild(hotelDetailsDivFor(hotel));
    return cardDiv;
}

function logoElementFor(logoUrl) {
    let container = document.createElement('div');
    container.classList.add('image-container');
    let imgElement = document.createElement('img');
    imgElement.classList.add('hotel-logo');
    imgElement.src = logoUrl;
    // container.appendChild(imgElement);
    return container;
}

function hotelDetailsDivFor(hotel) {
    let hotelDetails = document.createElement('div');
    hotelDetails.classList.add('card-item');
    hotelDetails.classList.add('hotel-details');
    hotelDetails.appendChild(createHeaderFor(hotel));
    hotelDetails.appendChild(favouriteStatusFor(hotel));
    return hotelDetails;
}
function createHeaderFor(hotel) {
    let header = document.createElement('div');
    header.classList.add('hotel-card-header');
    header.appendChild(nameAndContactDetailsFor(hotel));
    return header;
}
function nameAndContactDetailsFor(hotel) {
    let container = document.createElement('div');
    container.appendChild(nameElementFor(hotel.name));
    container.appendChild(phoneElementFor(hotel.phoneNumber));
    return container;
}

function nameElementFor(name) {
    let nameHeading = document.createElement('h1');
    nameHeading.classList.add('hotel-name');
    nameHeading.appendChild(document.createTextNode(name));
    return nameHeading;
}

function favouriteStatusFor(hotel) {
    let container = document.createElement('div');
    container.classList.add('hotel-status-container');
    container.appendChild(favouriteIconFor(hotel.isFavourite));
    return container;
}

function favouriteIconFor(status) {
    let icon = stringToHtml(decideIconFor(status));
    icon.classList.add('hotel-status-icon');
    return icon;
}

function decideIconFor(status) {
    return status ? FAVOURITE : UNFAVOURITE;
}

function phoneElementFor(phoneNumber) {
    let phoneElement = document.createElement('span');
    phoneElement.appendChild(document.createTextNode(`Ph: ${phoneNumber}`));
    return phoneElement;
}

function stringToHtml(htmlString) {
    let parser = new DOMParser();
    let parsed = parser.parseFromString(htmlString, 'text/html');
    return parsed.body.firstChild;
}
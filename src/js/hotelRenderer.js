export {
    renderNewHotel,
    updateFavouriteStatusForHotel,
    openModalFor,
    closeHotelModal,
    updateHotelPreferencesOnView,
    enableHotelModalUpdateButton,
    disableHotelModalUpdateButton,
    showInvalidNameError,
    hideInvalidNameError
}
const FAVOURITE = `<svg class="disabled-clicks" viewBox="0 0 16 16" class="bi bi-heart-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/></svg>`;
const UNFAVOURITE = `<svg class="disabled-clicks" viewBox="0 0 16 16" class="bi bi-heart" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/></svg>`;

const hotelsContainer = document.querySelector('#hotels');

function updateHotelPreferencesOnView(hotelCardElement, updatedHotelName, checkedHotelOptions) {
    let hotelNameElement = hotelCardElement.lastElementChild.firstElementChild.firstElementChild;
    hotelNameElement.textContent = updatedHotelName;
    let hotelOptionsElement = hotelCardElement.lastElementChild.firstElementChild.lastElementChild;
    hotelOptionsElement.replaceWith(optionContainerFor(checkedHotelOptions));
}

function closeHotelModal() {
    let modalElement = document.querySelector('#hotel-modal');
    modalElement.style.display = 'none';
    document.forms.hotelUpdateForm['hotelNameInput'].value = "";
    Array.from(document.forms.hotelUpdateForm['options'])
        .forEach(option => option.checked = false);
    hideInvalidNameError();
}

function openModalFor(hotel) {
    checkSelectedOptions(hotel.optionIds);
    const modalElement = document.querySelector('#hotel-modal');
    const hotelModalForm = document.forms.hotelUpdateForm;
    const hotelNameInput = hotelModalForm['hotelNameInput'];
    hotelNameInput.value = hotel.name;
    modalElement.firstElementChild.firstElementChild.firstElementChild.innerText = `Update ${hotel.name}`;
    modalElement.style.display = 'flex';
    hotelNameInput.focus();
}

function checkSelectedOptions(selectedOptionIds) {
    Array.from(document.forms.hotelUpdateForm['options'])
        .filter(optionElement => selectedOptionIds.includes(optionElement.id))
        .forEach(optionElement => optionElement.checked = true);
}

function renderNewHotel(hotel) {
    hotelsContainer.appendChild(createCardFor(hotel));
}

function updateFavouriteStatusForHotel(hotelElement, updatedStatus) {
    let favouriteStatusContainer = hotelElement.children[1].children[1];
    let updatedView = favouriteStatusFor(updatedStatus);
    favouriteStatusContainer
        .replaceWith(updatedView);
}

function createCardFor(hotel, options) {
    let cardDiv = createElement('li', { class: "card", "data-id": hotel.id, role: "button", tabindex: "0"});
    cardDiv.appendChild(logoElementFor(hotel.logoUrl));
    cardDiv.appendChild(hotelDetailsDivFor(hotel, options));
    return cardDiv;
}

function logoElementFor(logoUrl) {
    let container = createElement('div', { class: "image-container" });
    let imgElement = createElement('img', { class: "hotel-logo", src: logoUrl });
    container.appendChild(imgElement);
    return container;
}

function hotelDetailsDivFor(hotel) {
    let hotelDetails = createElement('div', { class: 'hotel-details' });
    hotelDetails.appendChild(createHeaderFor(hotel));
    hotelDetails.appendChild(favouriteStatusFor(hotel.isFavourite));
    return hotelDetails;
}

function createHeaderFor(hotel) {
    let container = createElement('div', { class: "hotel-card-header" });
    container.appendChild(nameElementFor(hotel.name));
    container.appendChild(phoneElementFor(hotel.phoneNumber));
    container.appendChild(createEmptyOptionsContainer());
    return container;
}

function createEmptyOptionsContainer() {
    return createElement('ul', { class: 'selected-options-list' });
}

function optionContainerFor(options) {
    let optionsListElement = createEmptyOptionsContainer();
    options
        .map(option => {
            let element = createElement('li', { class: 'gray-badge' });
            element.appendChild(document.createTextNode(option.label));
            return element;
        })
        .forEach(optionElement => optionsListElement.appendChild(optionElement));
    return optionsListElement;
}

function nameElementFor(name) {
    let nameHeading = createElement('h1', { class: 'hotel-name' });
    nameHeading.appendChild(document.createTextNode(name));
    return nameHeading;
}

function favouriteStatusFor(favouriteStatus) {
    let container = createElement('div', { class: 'hotel-status-container' });
    container.appendChild(favouriteIconFor(favouriteStatus));
    return container;
}

function favouriteIconFor(status) {
    return stringToHtml(decideIconFor(status), { class: 'hotel-status-icon' });
}

function decideIconFor(status) {
    return status ? FAVOURITE : UNFAVOURITE;
}

function phoneElementFor(phoneNumber) {
    let phoneElement = createElement('span');
    phoneElement.appendChild(document.createTextNode(`Ph: ${phoneNumber}`));
    return phoneElement;
}

function enableHotelModalUpdateButton() {
    let updateButton = document.querySelector('#updateHotelButton');
    updateButton.disabled = false;
    updateButton.classList.add('btn-blue');
    updateButton.classList.remove('disabled-btn');
}

function disableHotelModalUpdateButton() {
    let updateButton = document.querySelector('#updateHotelButton');
    updateButton.disabled = true;
    updateButton.classList.remove('btn-blue');
    updateButton.classList.add('disabled-btn');
}

function showInvalidNameError(errorMessage) {
    let errorMessageElement = document.querySelector('#hotelNameError');
    addAllAttributesTo(errorMessageElement, { class: ''});
    errorMessageElement.textContent = errorMessage;
}

function hideInvalidNameError() {
    let errorMessageElement = document.querySelector('#hotelNameError');
    addAllAttributesTo(errorMessageElement, { class: 'hidden', value: '' });
}

function stringToHtml(htmlString, attributes) {
    let parser = new DOMParser();
    let parsed = parser.parseFromString(htmlString, 'text/html');
    let constructedElement = parsed.body.firstElementChild;
    if (attributes) {
        addAllAttributesTo(constructedElement, attributes);
    }
    return constructedElement;
}

function createElement(tagName, attributes) {
    let element = document.createElement(tagName);
    if (attributes) {
        addAllAttributesTo(element, attributes);
    }
    return element;
}
function addAllAttributesTo(element, attributes) {
    Object.entries(attributes)
    .forEach(([key, value]) => {
        element.setAttribute(key, value);
    });
}
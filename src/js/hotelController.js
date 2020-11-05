import {
    renderNewHotel,
    updateFavouriteStatusForHotel as updateStatusOnView,
    openModalFor,
    closeHotelModal,
    updateHotelPreferencesOnView,
    enableHotelModalUpdateButton,
    disableHotelModalUpdateButton,
    showInvalidNameError,
    hideInvalidNameError
} from './hotelRenderer.js';
import { Hotel } from './hotel.js';
import { HOTELS } from './seeds.js';

export class HotelController {
    constructor() {
        this.hotels = [];
    }
}

HotelController.prototype.fetchHotels = async function () {
    // let response = await fetch("https://run.mocky.io/v3/c89626ad-37a0-43dd-945a-3c8d17d0a9a1");
    // let hotels = await response.json();
    let hotels = HOTELS;
    this.hotels = hotels.map((hotel, index) => new Hotel(index, hotel.name, hotel.isFavourite, hotel.phoneNumber, hotel.logo));
    this.currentlySelectedHotelCard = null;
}

HotelController.prototype.refreshHotels = async function () {
    await this.fetchHotels();
    this.hotels.forEach(hotel => renderNewHotel(hotel));
}

HotelController.prototype.updateFavouriteStatusFor = function (hotelCardElement) {
    let hotelId = this.hotelIdFromElement(hotelCardElement);
    let hotelToUpdate = this.findHotelById(hotelId);
    hotelToUpdate.isFavourite = !hotelToUpdate.isFavourite;
    updateStatusOnView(hotelCardElement, hotelToUpdate.isFavourite);
}

HotelController.prototype.updateHotelPreferences = function () {
    const hotelId = this.hotelIdFromElement(this.currentlySelectedHotelCard);
    const hotelModel = this.findHotelById(hotelId);
    const selectedOptions = fetchSelectedOptions();
    hotelModel.optionIds = selectedOptions.map(option => option.id);
    const updatedHotelName = document.forms.hotelUpdateForm['hotelNameInput'];
    hotelModel.name = updatedHotelName.value;
    updateHotelPreferencesOnView(this.currentlySelectedHotelCard, updatedHotelName.value, selectedOptions);
    this.closeModal();
}

function fetchSelectedOptions() {
    return Array.from(document.forms.hotelUpdateForm['options'])
        .filter(optionElement => optionElement.checked)
        .map(optionElement => {
            return {
                id: optionElement.id,
                label: optionElement.nextElementSibling.textContent
            }
        });
}

HotelController.prototype.hotelIdFromElement = function (hotelCardElement) {
    return parseInt(hotelCardElement.dataset.id);
}

HotelController.prototype.findHotelById = function (hotelId) {
    return this.hotels.find(hotel => hotel.id === hotelId);
}

HotelController.prototype.openHotelModal = function (hotelCardElement) {
    this.currentlySelectedHotelCard = hotelCardElement;
    const hotelId = this.hotelIdFromElement(hotelCardElement);
    const hotel = this.findHotelById(hotelId);
    openModalFor(hotel);
}

HotelController.prototype.closeModal = function () {
    closeHotelModal();
    this.currentlySelectedHotelCard.focus();
    this.currentlySelectedHotelCard = null;
}

HotelController.prototype.validateHotelName = function () {
    let updatedHotelNameElement = document.forms.hotelUpdateForm['hotelNameInput']
    let spaceTrimmedHotelName = updatedHotelNameElement.value.trim();
    updatedHotelNameElement.value = spaceTrimmedHotelName;
    if (spaceTrimmedHotelName.length < 3) {
        showInvalidNameError('Name should be atleast three characters long');
    }
    if (spaceTrimmedHotelName.length > 100) {
        showInvalidNameError('Name should not be greater than 100 characters');
    }
}

HotelController.prototype.isHotelNameInputValid = function () {
    let updatedHotelNameElement = document.forms.hotelUpdateForm['hotelNameInput'];

    // updating name after trimming all left spaces
    let nameAfterTrimmedLeftSpaces = updatedHotelNameElement.value.replace(/^\s*/, '');
    updatedHotelNameElement.value = nameAfterTrimmedLeftSpaces;

    let nameAfterTrimmedSpaces = nameAfterTrimmedLeftSpaces.trim();
    return 2 < nameAfterTrimmedSpaces.length && 101 > nameAfterTrimmedSpaces.length;
}

HotelController.prototype.enableUpdateButtonOnValidInput = function () {
    let isHotelNameValid = this.isHotelNameInputValid();
    if (isHotelNameValid) {
        enableHotelModalUpdateButton();
        hideInvalidNameError();
        return;
    }
    disableHotelModalUpdateButton();
}
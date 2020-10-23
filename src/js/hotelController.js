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
}

HotelController.prototype.refreshHotels = async function () {
    await this.fetchHotels();
    this.hotels.forEach(hotel => renderNewHotel(hotel));
}

HotelController.prototype.updateFavouriteStatusFor = function (hotelId) {
    let hotelToUpdate = this.findHotelById(hotelId);
    if (!hotelToUpdate) {
        return;
    }
    hotelToUpdate.isFavourite = !hotelToUpdate.isFavourite;
    updateStatusOnView(hotelToUpdate);
}

HotelController.prototype.updateHotelPreferences = function () {
    let updatedHotelName = document.forms.hotelUpdateForm['hotelNameInput'];
    let hotelId = parseInt(document.forms.hotelUpdateForm.dataset.selectedHotel);
    let hotelModel = this.findHotelById(hotelId);
    hotelModel.optionIds = fetchSelectedOptions();
    hotelModel.name = updatedHotelName.value;
    updateHotelPreferencesOnView(hotelModel);
    closeHotelModal();
}

function fetchSelectedOptions() {
    return Array.from(document.forms.hotelUpdateForm['options'])
        .filter(optionElement => optionElement.checked)
        .map(optionElement => optionElement.id);
}

HotelController.prototype.findHotelById = function (hotelId) {
    return this.hotels.find(hotel => hotel.id === hotelId);
}

HotelController.prototype.openHotelModal = function (hotelId) {
    let hotel = this.findHotelById(hotelId);
    if (!hotel) {
        return;
    }
    openModalFor(hotel);
}

HotelController.prototype.closeModal = function () {
    closeHotelModal();
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
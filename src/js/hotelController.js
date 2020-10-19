import { renderNewHotel, updateFavouriteStatusForHotel as updateStatusOnView, openModalFor, closeHotelModal, updateHotelPreferencesOnView } from './hotelRenderer.js';
import { Hotel } from './hotel.js';
import { HOTELS } from './seeds.js';

export class HotelController {
    constructor() {
        this.hotels = [];
    }
}

HotelController.prototype.fetchHotels = async function() {
    // let response = await fetch("https://run.mocky.io/v3/c89626ad-37a0-43dd-945a-3c8d17d0a9a1");
    // let hotels = await response.json();
    let hotels = HOTELS;
    this.hotels = hotels.map((hotel, index) => new Hotel(index, hotel.name, hotel.isFavourite, hotel.phoneNumber, hotel.logo));
}

HotelController.prototype.refreshHotels = async function() {
    await this.fetchHotels();
    this.hotels.forEach(hotel => renderNewHotel(hotel));
}

HotelController.prototype.updateFavouriteStatusFor = function(hotelId) {
    let hotelToUpdate = this.findHotelById(hotelId);
    if(!hotelToUpdate) {
        return;
    }
    hotelToUpdate.isFavourite = !hotelToUpdate.isFavourite;
    updateStatusOnView(hotelToUpdate);
}

HotelController.prototype.updateHotelPreferences = function(hotelOptions) {
    let updatedHotelName = document.forms.hotelUpdateForm['hotelNameInput'];
    let selectedHotelPreferences = Array.from(document.forms.hotelUpdateForm['options'])
        .filter(preference => preference.checked)
        .map(preference => preference.dataset.optionId);
    let hotelId = parseInt(document.forms.hotelUpdateForm.dataset.selectedHotel);
    let hotelModel = this.findHotelById(hotelId);
    hotelModel.name = updatedHotelName.value;
    hotelModel.options = selectedHotelPreferences;
    updateHotelPreferencesOnView(hotelModel, hotelOptions);
    closeHotelModal();
}

HotelController.prototype.findHotelById = function(hotelId) {
    return this.hotels.find(hotel => hotel.id === hotelId);
}

HotelController.prototype.openHotelModal = function(hotelId) {
    let hotel = this.findHotelById(hotelId);
    if(!hotel) {
        return;
    }
    openModalFor(hotel);
}

HotelController.prototype.closeModal = function() {
    closeHotelModal();
}
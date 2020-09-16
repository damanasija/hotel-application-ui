import { renderNewHotel, updateFavouriteStatusForHotel as updateStatusOnView } from './hotelRenderer.js';
import { Hotel } from './hotel.js';

export class HotelController {
    constructor() {
        this.hotels = [];
    }
}

HotelController.prototype.fetchHotels = async function() {
    let response = await fetch("https://run.mocky.io/v3/c89626ad-37a0-43dd-945a-3c8d17d0a9a1");
    let hotels = await response.json();
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

HotelController.prototype.findHotelById = function(hotelId) {
    return this.hotels.find(hotel => hotel.id === hotelId);
}
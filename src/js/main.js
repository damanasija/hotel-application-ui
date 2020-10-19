import { HotelController } from './hotelController.js';
import { interceptClicks } from './interceptor.js';

const hotelOptions = [{
    id: "near",
    name: "Near To Me"
}, {
    id: "dine-in",
    name: "Dine In"
}, {
    id: "Take Away",
    name: "Take Away"
}];

const hotelController = new HotelController();


document.querySelector('#hotels')
    .addEventListener('click', event => interceptClicks(event, hotelController));
document.querySelector('.modal-close')
    .addEventListener('click', event => hotelController.closeModal());
document.querySelector('#updateHotelButton')
    .addEventListener('click', event => {
        hotelController.updateHotelPreferences(hotelOptions);
    });

window.addEventListener('DOMContentLoaded', event => hotelController.refreshHotels());
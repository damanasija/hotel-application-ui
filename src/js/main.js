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
document.querySelector('#hotel-modal')
    .addEventListener('click', event => hotelController.closeModal());


window.addEventListener('DOMContentLoaded', event => hotelController.refreshHotels());
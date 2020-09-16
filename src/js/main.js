import { HotelController } from './hotelController.js';
import { interceptClicks } from './interceptor.js';

const hotelController = new HotelController();


document.querySelector('#hotels')
    .addEventListener('click', event => interceptClicks(event, hotelController));

window.addEventListener('DOMContentLoaded', event => hotelController.refreshHotels());
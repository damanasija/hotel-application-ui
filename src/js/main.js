import { HotelController } from './hotelController.js';
import { interceptClicks } from './interceptor.js';

const hotelController = new HotelController();


document.querySelector('#hotels')
    .addEventListener('click', event => interceptClicks(event, hotelController));
document.querySelector('.modal-close')
    .addEventListener('click', event => hotelController.closeModal());
document.querySelector('#updateHotelButton')
    .addEventListener('click', event => {
        hotelController.updateHotelPreferences();
    });
window.addEventListener('click', event => {
    if (isBackdropClickedForHotelModal(event)) {
        hotelController.closeModal();
      }
});

function isBackdropClickedForHotelModal(event) {
    return event.target.id === 'hotel-modal';
}

window.addEventListener('DOMContentLoaded', event => hotelController.refreshHotels());
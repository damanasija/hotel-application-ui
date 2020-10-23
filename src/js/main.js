import { HotelController } from './hotelController.js';
import { interceptClicks } from './interceptor.js';

const hotelController = new HotelController();


document.querySelector('#hotels')
    .addEventListener('click', event => interceptClicks(event, hotelController));
document.querySelector('.modal-close')
    .addEventListener('click', event => hotelController.closeModal());
document.querySelector('#updateHotelButton')
    .addEventListener('click', event => hotelController.updateHotelPreferences());
document.forms.hotelUpdateForm['hotelNameInput']
    .addEventListener('blur', event => hotelController.validateHotelName());
document.forms.hotelUpdateForm['hotelNameInput']
    .addEventListener('input', event => hotelController.enableUpdateButtonOnValidInput());
window.addEventListener('click', event => {
    if (isBackdropClickedForHotelModal(event)) {
        hotelController.closeModal();
      }
});

function isBackdropClickedForHotelModal(event) {
    return event.target.id === 'hotel-modal';
}

document.forms.hotelUpdateForm.addEventListener('submit', event => event.preventDefault());

window.addEventListener('DOMContentLoaded', event => hotelController.refreshHotels());
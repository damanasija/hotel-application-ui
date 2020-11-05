import { HotelController } from './hotelController.js';
import { interceptClicks, interceptKeyUpEvents, preventSpaceKeyDownEvent, handleEscapePressed } from './interceptor.js';

const hotelController = new HotelController();

const hotelContainer = document.querySelector('#hotels');
hotelContainer.addEventListener('click', event => interceptClicks(event, hotelController));
hotelContainer.addEventListener('keyup', event => interceptKeyUpEvents(event, hotelController));
hotelContainer.addEventListener('keydown', event => preventSpaceKeyDownEvent(event));

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
window.addEventListener('keyup', event => {
    handleEscapePressed(event);
})

function isBackdropClickedForHotelModal(event) {
    return event.target.id === 'hotel-modal';
}

document.forms.hotelUpdateForm.addEventListener('submit', event => event.preventDefault());

window.addEventListener('DOMContentLoaded', event => hotelController.refreshHotels());
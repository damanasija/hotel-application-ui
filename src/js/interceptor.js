import { openModalFor, closeModal } from './hotelModal.js';

const OPTIONS = [{
    "id": "near",
    "label": "Near To Me"
}, {
    "id": "dine-in",
    "label": "Dine In"
}, {
    "id": "take-away",
    "label": "Take Away"
}];

function interceptClicks(event, hotelController) {
    if (isFavouriteButtonClicked(event)) {
        toggleFavouriteStatus(event, hotelController);
    }
    if(isHotelCardClicked(event)) {
        console.log('card clicked');
        let hotelId = findClickedHotelCardId(event);
        let hotel = hotelController.findHotelById(hotelId);
        openModalFor(hotel);
    }
}

function isFavouriteButtonClicked(event) {
    return event.target.closest('div.hotel-status-container');
}

function toggleFavouriteStatus(event, hotelController) {
    let hotelId = findClickedHotelCardId(event);
    console.log(`intercepted click for favourite status. hotel-id: ${hotelId}`)
    hotelController.updateFavouriteStatusFor(hotelId);
}

// function findClickedHotelIdFromFavouriteButton(event) {
//     return event.target.parentElement.parentElement.dataset.id;
// }

function findClickedHotelCardId(event) {
    let clickedHotel = event.path.find(el => el.matches('li.card'));
    return parseInt(clickedHotel.dataset.id);
}

function isHotelCardClicked(event) {
    return event.target.closest(`li.card`);
}

// document.querySelector('#updateHotelButton')
//     .addEventListener('click', event => {
//         let updatedHotelName = document.querySelector('#hotel-name-input');
//         let selectedHotelPreferences = Array.from(document.querySelectorAll(`.options-container > .checkbox-option > input[type="checkbox"]`))
//         .filter(preference => preference.checked)
//         .map(preference => {
//             return {
//                 "id": preference.id,
//                 "label": document.querySelector(`label[for="${preference.id}"]`).textContent
//             };
//         });
//         console.log('name:'  + updatedHotelName.value);
//         console.log(selectedHotelPreferences);
//         hotelController.updateHotelPreferences({
//             "name": updatedHotelName,
//             "preferences": selectedHotelPreferences
//         });
//     });
export { interceptClicks };
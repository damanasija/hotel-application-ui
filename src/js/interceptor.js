import { closeHotelModal } from "./hotelRenderer";

const SPACE_KEY_CODE = 32;
const ENTER_KEY_CODE = 13;
const ESC_KEY_CODE = 27;

function interceptKeyUpEvents(event, hotelController) {
    // preventing scroll
    if (event.keyCode === SPACE_KEY_CODE || event.keyCode === ENTER_KEY_CODE) {
        event.preventDefault();
        openModal(event, hotelController);
    }
}

function preventSpaceKeyDownEvent(event) {
    // preventing scroll as multiple keydown events are fired fi space is held for long
    if(event.keyCode === SPACE_KEY_CODE) {
        event.preventDefault();
    }
}

function handleEscapePressed(event) {
    if(event.keyCode === ESC_KEY_CODE) {
        closeHotelModal();
    }
}

function openModal(event, hotelController) {
    const clickedCard = findClickedCardElementFrom(event);
    if(clickedCard) {
        hotelController.openHotelModal(event.target);
    }
}

function interceptClicks(event, hotelController) {
    if (isFavouriteButtonClicked(event)) {
        let cardElement = findClickedCardElementFrom(event);
        hotelController.updateFavouriteStatusFor(cardElement);
        return;
    }
    let clickedCardElement = findClickedCardElementFrom(event);
    if (clickedCardElement) {
        hotelController.openHotelModal(clickedCardElement);
    }
}

function isFavouriteButtonClicked(event) {
    return event.target.closest('.hotel-status-container');
}

function findClickedCardElementFrom(event) {
    return event.target.closest(`li.card`);
}

export { interceptClicks, interceptKeyUpEvents, preventSpaceKeyDownEvent, handleEscapePressed };
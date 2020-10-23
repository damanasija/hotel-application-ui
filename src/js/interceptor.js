function interceptClicks(event, hotelController) {
    if (isFavouriteButtonClicked(event)) {
        toggleFavouriteStatus(event, hotelController);
    }
    if (isHotelCardClicked(event)) {
        console.log('card clicked');
        let hotelId = findClickedHotelCardId(event);
        hotelController.openHotelModal(hotelId);
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

export { interceptClicks };
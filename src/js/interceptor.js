function interceptClicks(event, hotelController) {
    if (isFavouriteButtonClicked(event)) {
        toggleFavouriteStatus(event, hotelController);
        return;
    }
    event.stopPropagation();
}

function isFavouriteButtonClicked(event) {
    return event.target.closest('div.hotel-status-container');
}

function toggleFavouriteStatus(event, hotelController) {
    let hotelId = parseInt(findClickedHotelId(event));
    console.log(`intercepted click for favourite status. hotel-id: ${hotelId}`)
    hotelController.updateFavouriteStatusFor(hotelId);
}

function findClickedHotelId(event) {
    return event.target.parentElement.parentElement.dataset.id;
}

export { interceptClicks };
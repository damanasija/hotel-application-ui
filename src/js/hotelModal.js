function openModalFor(hotel) {
    let modalElement = document.querySelector('#hotel-modal');
    modalElement.style.display = 'flex';
    modalElement.dataset.selectedHotel = hotel.id;
    document.querySelector('#hotel-name-input').value = hotel.name;
    document.querySelector('#selected-hotel-name').innerText = hotel.name;
}

function closeModal() {
    let modalElement = document.querySelector('#hotel-modal');
    modalElement.style.display = 'none';
    delete modalElement.dataset.selectedHotel;
}

document.querySelector('#close-hotel-modal')
    .addEventListener('click', event => closeModal());

window
.addEventListener('click', event => {
    if (event.target == document.querySelector('#hotel-modal')) {
        closeModal();
    }
});

export { openModalFor, closeModal };
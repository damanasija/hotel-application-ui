export class Hotel {
    constructor(id, name, isFavourite, phoneNumber, logoUrl) {
        this.id = id;
        this.name = name;
        this.isFavourite = isFavourite;
        this.phoneNumber = phoneNumber;
        this.logoUrl = logoUrl;
        this.options = [];
    }
}

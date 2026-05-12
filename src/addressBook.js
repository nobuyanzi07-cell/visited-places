const Contact = require('./contact');

function AddressBook() {
    this.contacts = [];
    console.log('AddressBook created');
}

AddressBook.prototype.addContact = function(contact) {
    this.contacts.push(contact);
    console.log(`Contact added: ${contact.name}`);
    console.log(`Total contacts: ${this.contacts.length}`);
};

AddressBook.prototype.findContact = function(name) {
    const found = this.contscts.find(c => c.name === name);
    if (found) {
        console.log(`Contact found: ${found.name}`);
        return found;
    } else {
        console.log(`Contact not found: ${name}`);
    }
     return found;
};

AddressBook.prototype.removeContact = function(name) {
    const beforeCount = this.contacts.length;
    this.contacts = this.contacts.filter(c => c.name !== name);
    const afterCount = this.contacts.length;
    if (beforeCount === afterCount) {
        console.log(`Contact not found for removal: ${name}`);
    } else {
        console.log(`Contact removed: ${name}`);
        console.log(`Remaining contacts: ${this.contacts.map(c => c.name).join(", ") || "none"}`);
    }
};
    

module.exports = AddressBook;



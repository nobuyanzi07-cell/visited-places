const AddressBook = require("../src/addressbook");
const Contact = require('../src/Contact');

test('adds and finds a contact', () => {
    const book = new AddressBook();
    const c = new Contact('Obuyanzi Nathan', '0723242452', 'nobuya67@example.com');
    book.addContact(c);
    expect(book.findContact('Obuyanzi Nathan')).toBe(c);
});

test('removes a contact', () => {
    const book = new AddressBook();
    const c = new Contact('Obuyanzi Nathan', '0723242452', 'nobuya67@example.com');
    book.addContact(c);
    book.removeContact('Obuyanzi Nathan');
    expect(book.contact.length).toBe(0);
});

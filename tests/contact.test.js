const Contact = require('../src/contact.js');

test('updates phone number', () => {
    const c = new Contact('Obuyanzi Nathan', '0723242452', 'nobuya67@example.com');
    c.updatePhone('0712345678');
    expect(c.phone).toBe('0712345678');
});
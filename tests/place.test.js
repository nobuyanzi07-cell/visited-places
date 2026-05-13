const Place  = require('../src/place');

test('summaries place', () => {
    const p = new Place('Uhuru Park', 'Nairobi County');
    expect(p.summary()).toBe('Uhuru Park is located in Nairobi County');
});
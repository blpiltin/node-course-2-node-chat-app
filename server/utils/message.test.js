const expect = require('expect');

const {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate correct message object', () => {
    var msg = generateMessage('Admin', 'How is it going?');

    expect(msg.from).toBe('Admin');
    expect(msg.text).toBe('How is it going?');
    expect(msg.createdAt).toBeA('number');
  });
});

describe('generateLocationMessage', () => {
  it('should generate correct location object', () => {
    var lat = 27.495982;
    var lng = -99.477654;
    var msg = generateLocationMessage('Admin', lat, lng);

    expect(msg.from).toBe('Admin');
    expect(msg.url).toBe(`https://www.google.com/maps?q=${lat},${lng}`);
    expect(msg.createdAt).toBeA('number');
  });
});
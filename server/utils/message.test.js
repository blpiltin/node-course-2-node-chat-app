const expect = require('expect');

const {generateMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate correct message object', () => {
    var msg = generateMessage('Admin', 'How is it going?');

    expect(msg.from).toBe('Admin');
    expect(msg.text).toBe('How is it going?');
    expect(msg.createdAt).toBeA('number');
  });
});
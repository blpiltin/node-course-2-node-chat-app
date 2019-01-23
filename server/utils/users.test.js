const expect = require('expect');

const {Users} = require('./users');

describe('Users', () => {

  var users; 

  beforeEach(() => {
    users = new Users();
    users.users = [{
      id: '1',
      name: 'Mike',
      room: 'Node Course'
    }, {
      id: '2',
      name: 'Jen',
      room: 'React Course'
    }, {
      id: '3',
      name: 'Julie',
      room: 'Node Course'
    }];
  });

  it('should add new user', () => {
    var users = new Users();
    var user = users.addUser('123', 'Brian', 'The Office Fans');
    expect(users.users).toEqual([user]);
  });

  it('should return names for node course', () => {
    var userList = users.getUserList('Node Course');
    expect(userList).toEqual(['Mike', 'Julie']);
  });

  it('should return names for react course', () => {
    var userList = users.getUserList('React Course');
    expect(userList).toEqual(['Jen']);
  });

  it('should get the user based on id', () => {
    var user = users.getUser('2');
    expect(user).toEqual(users.users[1]);
    expect(users.users.length).toBe(3);
  });

  it('should not get the user with invalid id', () => {
    var user = users.getUser('5');
    expect(user).toNotExist();
  });

  it('should remove the user based on id', () => {
    var user = users.removeUser('2');
    expect(user).toEqual({id: '2', name: 'Jen', room: 'React Course'});
    expect(users.users.length).toBe(2);
  });

  it('should not remove a user with invalid id', () => {
    var user = users.removeUser('5');
    expect(users.users.length).toBe(3);
  });
});
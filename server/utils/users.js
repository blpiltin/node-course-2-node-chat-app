[{
  id: '/#12asdfsdflkjdf',
  name: 'Brian',
  room: 'The Office Fans'
}]

// addUser(id, name, room)
// removeuser(id)
// getuser(id)
// getUserList(room)

class Users {

  constructor() {
    this.users = [];
  }

  addUser(id, name, room) {
    var user = {id, name, room};
    this.users.push(user);
    return user;
  }

  getUser(id) {
    return this.users.filter((user) => user.id === id)[0];
  }

  removeUser(id) {
    var user = this.getUser(id);
    var i = this.users.indexOf(user);
    if (i >= 0) this.users.splice(i, 1);
    return user;
  }

  getUserList(room) {
    var users = this.users.filter((user) => user.room === room);
    var names = users.map((user) => user.name);
    return names;
  }
}

module.exports = {Users};

// class Person {

//   constructor (name, age) {
//     this.name = name;
//     this.age = age
//   }

//   getUserDescription () {
//     return `${this.name} is ${this.age}.`;
//   }
// }

// var me = new Person('Brian', 46);

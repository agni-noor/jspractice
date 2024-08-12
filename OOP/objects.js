function User(email, name) {
  this.email = email;
  this.name = name;
  this.online = false;
}
User.prototype.login = function () {
  this.online = true;
  console.log(this.email, "has logged in");
};
User.prototype.logout = function () {
  this.online = false;
  console.log(this.email, "has logged out");
};

function Admin(...args) {
  User.apply(this, args);
  this.role = "super admin";
}
Admin.prototype = Object.create(User.prototype);
Admin.prototype.deleteUser = function (u) {
  users = users.filter((user) => {
    return user.email != u.email;
  });
};
var userOne = new User("agni@gmail.com", "agni");
var userTwo = new User("noor@gmail.com", "noor");
var admin = new Admin("admin@gmail.com", "admin");
var users = [userOne, userTwo, admin];

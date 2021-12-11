// create a user object that has three properties, username, password, and age. Using JavaScript Symbols, ensure that username and password are private fields on the user character. This means they shouldn't be accessible by calling user.username or user.password.
let test = Symbol("test123")
console.log(test)

const _username = Symbol("username");
const _password = Symbol("password");
class User {
    constructor(username, password, age) {
        this[_username] = username;
        this[_password] = password;
        this.age = age;
    }
}

let user1 = new User("lcmedina", "pass123", 31);
console.log(user1)
console.log(user1.username)
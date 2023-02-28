class User {
    constructor(username) {
        this._username = username;
    }

    set username(newUsername) {
        this._username = newUsername;
    }

    get username() {
        return this._username;
    }
}

class Admin extends User {
    constructor(username) {
        super(username);
    }

    expressYourRole() {
        return "Admin";
    }

    sayHello() {
        return "Hello admin, " + this._username;
    }
}

const adm = new Admin("Balthazar");
console.log(adm.expressYourRole());
console.log(adm.sayHello());

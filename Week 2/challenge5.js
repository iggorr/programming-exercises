class User {
    constructor() {
        if (this.constructor === User) {
            throw new TypeError("Cannot construct Abstract instances directly.");
        }

        this._username = "";
    }

    set username(username) {
        this._username = username;
    }

    get username() {
        return this._username;
    }

    stateYourRole() {
        throw new TypeError("Do not call abstract method from child.");
    }
}


class Admin extends User {
    constructor() {
        super();
    }

    stateYourRole() {
        return "admin";
    }

}

class Viewer extends User {
    constructor() {
        super();
    }

    stateYourRole() {
        return "viewer";
    }

}

//let user = new User();

const admin = new Admin();
admin.username = "Balthazar";
console.log(admin.stateYourRole() + " " + admin.username);

const viewer = new Viewer();
viewer.username = "Melchior";
console.log(viewer.stateYourRole() + " " + viewer.username);

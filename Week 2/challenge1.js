class User {
    constructor(first, last) {
        this.first = first;
        this.last = last;
    }

    hello() {
        console.log("Hello, " + this.first + " " + this.last);
    }
}

const user1 = new User("John", "Doe");
console.log("User is " + user1.first + " " + user1.last);
user1.hello();

const user2 = new User("Jane", "Doe");
user2.hello();

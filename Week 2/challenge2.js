class User {
    constructor(firstName, lastName) {
      this._firstName = firstName;
      this._lastName = lastName;
    }

    get firstName() {
        return this._firstName;
    }

    set firstName(newName) {
        this._firstName = newName;
    }

    get lastName() {
        return this._lastName;
    }

    set lastName(newName) {
        this._lastName = newName;
    }
    
    hello() {
      return "Hello World!";
    }  
  }

  const user = new User("Jj", "Reid");
  user.firstName = "Freida";
  user.lastName = "Xyz";
  
  console.log(user.hello());
  console.log("My name is " + user.firstName + " " + user.lastName);
  
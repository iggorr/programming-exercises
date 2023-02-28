class User {
    constructor() {
        this.numberOfArticles = 0;
    }

    setNumberOfArticles(numberOfArticles) {
        this.numberOfArticles = numberOfArticles;
    }

    getNumberOfArticles() {
        return this.numberOfArticles;
    }

    calcScores() {}
}

class Author extends User {
    constructor() {
        super();
    }

    calcScores() {
        return this.numberOfArticles * 10 + 20;
    }
}

class Editor extends User {
    constructor() {
        super();
    }

    calcScores() {
        return this.numberOfArticles * 6 + 15;
    }
}

let author = new Author();
author.setNumberOfArticles(8);
console.log(author.calcScores());

let editor = new Editor();
editor.setNumberOfArticles(15);
console.log(editor.calcScores());

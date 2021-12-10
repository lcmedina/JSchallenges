// getAvailability() "out of stock" = 0; "low stock" <10; "in stock" otherwise
//sell(numSold) default 1; totalCopies - numSold
//restock(numCopies) default 5; numCopies + totalCopies
//classes and getter

// title, author, ISBN, numCopies

class Book {
    constructor(title, author, ISBN, totalCopies) {
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
        this.totalCopies = totalCopies;
    }

    get availabilty() {
        return this.getAvailablity();
    }

    getAvailablity() {
        if (this.totalCopies === 0) {
            return "out of stock"
        } else if (this.totalCopies < 10) {
            return "low stock"
        } else {
            return "in stock"
        }
    }

    sell(numSold = 1) {
        this.totalCopies -= numSold;
    }

    restock(numCopies = 5) {
       this.totalCopies += numCopies;
    }
} 

    const HarryPotter = new Book("Harry Potter", "JK Rowling", 123456789, 5);
    console.log(HarryPotter.getAvailablity());
    HarryPotter.restock(12);
    console.log(HarryPotter.getAvailablity());
    HarryPotter.sell(17);
    console.log(HarryPotter.getAvailablity());
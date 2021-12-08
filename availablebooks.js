// getAvailability() "out of stock" = 0; "low stock" <10; "in stock" otherwise
//sell(numSold) default 1; totalCopies - numSold
//restock(numCopies) default 5; numCopies + totalCopies
//classes and getter

// title, author, ISBN, numCopies

function Book(title, author, ISBN, totalCopies) {
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
        this.totalCopies = totalCopies;
    }

    Book.prototype.getAvailablity = function() {
        if (this.totalCopies === 0) {
            return "out of stock"
        } else if (this.totalCopies < 10) {
            return "low stock"
        } else {
            return "in stock"
        }
    }

    Book.prototype.sell = function(numSold) {
        if (numSold == null) {
            return this.totalCopies - 1
        } else {
            return this.totalCopies - numSold
        }
    }

    Book.prototype.restock = function(numCopies) {
        if (numCopies === null) {
            return this.totalCopies + 5
        } else {
            return this.totalCopies + numCopies
        }
    }
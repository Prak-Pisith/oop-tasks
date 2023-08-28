var Author = /** @class */ (function () {
    function Author(name, bio) {
        this.name = name;
        this.bio = bio;
    }
    Author.prototype.getDetails = function () {
        return "Author: ".concat(this.name, "\nBio: ").concat(this.bio);
    };
    return Author;
}());
var Book = /** @class */ (function () {
    function Book(title, publicationYear) {
        this.title = title;
        this.publicationYear = publicationYear;
    }
    Book.prototype.getDetails = function () {
        return "Book: ".concat(this.title, "\nPublication Year: ").concat(this.publicationYear);
    };
    return Book;
}());
// Composite Class 
var BookAuthor = /** @class */ (function () {
    function BookAuthor(author, book) {
        this.author = author;
        this.book = book;
    }
    BookAuthor.prototype.getDetails = function () {
        return "".concat(this.author.getDetails(), "\n").concat(this.book.getDetails());
    };
    return BookAuthor;
}());
// Create instances
var jkRowling = new Author('J.K. Rowling', 'Famous author of the Harry Potter series');
var harryPotter = new Book('Harry Potter series', 1997);
var harryPotterBook = new BookAuthor(jkRowling, harryPotter);
console.log(harryPotterBook.getDetails());

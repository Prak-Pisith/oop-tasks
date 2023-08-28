interface AuthorBook {
  getDetails(): string;
}

class Author implements AuthorBook {
  private name: string;
  private bio: string;

  constructor(name: string, bio: string) {
    this.name = name;
    this.bio = bio;
  }

  getDetails(): string {
    return `Author: ${this.name}\nBio: ${this.bio}`;
  }
}

class Book implements AuthorBook {
  private title: string;
  private publicationYear: number;

  constructor(title: string, publicationYear: number) {
    this.title = title;
    this.publicationYear = publicationYear;
  }

  getDetails(): string {
    return `Book: ${this.title}\nPublication Year: ${this.publicationYear}`;
  }
}

// Composite Class 
class BookAuthor implements AuthorBook {
  private author: Author;
  private book: Book;

  constructor (author: Author, book: Book) {
    this.author = author;
    this.book = book;
  }

  getDetails(): string {
    return `${this.author.getDetails()}\n${this.book.getDetails()}`;
  }
}

// Create instances
const jkRowling = new Author('J.K. Rowling', 'Famous author of the Harry Potter series');
const harryPotter = new Book('Harry Potter series', 1997);
const harryPotterBook = new BookAuthor(jkRowling, harryPotter);
console.log(harryPotterBook.getDetails());
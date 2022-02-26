class Book {
    constructor(title, author, year, isRead = false) {
      this.title = title;
      this.author = author;
      this.year = year;
      this.isRead = isRead;
    }
  }
  
  const book1 = new Book('Dune', 'Frank Herbert', 1965);
  const book3 = new Book('test', 'test2');
  console.log(book3);
  
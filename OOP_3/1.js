class Author {
    name = "";
    email = "";
    gender = '';
    constructor(name, email,gender) {
      this.name = name;
      this.email = email;
      this.gender = gender;
    }
  
    getName() {
      return this.name;
    }
  
    getEmail() {
      return this.email;
    }
    setEmail(email) {
      this.email = email;
    }

    
  
    toString() {
      return `Author[name = ${this.name}, email = ${this.email}, gender = ${this.gender}]`;
    }
  }
  

  class Book {
    name = "";
    authors = [];
    price = 0;
    qty = 0;
    constructor(name, authors, price, qty=0 ) {
      this.name = name;
      this.authors = authors;
      this.price = price;
      this.qty = qty;
    }
    //constructor(name,authors,price) {
      //this(name,authors,price,0);
    //}
  
    getName() {
      return this.name;
    }
  
    getAuthors() {
      return this.authors;
    }
  
    getPrice() {
      return this.price;
    }
  
    setPrice(price) {
      this.price = price;
    }
  
    getQty() {
      return this.qty;
    }
  
    setQty(qty) {
      this.qty = qty;
    }
  
    toString() {
      let authorNames = "";
      for (let i = 0; i < this.authors.length; i++) {
      authorNames += this.authors[i].toString();
      if (i !== this.authors.length - 1) {
        authorNames += ", ";
      }
    }
      return `Book[name = ${this.name}, authors = {${authorNames}}, price = ${this.price}, qty = ${this.qty}]`;
    }
  
    getAuthorNames() {
      let authorNames = "";
      for (let i = 0; i < this.authors.length; i++) {
        authorNames += this.authors[i].getName();
        if (i !== this.authors.length - 1) {
          authorNames += ", ";
        }
      }
      return authorNames;
    }
  }
  
  
  // ตัวอย่างการใช้งาน
  const main = () => {


  const author1 = new Author("Bussaba Sd", "Busabong@example.com","F");
  const author2 = new Author("Johnnie de", "janedoef@example.com","M");
  console.log(author1.toString());
  console.log(author2.toString());

  const book1 = new Book("มาตาลดา", [author1, author2], 299,10);
  console.log(book1.getAuthorNames());
  console.log(book1.toString());


  
  //const authors = [author1, author2];
  
  //const book = new Book("My Book", authors, 100.00, 10);
  
  //console.log(book.toString()); // => "Book[name=My Book, authors={Author[name=John Doe, email=johndoe@example.com], Author[name=Jane Doe, email=janedoe@example.com]}, price=100, qty=10]"
  
  //console.log(book.getAuthorNames()); // => "John Doe, Jane Doe
  }
  main();
function Book(title, author) {
  this.title = title;
  this.author = author;
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

function createNewBook() {
  const submittedName = document.getElementById("new-book-title").value;
  const submittedAuthor = document.getElementById("new-book-author").value;
  const newBook = new Book(submittedName, submittedAuthor);
  return newBook;
}

function createBookCard(book) {
  const div = document.createElement("div");
  const paraTitle = document.createElement("p");
  const paraAuthor = document.createElement("p");
  div.classList.add("book-card");
  paraTitle.classList.add("title");
  paraAuthor.classList.add("author");
  paraTitle.textContent = "Title: " + book.title;
  paraAuthor.textContent = "Author: " + book.author;
  div.append(paraTitle);
  div.append(paraAuthor);
  return div;
}

function addToLibraryInDOM(div) {
  const library = document.querySelector(".library");
  library.append(div);
}

function addNewBook() {
  const book = createNewBook();
  addBookToLibrary(book);
  const div = createBookCard(book);
  addToLibraryInDOM(div);
}

let myLibrary = []; // Global variable — Should consider changing this scope.

document.querySelector(".new-book-button").addEventListener("click", addNewBook);

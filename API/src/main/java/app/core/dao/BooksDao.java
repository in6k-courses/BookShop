package app.core.dao;

import app.core.model.Book;

import java.util.List;

interface BooksDao {

    public List<Book> getBooks();

    public void deleteBook(Integer id);

    public void addBook(Book book);

    public void updateBook(Book upBook);

    public List<Book> getBooksByCategory(Integer id);

}

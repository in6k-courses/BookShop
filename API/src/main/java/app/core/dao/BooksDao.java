package app.core.dao;

import app.core.model.Book;
import org.hibernate.Criteria;

import java.util.List;

interface BooksDao {

    public List getBooks();

    public void deleteBook(Integer id);

    public Book addBook(Book book);

    public void updateBook(Book upBook);

    public List<Book> searchBook(String name);

    public Criteria createCriteria();
}

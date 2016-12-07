package app.core.service;

import app.core.dao.BooksDaoImpl;
import app.core.model.Book;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class BookServiceImpl {
    @Autowired
    BooksDaoImpl dao;

    public List<Book> getBooks() {
        return dao.getBooks();
    }

    public void addBook(Book book) {
        dao.addBook(book);
    }

    public void updateBook(Book upBook) {
        dao.updateBook(upBook);
    }

    public void deleteBook(Integer id) {
        dao.deleteBook(id);
    }
}

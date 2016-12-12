package app.core.dao;

import app.core.model.Book;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

import static org.hibernate.criterion.Restrictions.eq;

@Repository
public class BooksDaoImpl implements BooksDao {
    @Autowired
    SessionFactory sessionFactory;

    public List<Book> getBooks() {
        return sessionFactory.getCurrentSession().createCriteria(Book.class).list();
    }

    public List<Book> getBooksByCategory(Integer id){
        List<Book> books = (List<Book>) sessionFactory.getCurrentSession().createCriteria(Book.class)
                .add(eq("id", id))
                .list();

        return books;
    }

    public Book addBook(Book book) {
        sessionFactory.getCurrentSession().save(book);
        return book;
    }


    public void updateBook(Book upBook) {
        Book book = (Book) sessionFactory.getCurrentSession().createCriteria(Book.class)
                .add(eq("id", upBook.getId())).uniqueResult();
        book.setName(upBook.getName());
        sessionFactory.getCurrentSession().update(book);
    }

    public void deleteBook(Integer id) {
        System.out.println(id);
        Session currentSession = sessionFactory.getCurrentSession();
        Book book = (Book) currentSession.createCriteria(Book.class)
                .add(eq("id", id)).uniqueResult();
        currentSession.delete(book);
    }

}

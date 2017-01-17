package app.core.dao;

import app.core.model.Book;
import org.hibernate.Criteria;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.criterion.Restrictions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

import static org.hibernate.criterion.Restrictions.eq;

@Repository
public class BooksDaoImpl implements BooksDao {
    @Autowired
    SessionFactory sessionFactory;

    public Criteria createCriteria(){
        return sessionFactory.getCurrentSession().createCriteria(Book.class);
    }

    public List<Book> getBooks() {return createCriteria().setResultTransformer(Criteria.DISTINCT_ROOT_ENTITY).list();
    }

    public List<Book> searchBook(String name){
        String searchName = name + "%";
        List<Book> book = (List<Book>) createCriteria()
                .add(Restrictions.like("name", searchName)).list();
        return book;
    }

    public Book addBook(Book book) {
        sessionFactory.getCurrentSession().save(book);
        return book;
    }

    public void updateBook(Book upBook) {
        Book book = (Book) createCriteria()
                .add(eq("id", upBook.getId())).uniqueResult();
        book.setName(upBook.getName());
        sessionFactory.getCurrentSession().update(book);
    }

    public void deleteBook(Integer id) {
        Book book = (Book) createCriteria()
                .add(eq("id", id)).uniqueResult();
        sessionFactory.getCurrentSession().delete(book);
    }

}

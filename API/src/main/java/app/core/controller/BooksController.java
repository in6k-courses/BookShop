package app.core.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import app.core.model.Book;

import java.util.List;

import app.core.service.BookServiceImpl;

@RestController
@RequestMapping(value = "/api/books")
public class BooksController {

    @Autowired
    BookServiceImpl service;

    @ResponseBody
    @RequestMapping(value = "", method = RequestMethod.GET)
    public List<Book> allBooks() {
        return service.getBooks();
    }

    @ResponseBody
    @RequestMapping(value = "", method = RequestMethod.POST)
    public Book addBook(@RequestBody Book book) {
        return service.addBook(book);
    }

    @ResponseBody
    @RequestMapping(value = "/", method = RequestMethod.PUT)
    public void updateBook(@RequestBody Book upBook) {
        service.updateBook(upBook);
    }

    @ResponseBody
    @RequestMapping(value = {"/{id}"}, method = RequestMethod.DELETE)
    public void deleteBook(@PathVariable("id") Integer id) {
        service.deleteBook(id);
    }

}

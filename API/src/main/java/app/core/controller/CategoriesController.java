package app.core.controller;

import app.core.model.Book;
import app.core.model.Categories;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import app.core.service.CategoriesServiceImpl;


@RestController
@RequestMapping(value = "/api/categories")
public class CategoriesController {

    @Autowired
    CategoriesServiceImpl service;

    @ResponseBody
    @RequestMapping(value = "", method = RequestMethod.GET)
    public List<Categories> allCategories() {
        return service.getCategories();
    }

}

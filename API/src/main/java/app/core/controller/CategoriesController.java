package app.core.controller;

import app.core.model.Categories;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import app.core.service.CategoriesServiceImpl;

@RestController
public class CategoriesController {

    @Autowired
    CategoriesServiceImpl service;

    @ResponseBody
    @RequestMapping(value = "/api/categories", method = RequestMethod.GET)
    public List<Categories> allCategories() {

        System.out.println(service.getCategories());
        return service.getCategories();
    }

}

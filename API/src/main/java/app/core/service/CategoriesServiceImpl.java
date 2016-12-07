package app.core.service;

import app.core.dao.CategoriesDaoImpl;
import app.core.model.Categories;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class CategoriesServiceImpl {
    @Autowired
    CategoriesDaoImpl dao;

    public List<Categories> getCategories() {
        return dao.getCategories();
    }
}

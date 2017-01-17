package app.core.dao;

import app.core.model.Categories;
import org.hibernate.Criteria;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class CategoriesDaoImpl implements CategoriesDao {

    @Autowired
    SessionFactory sessionFactory;

    public List<Categories> getCategories() {
        return sessionFactory.getCurrentSession()
                .createCriteria(Categories.class)
                .setResultTransformer(Criteria.DISTINCT_ROOT_ENTITY).list();
    }
}

package app.core.dao;

import app.core.model.Shop;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class ShopDaoImpl implements ShopDao {
    @Autowired
    SessionFactory sessionFactory;

    public List<Shop> getShops() {
        return sessionFactory.getCurrentSession().createCriteria(Shop.class).list();
    }

}

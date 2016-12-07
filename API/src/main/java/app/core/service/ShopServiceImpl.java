package app.core.service;

import app.core.dao.ShopDaoImpl;
import app.core.model.Shop;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class ShopServiceImpl{
    @Autowired
    ShopDaoImpl dao;

    public List<Shop> getShops() {
        return dao.getShops();
    }
}

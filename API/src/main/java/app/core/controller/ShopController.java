package app.core.controller;

import app.core.model.Shop;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import app.core.service.ShopServiceImpl;

@RestController
@RequestMapping(value = "/api/shops")
public class ShopController {

    @Autowired
    ShopServiceImpl service;

    @ResponseBody
    @RequestMapping(value = "", method = RequestMethod.GET)
    public List<Shop> allShops() {
        return service.getShops();
    }

}

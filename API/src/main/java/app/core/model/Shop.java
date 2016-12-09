package app.core.model;

import javax.persistence.*;

import java.util.ArrayList;
import java.util.List;

import static javax.persistence.GenerationType.IDENTITY;

@Entity
@Table(name = "shop", catalog = "Library", uniqueConstraints = {
        @UniqueConstraint(columnNames = "id")})
public class Shop {

    @Id
    @GeneratedValue(strategy = IDENTITY)
    @Column(name = "id")
    public Integer id;

    @Column(name = "name")
    public String name;


    public Integer getId() {
        return this.id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return this.name;
    }

    public void setName(String name) {
        this.name = name;
    }
}

package app.core.model;

import javax.persistence.*;

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



}

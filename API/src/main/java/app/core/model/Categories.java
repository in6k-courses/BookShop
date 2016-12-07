package app.core.model;

import org.codehaus.jackson.annotate.JsonIgnore;
import org.hibernate.annotations.Cascade;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "categories", catalog = "Library", uniqueConstraints = {@UniqueConstraint(columnNames = "id")})
public class Categories {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", unique = true, nullable = false)
    public Integer id;

    @Column(name = "name")
    public String name;

    @JsonIgnore
    @OneToMany(fetch = FetchType.LAZY, mappedBy = "categories")
    @Cascade({org.hibernate.annotations.CascadeType.DELETE})
    public List<Book> categories = new ArrayList();

    public Categories() {
    }

    public Categories(String name) {
        this.name = name;
    }

    public Categories(Integer id) {
        this.id = id;
    }

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

    public List<Book> getCategories() {
        return categories;
    }

    public void setCategories(List<Book> categories) {
        this.categories = categories;
    }


}

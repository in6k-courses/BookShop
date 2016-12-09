package app.core.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;

import java.util.ArrayList;
import java.util.List;
import javax.persistence.ManyToMany;


import static javax.persistence.GenerationType.IDENTITY;

@Entity
@Table(name = "books", catalog = "Library", uniqueConstraints = {
        @UniqueConstraint(columnNames = "id")})
public class Book {

    @Id
    @GeneratedValue(strategy = IDENTITY)
    @Column(name = "id")
    private Integer id;

    @Column(name = "name")
    private String name;

    @Column(name = "author")
    private String author;

    @Column(name = "category")
    private Integer category;

    @JsonIgnore
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "category", insertable = false, updatable = false)
    private Categories categories;



    public Book() {
    }

    public Book(Integer id) {
        this.id = id;
    }

    public Book(String name, String author, Integer category) {
        this.name = name;
        this.author = author;
        this.category = category;
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

    public String getAuthor() {
        return this.author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public Integer getCategory() {
        return this.category;
    }

    public void setCategory(Integer category) {
        this.category = category;
    }

    public Categories getCategories() {
        return categories;
    }

    public void setCategories(Categories categories) {
        this.categories = categories;
    }


}



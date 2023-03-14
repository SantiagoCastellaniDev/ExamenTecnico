
// Products Class

package com.back.et.model;
 
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;

@Getter @Setter
@Entity
public class Product {
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long idProduct;
    
    private String name;
    
    private String description;
    
    private double price;
    
    private String category;
    
    private String img_Product;

    public Product() {
    }

    public Product(Long idProduct, String name, String description, double price, String category, String img_Product) {
        this.idProduct = idProduct;
        this.name = name;
        this.description = description;
        this.price = price;
        this.category = category;
        this.img_Product = img_Product;
    }   
    
    
}

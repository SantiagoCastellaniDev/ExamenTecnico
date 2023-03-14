
// Product Service

package com.back.et.service;

import com.back.et.model.Product;
import com.back.et.repository.ProductRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProductService implements IService<Product>{
    
    @Autowired
    private ProductRepository productRepo;

    @Override
    public List<Product> getAll() throws Exception {
        List<Product> listProducts = productRepo.findAll();
           return listProducts;
    }

    @Override
    public Product findById(Long id) throws Exception {
        Product product = productRepo.findById(id).orElse(null);        
        return product;
    }

    @Override
    public void save(Product product) throws Exception {
        productRepo.save(product);
    }

    @Override
    public void delete(Long id) throws Exception {
        productRepo.deleteById(id);
    }

    @Override
    public void update(Long id, Product product) throws Exception {
        productRepo.save(product);
    }
    
}

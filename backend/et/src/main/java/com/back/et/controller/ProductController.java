
// Product Controller

package com.back.et.controller;

import com.back.et.model.Product;
import com.back.et.service.IService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins="*")
public class ProductController {
    
    @Autowired
    private IService<Product> iproductService;
    
    // getAll (Ver Productos)
    @GetMapping ("/products")
    public List<Product> ver() throws Exception{
        return iproductService.getAll();
    }
    
    // save (Guardar Producto)
    //@PreAuthorize("hasRole('ADMIN')")
    @PostMapping ("/product/save")    
    public void saveProduct(@RequestBody Product product) throws Exception{
        iproductService.save(product);
    }
    
    // delete (Eliminar Producto)
    //@PreAuthorize("hasRole('ADMIN')")
    @DeleteMapping ("/product/delete/{id}")
    public void deleteById(@PathVariable Long id) throws Exception{
        iproductService.delete(id);
    }
    
    // update (Modificar Producto)
    //@PreAuthorize("hasRole('ADMIN')")
    @PutMapping ("/product/update/{id}")
    public ResponseEntity<Product> actualizarExperiencia 
                            (@PathVariable Long id,
                             @RequestBody Product newProduct) throws Exception {
        
        Product product = this.iproductService.findById(id);
        
        product.setName(newProduct.getName());
        product.setDescription(newProduct.getDescription());
        product.setPrice(newProduct.getPrice());
        product.setCategory(newProduct.getCategory());
        product.setImg_Product(newProduct.getImg_Product());
        
        //New Product        
        iproductService.save(product);
              
        return ResponseEntity.ok(product);
    }    
}

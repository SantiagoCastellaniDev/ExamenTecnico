
// Generic Service

package com.back.et.service;

import java.util.List;


public interface IService<X> {
    
    //Generico VER DATOS (findAll)
    public List<X> getAll() throws Exception;
    
    //Generico BUSCAR POR ID  (findById)  
    public X findById(Long id) throws Exception;
    
    //Generico GUARDAR DATOS  (save)
    public void save(X product) throws Exception;
    
    //Generico BORRAR DATOS  (deleteById)
    public void delete(Long id) throws Exception;
    
    //Generico ACTUALIZAR DATOS  (updateById)
    public void update(Long id, X product) throws Exception;    
    
}

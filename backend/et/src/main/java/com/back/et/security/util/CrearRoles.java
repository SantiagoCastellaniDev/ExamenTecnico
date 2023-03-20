
// CREAR ROLES

// Solo se crea roles al iniciar la base de datos...
/*
package com.back.et.security.util;


import com.back.et.security.entity.Rol;
import com.back.et.security.enums.RolNombre;
import com.back.et.security.service.RolService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component 
public class CrearRoles  implements CommandLineRunner {   
    
    
    @Autowired
    RolService rolService;
    @Override
    public void run(String... args) throws Exception {
        Rol rolAdmin = new Rol(RolNombre.ROLE_ADMIN);
        Rol rolUser = new Rol(RolNombre.ROLE_USER);
        rolService.save(rolAdmin);
        rolService.save(rolUser);
    } 
}
*/
package com.back.et.security.util;
public class CrearRoles{
}



// REPOSITORY Rol

package com.back.et.security.repository;
import com.back.et.security.entity.Rol;
import com.back.et.security.enums.RolNombre;

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface RolRepository extends JpaRepository<Rol, Integer> {
    Optional<Rol> findByRolNombre(RolNombre rolNombre);
}

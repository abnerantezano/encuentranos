package com.proyecto.encuentranos.repositorios;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.proyecto.encuentranos.modelos.ProveedorModelo;
@Repository
public interface IProveedorRepositorio extends JpaRepository<ProveedorModelo, Integer>{
    List<ProveedorModelo> findByIdDistritoNombre(String nombreDistrito);
    boolean existsByIdUsuarioCorreo(String correo);
    Optional<ProveedorModelo> findByIdUsuarioId(Integer usuarioId);

}

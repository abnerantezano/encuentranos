package com.proyecto.encuentranos.controladores;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.proyecto.encuentranos.modelos.UsuarioModelo;
import com.proyecto.encuentranos.servicios.UsuarioServicio;

import java.util.ArrayList;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/usuario")
public class UsuarioControlador {

    @Autowired
    UsuarioServicio usuarioServicio;
    
    
    @GetMapping("/listar")
    public ResponseEntity<ArrayList<UsuarioModelo>> obtenerUsuarios(){
    	ArrayList<UsuarioModelo> usuarios = this.usuarioServicio.obtenerUsuarios();
        return new ResponseEntity<>(usuarios, HttpStatus.OK);
    }

	@PostMapping("/agregar")
	public UsuarioModelo guardarUsuario(@RequestBody UsuarioModelo usuario) {
		return this.usuarioServicio.guardarUsuario(usuario);
	}
}

package com.proyecto.encuentranos.modelos;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotEmpty;

@Entity
@Table(name="tipo_usuario")
public class TipoUsuarioModelo {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column( name = "id_tipo")
	private Integer id;
	
	@NotEmpty
	@Column(name = "nombre")
	private String nombre;
	
	@Column(name = "permiso")
	private String permiso;

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getPermiso() {
		return permiso;
	}

	public void setPermiso(String permiso) {
		this.permiso = permiso;
	}
	
	
	
}

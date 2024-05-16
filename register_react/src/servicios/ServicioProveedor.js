import axios from 'axios';

class ServicioProveedorService {
    baseUrl = 'http://localhost:4000/servicio-proveedor';

    getAll(){
        return axios.get(this.baseUrl + '/listar',{withCredentials: true})
        .then(res => res.data); 
    }

    postAddServicioProveedor(servicio){
        return axios.post(this.baseUrl + '/agregar',servicio,{withCredentials: true})
        .then(res => res.data);
    }

    getBuscarServicioProveedor(idservicio,idproveedor){
        return axios.get(`${this.baseUrl}/buscar/${idservicio}/${idproveedor}`);
    }
}

export default new ServicioProveedorService();
// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
//COMPONENTES
import Header from './componentes/Header/Header';
import HeaderAutenticado from './componentes/Header/HeaderAutenticado';
import Footer from './componentes/Footer/Footer';
import FooterAutenticado from './componentes/Footer/FooterAutenticado';
import InformacionDeUsuario from './componentes/Informacion/InformacionDeUsuario';
//PAGINAS SIN LOGIN
import Index from './paginas/Index';
import IniciarSesion from './paginas/IniciarSesion';
import Registro from './paginas/Registro';
import CrearUsuario from './paginas/CrearUsuario';
import Formulario from './paginas/Formulario';
//PAGINAS CON LOGIN
import AgregarServicio from './paginas/AgregarServicio';
import ServicioMultiple from './paginas/FuncionAgregarServicios'
import Inicio from './paginas/Inicio';
import Servicios from './paginas/Servicios';
import Precios from './paginas/Precios';
import Configuracion from './componentes/Diseños/Configuracion_perfil';

function App() {

  //SE DECLARA COMO NO INICIO SESION
  const [isLoggedIn, setIsLoggedIn] = useState(false); 

  return (
    <div className="">
      <Router>
        <InformacionDeUsuario>
          {(info) => {
            //VERIFICAR SI HAY INFORMACION DEL USUARIO
            setIsLoggedIn(info !== '');
          }}
        </InformacionDeUsuario>
        
        <div className=''>
        {isLoggedIn ? <HeaderAutenticado /> : <Header />}
          <Routes>
            <Route exact path='/' element={<Index />} />
            <Route exact path='/iniciarSesion' element={<IniciarSesion />} />
            <Route exact path='/crearUsuario' element={<CrearUsuario />} />
            <Route exact path='/registro' element={<Registro />} />
            <Route exact path='/formulario' element={<Formulario />} />
            {/*LOGUEADO*/}
            <Route exact path='/agregar-servicio' element={<AgregarServicio />} />
            <Route exact path='/inicio' element={<Inicio />} />
            <Route exact path='/servicios' element={<Servicios />} />
            <Route exact path='/precios' element={<Precios/>} />
            <Route path='/configuracion?*' element={<Configuracion />} />
            <Route exact path='/servicioMultipe' element={<ServicioMultiple />} />
          </Routes>
        </div>
        {isLoggedIn ? <FooterAutenticado /> : <Footer />}
      </Router>
    </div>
  );
}

export default App;


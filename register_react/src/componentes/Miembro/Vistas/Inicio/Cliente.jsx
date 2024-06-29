import React from 'react'
//IMAGENES
import imagen1 from '../../../../imagenes/Inicio con login/imagen1.png'
import imagen2 from '../../../../imagenes/Inicio con login//imagen2.png'
//WAVES
import waves from '../../../../imagenes/waves/waves.png'
// FONT AWESOME
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileSignature, faListCheck, faFeatherPointed} from '@fortawesome/free-solid-svg-icons'
//COMPONENTES
import InformacionCliente from '../../Datos/InformacionCliente'

function InicioCliente() {
  return (
   <InformacionCliente>
        {(info) => {
            if (!info || !info.nombre) {
            return null;
        }

        const primerNombre = info.nombre.split(' ')[0];

        const primerApellido = info.apellidoPaterno;

        const saludo = info.sexo === 'M' ? 'Bienvenido' : 'Bienvenida';

        return (
            <div className='bg-[#F5F5F5]'>
            <div className='px-6 xl:px-36 flex flex-wrap items-center justify-between mx-auto py-16'>
                <div className='w-1/2 p-20'>
                <h1 className='text-[#BC7547] xl:text-3xl font-bold xl:mb-4'>¡{saludo}, {primerNombre} {primerApellido}!</h1>
                <p className='xl:text-base xl:mb-4 pb-4'>Explora y contrata servicios domésticos según tu ubicación. ¡Haz contratos directamente desde la aplicación!</p>
                <a href="/precios" className='text-white bg-[#E8A477] p-3 rounded-lg xl:text-base hover:bg-[#BC7547] focus:ring-4 focus:ring-[#BC7547]'>Buscar servicios</a>
                </div>
                <div className='w-1/2'>
                <img className='w-full p-10' src={imagen1} alt="Imagen"></img>
                </div>
            </div>
            <div className=''>
                <div className='m-auto'>
                <img className="w-full " src={waves} alt="Wave"/>
                </div>
                <div className='bg-[#FFC8AC] m-auto'>
                <h1 className='font-bold text-white xl:text-2xl text-center pt-12 '>NOSOTROS</h1>
                <div className='flex justify-center items-center'>
                    <hr className="w-11/12 my-6 border-1 border-white" />
                </div>
                <div className='w-full py-16 p-4 flex flex-col items-center'>
                    <div className='flex flex-col xl:flex-row items-center px-24'>
                    <div className='w-1/2 p-16'>
                        <p className='text-white mb-6 text-xl'>En nuestra plataforma, creemos que cada hogar merece lo mejor. Nuestra misión es facilitar la vida de nuestros usuarios al proporcionar un acceso fácil y seguro a una variedad diversa de servicios domésticos. Con un equipo dedicado y una pasión por la excelencia, estamos aquí para hacer que tu experiencia sea lo más placentera posible.</p>
                    </div>
                    <img className='w-1/2 p-16' src={imagen2} alt="Imagen 2" />
                    </div>
                </div>
                </div>
            </div>
            <div>
                <div className='bg-white m-auto pb-12'>
                <h1 className='font-bold text-[#E8A477] xl:text-2xl text-center pt-12 xl:pt-24 '>FUNCIONALIDADES</h1>
                <div className='flex justify-center items-center'>
                    <hr className="w-11/12 my-6 border-1 border-[#E8A477] " />
                </div>
                <div className='w-full py-16 px-32 grid grid-cols-1 lg:grid-cols-3 gap-4 items-center justify-start'>
                    <div className='bg-white border-light border border-1 p-10 rounded-lg mx-4 h-full shadow-xl'>
                    <FontAwesomeIcon icon={faFileSignature} className='text-[#E8A477] text-4xl py-4' />
                    <h6 className='font-bold mb-1'>Compara precios</h6>
                    <p className='text-[#959595]'>Encuentra y contrata proveedores según el precio.</p>
                    </div>
                    <div className='bg-white border-light border border-1 p-10 rounded-lg mx-4 h-full shadow-xl'>
                    <FontAwesomeIcon icon={faListCheck} className='text-[#E8A477] text-4xl py-4' />
                    <h6 className='font-bold  mb-1'>Gestiona contratos</h6>
                    <p className='text-[#959595]'>Gestiona tus contratos y contacta a proveedores.</p>
                    </div>
                    <div className='bg-white border-light border border-1 p-10 rounded-lg mx-4 h-full shadow-xl'>
                    <FontAwesomeIcon icon={faFeatherPointed} className='text-[#E8A477] text-4xl py-4' />
                    <h6 className='font-bold  mb-1'>Escribe reseñas</h6>
                    <p className='text-[#959595]'>Escribe reseñas después de finalizar el servicio.</p>
                    </div>
                </div>
                </div>
            </div>
            <div>
                <div className='bg-[#F3C7AC] m-auto py-12 xl:py-24'>
                <h1 className='font-bold text-white xl:text-2xl text-center '>¿CÓMO COMENZAR?</h1>
                <div className='flex justify-center items-center'>
                    <hr className="w-11/12 my-6 border-1 border-white" />
                </div>
                <div className='w-full py-16 px-32 grid grid-cols-1 lg:grid-cols-3 gap-4 items-center justify-start'>
                </div>
                </div>
            </div>
            </div>
        )}}
   </InformacionCliente>
  )
}

export default InicioCliente

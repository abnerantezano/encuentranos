import React from 'react'
//IMAGENES 
import index1 from '../imagenes/index/index1.png'
import index2 from '../imagenes/index/index2.png'
import index3 from '../imagenes/index/index3.png'
// FONT AWESOME
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRankingStar, faUserShield, faUsersLine, faHandshake} from '@fortawesome/free-solid-svg-icons'

//WAVES
import waves1 from '../imagenes/waves/waves1.png'

export default function Index() {
  return (
    <div>
      <div className='container p-4 mx-auto flex items-center'>
        <div className='w-1/2 p-20'>
          <h1 className='text-[#BC7547] xl:text-3xl font-bold xl:mb-4'>¡Descubre servicios domésticos según tu ubicación!</h1>
          <p className='xl:text-xl xl:mb-4 pb-4'>Encuentra los mejores proveedores para tus necesidades domésticas.</p>
          <a href="/registro" className='text-white bg-[#E8A477] p-3 rounded-lg xl:text-base hover:bg-[#BC7547] focus:ring-4 focus:ring-[#BC7547]'>Registrarse</a>
        </div>
        <div className='w-1/2'>
          <img className='w-full p-10' src={index1}></img>
        </div>
      </div>
      <div>
        <div className=''>
          <img className="w-full " src={waves1}/>
        </div>
        <div className='bg-[#FFE4D3]'>
          <h1 className='font-bold text-[#E8A477] xl:text-2xl text-center'>PROCESO DEL CONTRATO</h1>
          <div className='flex justify-center items-center'>
            <hr className="w-11/12 my-6 border-1 border-[#E8A477]" />
          </div>
          <div>
            <div className='w-full flex items-center justify-center'>
              <ul className='w-5/6 grid xl:grid-cols-4 md:grid-cols-1 gap-4 py-16 p-4 ulClass'>
                <li className='list-none max-w-full liClass'>
                  <div className='flex justify-center progress one'>
                    <p className='bg-white text-center rounded-full text-[#E8A477] font-bold flex items-center justify-center h-12 w-12'>1</p>
                  </div>
                  <div className='bg-white rounded-lg p-4 text-center my-8 mx-2 shadow-xl flex flex-col h-full'>
                    <p className='p-4 font-bold text-[#B4663F]'>Buscar servicios</p>
                    <p className='p-4'>Explora una amplia gama de servicios domésticos, desde limpieza hasta plomería, ajustando tus preferencias por precio y calificación.</p>
                  </div>
                </li>
                <li className='list-none max-w-full liClass'>
                  <div className='flex justify-center progress two'>
                    <p className='bg-white text-center rounded-full text-[#E8A477] font-bold flex items-center justify-center h-12 w-12'>2</p>
                  </div>
                  <div className='bg-white rounded-lg p-4 text-center my-8 mx-2 shadow-xl flex flex-col h-full'>
                    <p className='p-4 font-bold text-[#B4663F]'>Comunicación directa</p>
                    <p className='p-4'>Comunícate fácilmente con los proveedores para discutir los detalles y llegar a un acuerdo mediante un chat.</p>
                  </div>
                </li>
                <li className='list-none max-w-full liClass'>
                  <div className='flex justify-center progress three'>
                    <p className='bg-white text-center rounded-full text-[#E8A477] font-bold flex items-center justify-center h-12 w-12'>3</p>
                  </div>
                  <div className='bg-white rounded-lg p-4 text-center my-8 mx-2 shadow-xl flex flex-col h-full'>
                    <p className='p-4 font-bold text-[#B4663F]'>Generación de contrato</p>
                    <p className='p-4'>Genera contratos de forma segura y rápida directamente a través de nuestra plataforma.</p>
                  </div>
                </li>
                <li className='list-none max-w-full liClass'>
                  <div className='flex justify-center progress four'>
                    <p className='bg-white text-center rounded-full text-[#E8A477] font-bold flex items-center justify-center h-12 w-12'>4</p>
                  </div>
                  <div className='bg-white rounded-lg p-4 text-center my-8 mx-2 shadow-xl flex flex-col h-full'>
                    <p className='p-4 font-bold text-[#B4663F]'>Calificación y reseñas</p>
                    <p className='p-4'>Evalúa a los proveedores después de completar el servicio para ayudar a otros usuarios a tomar decisiones informadas.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className='bg-white '>
          <h1 className='font-bold text-[#E8A477] xl:text-2xl text-center xl:pt-24 pt-12'>BENEFICIOS</h1>
          <div className='flex justify-center items-center'>
            <hr className="w-11/12 my-6 border-1 border-[#E8A477]" />
          </div>
          <div className='w-full py-16 p-4 flex flex-col items-center'>
            <div className='flex items-center'>
              <img className='w-1/2 p-16' src={index2}/>
              <div className='w-1/2 p-16'>
                <p className='text-[#635F5F] font-bold mb-6 text-xl'>CLIENTE</p>
                <ul className='text-[#9F9595] text-lg list-disc'>
                  <li>Variedad de Servicios</li>
                  <li>Amplia selección de proveedores</li>
                  <li>Fácil contratación</li>
                  <li>Calidad de servicio</li>
                </ul>
              </div>
            </div>
            <div className=' flex items-center'>
              <div className='w-1/2 p-16'>
                <p className='text-[#635F5F] font-bold mb-6 text-xl'>PROVEEDOR</p>
                <ul className='text-[#9F9595] text-lg list-disc'> 
                  <li>Variedad de Servicios</li>
                  <li>Amplia selección de proveedores</li>
                  <li>Fácil contratación</li>
                  <li>Calidad de servicio</li>
                </ul>
              </div>
              <img className='w-1/2 p-16' src={index3}/>
            </div>
          </div>
        </div>
        <div className='bg-[#FFF4ED]'>
          <h1 className='font-bold text-[#E8A477] xl:text-2xl text-center xl:pt-24 pt-12'>¿POR QUÉ ELEGIRNOS?</h1>
          <div className='flex justify-center items-center'>
            <hr className="w-11/12 my-6 border-1 border-[#E8A477]" />
          </div>
          <div className='w-full py-16 p-4 flex flex-col items-center'>
            <div className='grid lg:grid-cols-4 grid-cols-1 gap-4 px-16 pb-8'>
              <div className='flex flex-col items-center text-center'>
                <FontAwesomeIcon icon={faRankingStar} className='text-[#BC7547] text-4xl py-2' />
                <h4 className='text-[#BC7547] text-base font-bold py-2'>Variedad y calidad</h4>
                <p className='text-sm text-[#787171] text-center'>Accede a una extensa lista de proveedores.</p>
              </div>
              <div className='flex flex-col items-center'>
                <FontAwesomeIcon icon={faUserShield} className='text-[#BC7547] text-4xl py-2' />
                <h4 className='text-[#BC7547] text-base font-bold py-2'>Seguridad</h4>
                <p className='text-sm text-[#787171] text-center'>Contratos seguros y protección de datos.</p>
              </div>
              <div className='flex flex-col items-center'>
                <FontAwesomeIcon icon={faUsersLine} className='text-[#BC7547] text-4xl py-2' />
                <h4 className='text-[#BC7547] text-base font-bold py-2'>Comodidad</h4>
                <p className='text-sm text-[#787171] text-center'>Comunicación directa y fácil manejo desde una única plataforma.</p>
              </div>
              <div className='flex flex-col items-center'>
                <FontAwesomeIcon icon={faHandshake} className='text-[#BC7547] text-4xl py-2' />
                <h4 className='text-[#BC7547] text-base font-bold py-2'>Confianza</h4>
                <p className='text-sm text-[#787171] text-center'>Reseñas y calificaciones de otros usuarios.</p>
              </div>
            </div>
          </div>
        </div>  
      </div>
    </div>
  )
}



import Image from 'next/image'
import React from 'react'
import { IoIosArrowRoundForward } from 'react-icons/io'

export default function ReglamentoInterno() {
  return (
    <main className='pb-10'>
        <section>
          <Image src="/villamar/banner_1.jpg" alt="Imagen principal Villamar" width={1000} height={300} className="img-banner"/>
        </section>
        <section>
            <h1 className="text-3xl text-white text-center mt-5 font-light">Reglamento interno de convivencia</h1>

               <div className="flex justify-center mt-10 px-5">
                    <button className=" pl-5 pr-3 text-white text-xl font-light border w-full py-3 rounded-full shadow-xl shadow-blue-950 flex justify-between items-center">Visitas<IoIosArrowRoundForward className="text-white text-4xl pt-1 pb-1 border rounded-full"/></button>
                </div>

                <div className="flex justify-center mt-10 px-5">
                    <button className=" pl-5 pr-3 text-white text-xl font-light border w-full py-3 rounded-full shadow-xl shadow-blue-950 flex justify-between items-center">Piscina<IoIosArrowRoundForward className="text-white text-4xl pt-1 pb-1 border rounded-full"/></button>
                </div>

                <div className="flex justify-center mt-10 px-5">
                    <button className=" pl-5 pr-3 text-white text-xl font-light border w-full py-3 rounded-full shadow-xl shadow-blue-950 flex justify-between items-center">Arrendatarios de verano<IoIosArrowRoundForward className="text-white text-4xl pt-1 pb-1 border rounded-full"/></button>
                </div>

                <div className="flex justify-center mt-10 px-5">
                    <button className=" pl-5 pr-3 text-white text-xl font-light border w-full py-3 rounded-full shadow-xl shadow-blue-950 flex justify-between items-center">Convivencia<IoIosArrowRoundForward className="text-white text-4xl pt-1 pb-1 border rounded-full"/></button>
                </div>

                <div className="flex justify-center mt-10 px-5">
                    <button className=" pl-5 pr-3 text-white text-xl font-light border w-full py-3 rounded-full shadow-xl shadow-blue-950 flex justify-between items-center">Estacionamientos<IoIosArrowRoundForward className="text-white text-4xl pt-1 pb-1 border rounded-full"/></button>
                </div>

                <div className="flex justify-center mt-10 px-5">
                    <button className=" pl-5 pr-3 text-white text-xl font-light border w-full py-3 rounded-full shadow-xl shadow-blue-950 flex justify-between items-center">Ventanas y barandas<IoIosArrowRoundForward className="text-white text-4xl pt-1 pb-1 border rounded-full"/></button>
                </div>

                <div className="flex justify-center mt-10 px-5">
                    <button className=" pl-5 pr-3 text-white text-xl font-light border w-full py-3 rounded-full shadow-xl shadow-blue-950 flex justify-between items-center">Quincho<IoIosArrowRoundForward className="text-white text-4xl pt-1 pb-1 border rounded-full"/></button>
                </div>

                <div className="flex justify-center mt-10 px-5">
                    <button className=" pl-5 pr-3 text-white text-xl font-light border w-full py-3 rounded-full shadow-xl shadow-blue-950 flex justify-between items-center">Lavandería<IoIosArrowRoundForward className="text-white text-4xl pt-1 pb-1 border rounded-full"/></button>
                </div>

                <div className="flex justify-center mt-10 px-5">
                    <button className=" pl-5 pr-3 text-white text-xl font-light border w-full py-3 rounded-full shadow-xl shadow-blue-950 flex justify-between items-center">Estacionamiento para bicicletas<IoIosArrowRoundForward className="text-white text-4xl pt-1 pb-1 border rounded-full"/></button>
                </div>

                <div className="flex justify-center mt-10 px-5">
                    <button className=" pl-5 pr-3 text-white text-xl font-light border w-full py-3 rounded-full shadow-xl shadow-blue-950 flex justify-between items-center">Mascotas en el edificio<IoIosArrowRoundForward className="text-white text-4xl pt-1 pb-1 border rounded-full"/></button>
                </div>

                <div className="flex justify-center mt-10 px-5">
                    <button className=" pl-5 pr-3 text-white text-xl font-light border w-full py-3 rounded-full shadow-xl shadow-blue-950 flex justify-between items-center">Nómina de conserjes<IoIosArrowRoundForward className="text-white text-4xl pt-1 pb-1 border rounded-full"/></button>
                </div>
        </section>
    </main>
  )
}

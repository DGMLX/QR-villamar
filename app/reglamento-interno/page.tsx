

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { IoIosArrowRoundForward } from 'react-icons/io'
import { MdArrowBack } from "react-icons/md";

export default function ReglamentoInterno() {
  return (
    <main className='pb-5'>

         <div className="flex justify-between py-2 border-t border-blue-500 px-5 items-center">
                    <Link href="/" className='text-white border rounded-full p-1'><MdArrowBack className='text-white text-2xl'/></Link>
                    <h3 className="text-white text-md font-light ">Comunidad Edificio Villamar 2025</h3>
                </div>
                <Image src="/villamar/banner_1.jpg" alt="Imagen principal Villamar" width={1000} height={300} className="img-banner"/>

        <section>
            <h1 className="text-3xl text-white text-center mt-5 font-light">Reglamento interno de convivencia</h1>

               <div className="flex justify-center mt-10 px-5">
                    <Link href="/reglamento-interno/visitas" className=" pl-5 pr-3 text-white text-xl font-light border w-full py-3 rounded-full shadow-xl shadow-blue-950 flex justify-between items-center">Visitas<IoIosArrowRoundForward className="text-white text-4xl pt-1 pb-1 border rounded-full"/></Link>
                </div>

                <div className="flex justify-center mt-10 px-5">
                    <Link href="/reglamento-interno/piscina" className=" pl-5 pr-3 text-white text-xl font-light border w-full py-3 rounded-full shadow-xl shadow-blue-950 flex justify-between items-center">Piscina<IoIosArrowRoundForward className="text-white text-4xl pt-1 pb-1 border rounded-full"/></Link>
                </div>

                <div className="flex justify-center mt-10 px-5">
                    <Link href="/reglamento-interno/arrendatarios-de-verano" className=" pl-5 pr-3 text-white text-xl font-light border w-full py-3 rounded-full shadow-xl shadow-blue-950 flex justify-between items-center">Arrendatarios de verano<IoIosArrowRoundForward className="text-white text-4xl pt-1 pb-1 border rounded-full"/></Link>
                </div>

                <div className="flex justify-center mt-10 px-5">
                    <Link href="reglamento-interno/convivencia" className=" pl-5 pr-3 text-white text-xl font-light border w-full py-3 rounded-full shadow-xl shadow-blue-950 flex justify-between items-center">Convivencia<IoIosArrowRoundForward className="text-white text-4xl pt-1 pb-1 border rounded-full"/></Link>
                </div>

                <div className="flex justify-center mt-10 px-5">
                    <Link href="/reglamento-interno/estacionamientos" className=" pl-5 pr-3 text-white text-xl font-light border w-full py-3 rounded-full shadow-xl shadow-blue-950 flex justify-between items-center">Estacionamientos<IoIosArrowRoundForward className="text-white text-4xl pt-1 pb-1 border rounded-full"/></Link>
                </div>

                <div className="flex justify-center mt-10 px-5">
                    <Link href="/reglamento-interno/ventanas-y-barandas" className=" pl-5 pr-3 text-white text-xl font-light border w-full py-3 rounded-full shadow-xl shadow-blue-950 flex justify-between items-center">Ventanas y barandas<IoIosArrowRoundForward className="text-white text-4xl pt-1 pb-1 border rounded-full"/></Link>
                </div>

                <div className="flex justify-center mt-10 px-5">
                    <Link href="/reglamento-interno/quincho" className=" pl-5 pr-3 text-white text-xl font-light border w-full py-3 rounded-full shadow-xl shadow-blue-950 flex justify-between items-center">Quincho<IoIosArrowRoundForward className="text-white text-4xl pt-1 pb-1 border rounded-full"/></Link>
                </div>

                <div className="flex justify-center mt-10 px-5">
                    <Link href="/reglamento-interno/lavanderia" className=" pl-5 pr-3 text-white text-xl font-light border w-full py-3 rounded-full shadow-xl shadow-blue-950 flex justify-between items-center">Lavandería<IoIosArrowRoundForward className="text-white text-4xl pt-1 pb-1 border rounded-full"/></Link>
                </div>

                <div className="flex justify-center mt-10 px-5">
                    <Link href="/reglamento-interno/estacionamiento-para-bicicletas" className=" pl-5 pr-3 text-white text-xl font-light border w-full py-3 rounded-full shadow-xl shadow-blue-950 flex justify-between items-center">Estacionamiento para bicicletas<IoIosArrowRoundForward className="text-white text-4xl pt-1 pb-1 border rounded-full"/></Link>
                </div>

                <div className="flex justify-center mt-10 px-5">
                    <Link href="/reglamento-interno/mascotas" className=" pl-5 pr-3 text-white text-xl font-light border w-full py-3 rounded-full shadow-xl shadow-blue-950 flex justify-between items-center">Mascotas en el edificio<IoIosArrowRoundForward className="text-white text-4xl pt-1 pb-1 border rounded-full"/></Link>
                </div>

                <div className="flex justify-center mt-10 px-5">
                    <Link href="/reglamento-interno/nomina-de-conserjes" className=" pl-5 pr-3 text-white text-xl font-light border w-full py-3 rounded-full shadow-xl shadow-blue-950 flex justify-between items-center">Nómina de conserjes<IoIosArrowRoundForward className="text-white text-4xl pt-1 pb-1 border rounded-full"/></Link>
                </div>
        </section>

        <footer className="flex justify-center py-2 border-t border-blue-500 mt-10">
            <h3 className="text-white text-md font-light">Comunidad Edificio Villamar 2025</h3>
        </footer>
    </main>
  )
}

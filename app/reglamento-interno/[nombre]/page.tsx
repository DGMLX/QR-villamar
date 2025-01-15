'use client'

import { useParams } from "next/navigation"
import dataReglamentoInterno from "../../../data/ReglamentoInterno";
import Link from "next/link";
import { MdArrowBack } from "react-icons/md";
import Image from "next/image";

interface Data {
        nombre:string,
        descripcion:string,
        params:string
}


const NombreCategoria = ()=>{

    const params = useParams()
    const nombre = params.nombre as string;

    const data:Data[] = dataReglamentoInterno.filter(datos=>datos.params===nombre)

    return(
        <>
        <main className="pb-5">

            <div className="flex justify-between py-2 border-t border-blue-500 px-5 items-center">
                <Link href="/reglamento-interno" className='text-white border rounded-full p-1'><MdArrowBack className='text-white text-2xl'/></Link>
                <h3 className="text-white text-md font-light ">Comunidad Edificio Villamar 2025</h3>
            </div>
                <Image src="/villamar/banner_1.jpg" alt="Imagen principal Villamar" width={1000} height={300} className="img-banner"/>
            <h1 className="text-white text-4xl text-center font-light mt-5">{data[0].nombre}</h1>
            <p className="text-white mt-10 text-xl px-5 text-center font-light">{data[0].descripcion}</p>
        </main>

        <footer className="flex justify-center py-2 border-t border-blue-500 mt-10">
        <h3 className="text-white text-md font-light">Comunidad Edificio Villamar 2025</h3>
        </footer>
        </>
    )
}

export default NombreCategoria
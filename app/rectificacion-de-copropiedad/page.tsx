


import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { MdArrowBack } from 'react-icons/md'

export default function RectificacionDeCopropiedad() {
  return (
    <main className='pb-10'>
    <div className="flex justify-between py-2 border-t border-blue-500 px-5 items-center">
              <Link href="/" className='text-white border rounded-full p-1'><MdArrowBack className='text-white text-2xl'/></Link>
              <h3 className="text-white text-md font-light ">Comunidad Edificio Villamar 2025</h3>
          </div>
      <section>
      
        <Image src="/villamar/banner_1.jpg" alt="Imagen principal Villamar" width={1000} height={300} className="img-banner"/>
      </section>

      <section>
          <h1 className="text-3xl text-white text-center mt-5 font-light">Rectificación de copropiedad</h1>
          <div className='mt-10 mx-2'>
            <iframe src="https://drive.google.com/file/d/16Cdh2RDlCOuSOY_G-a7IZq4WZo8FJag0/preview" style={{width: '100%', height: '100vh', border: 'none'}}></iframe>

          </div>
      </section>
  </main>
  )
}

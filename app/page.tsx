import Image from "next/image";
import "./globals.css";
import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";

export default function Home() {
  return (
    <>
      <main className="pb-5">
       <div className="flex justify-center py-2 border-t border-blue-500">
                  <h3 className="text-white text-md font-light">Comunidad Edificio Villamar 2025</h3>
              </div>
              <Image src="/villamar/banner_1.jpg" alt="Imagen principal Villamar" width={1000} height={300} className="img-banner"/>

        <section>
          <h1 className="text-3xl text-white text-center mt-5 font-light">Comunidad Villamar</h1>
          
          <div className="flex justify-center mt-10 px-5">
            <Link href="/reglamento-interno" className=" pl-5 pr-3 text-white text-center text-xl font-light border w-full py-3 rounded-full shadow-xl shadow-blue-950 flex justify-between items-center">Reglamento interno <IoIosArrowRoundForward className="text-white text-4xl pt-1 pb-1 border rounded-full"/></Link>
          </div>

          <div className="flex justify-center mt-10 px-5">
            <Link href="/reglamento-de-copropiedad" className=" pl-5 pr-3 text-white text-xl font-light border w-full py-3 rounded-full shadow-xl shadow-blue-950 flex justify-between items-center">Reglamento de Copropiedad<IoIosArrowRoundForward className="text-white text-4xl pt-1 pb-1 border rounded-full"/></Link>
          </div>

          <div className="flex justify-center mt-10 px-5">
            <Link href="/rectificacion-de-copropiedad" className="pl-5 pr-3 text-white text-xl font-light border w-full py-3 rounded-full shadow-xl shadow-blue-950 flex justify-between items-center">Rectificación de Copropiedad<IoIosArrowRoundForward className="text-white text-4xl pt-1 pb-1 border rounded-full"/></Link>
          </div>

          <div className="flex justify-center mt-10 px-5">
            <Link href="reglamento-de-lavanderia" className="pl-5 pr-3 text-white text-xl font-light border w-full py-3 rounded-full shadow-xl shadow-blue-950 flex justify-between items-center">Reglamento de Lavandería<IoIosArrowRoundForward className="text-white text-4xl pt-1 pb-1 border rounded-full"/></Link>
          </div>

          <div className="flex justify-center mt-10 px-5">
            <Link href="cuadro-de-superficie" className="pl-5 pr-3 text-white text-xl font-light border w-full py-3 rounded-full shadow-xl shadow-blue-950 flex justify-between items-center">Cuadro de superficie<IoIosArrowRoundForward className="text-white text-4xl pt-1 pb-1 border rounded-full"/></Link>
          </div>
        </section>

        <footer className="flex justify-center py-2 border-t border-blue-500 mt-10">
            <h3 className="text-white text-md font-light">Comunidad Edificio Villamar 2025</h3>
        </footer>
      </main>
    </>
  );
}

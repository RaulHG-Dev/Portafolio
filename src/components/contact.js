import Image from "next/image"
import Link from "next/link"

export const Contact = () => {
  return (
    <>
      <div className="bg-special-black text-white z-50 rounded-3xl pt-24 px-6 fixed">
        <Image src="/user_icon.png" width={140} height={140} alt="Imagen" className="absolute left-[50%] transform -translate-x-[50%] drop-shadow-xl mx-auto rounded-[20px] -mt-[140px] bg-blue-300 p-3"/>
        <div className="flex flex-col py-8 gap-5 items-center">
          <p className="font-[500] text-3xl text-center font-lexend">Raúl Hidalgo Gaspar</p>
          <div className="bg-special-gray px-5 py-1.5 rounded-md font-semibold font-lexend">
            Desarrollador Fullstack
          </div>
          <div className="flex flex-row gap-4">
            <Link href="#" className="bg-special-gray px-3 py-2 rounded-md hover:bg-gradient-to-r hover:from-[#001937] hover:to-[#2563EB] group">
              <i className="fa-brands fa-linkedin text-[#0072B1] group-hover:text-white transition-all duration-300 ease-in-out fa-xl"></i>
            </Link>
            <Link href="#" className="bg-special-gray px-3 py-2 rounded-md hover:bg-gradient-to-r hover:from-[#001937] hover:to-[#2563EB] group">
              <i className="fa-brands fa-github text-[#A3A3A3] group-hover:text-white transition-all duration-300 ease-in-out fa-xl"></i>
            </Link>
          </div>
          <div className="flex flex-col bg-special-gray rounded-md p-4 w-full">
            {/* <div className="flex gap-3 border-b border-[#3D3A3A] last-of-type:border-0 py-2 w-full">
              <span className="bg-black px-4 py-3 rounded-md flex items-center justify-center">
                <i className="fa-solid fa-mobile-screen-button fa-lg"></i>
              </span>
              <span className="flex flex-col">
                <p className="text-sm">Teléfono</p>
                <p className="font-bold">777 123 56 25</p>
              </span>
            </div> */}
            <div className="flex gap-3 border-b border-[#3D3A3A] last-of-type:border-0 py-2 w-full">
              <span className="bg-black px-4 py-3 rounded-md flex items-center justify-center">
                <i className="fa-solid fa-location-dot fa-lg"></i>
              </span>
              <span className="flex flex-col">
                <p className="text-sm font-lexend">Lugar</p>
                <p className="font-bold font-lexend">Cuernavaca, Mor.</p>
              </span>
            </div>
            <div className="flex gap-3 border-b border-[#3D3A3A] last-of-type:border-0 py-2 w-full">
              <span className="bg-black px-4 py-3 rounded-md flex items-center justify-center">
                <i className="fa-solid fa-envelope-open-text fa-lg"></i>
              </span>
              <span className="flex flex-col">
                <p className="text-sm font-lexend">Correo</p>
                <p className="font-bold font-lexend">r.hidalgo.dev@gmail.com</p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

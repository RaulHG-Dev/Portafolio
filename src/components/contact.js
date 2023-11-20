import Image from "next/image"

export const Contact = () => {
  return (
    <>
      <div className="bg-special-black text-white z-50 relative rounded-3xl pt-24 px-6">
        <Image src="/user_icon.png" width={140} height={140} alt="Imagen" className="absolute left-[50%] transform -translate-x-[50%] drop-shadow-xl mx-auto rounded-[20px] -mt-[140px] bg-blue-300 p-3"/>
        <div className="flex flex-col py-8 gap-5 items-center">
          <p className="font-bold text-3xl text-center">Raul Hidalgo Gaspar</p>
          <div className="bg-special-gray px-5 py-1.5 rounded-md font-semibold">
            Fullstack Developer
          </div>
          <div className="flex flex-row gap-4">
            <span className="bg-special-gray px-3 py-1 rounded-md">
              <i className="fa-brands fa-linkedin text-[#0072B1]"></i>
            </span>
            <span className="bg-special-gray px-3 py-1 rounded-md">
              <i className="fa-brands fa-github"></i>
            </span>
          </div>
          <div className="flex flex-col bg-special-gray rounded-md p-4 w-full">
            <div className="flex gap-3 border-b border-[#3D3A3A] last-of-type:border-0 py-2 w-full">
              <span className="bg-black px-4 py-3 rounded-md flex items-center justify-center">
                <i class="fa-solid fa-mobile-screen-button fa-lg"></i>
              </span>
              <span className="flex flex-col">
                <p className="text-sm">Teléfono</p>
                <p className="font-bold">777 123 56 25</p>
              </span>
            </div>
            <div className="flex gap-3 border-b border-[#3D3A3A] last-of-type:border-0 py-2 w-full">
              <span className="bg-black px-4 py-3 rounded-md flex items-center justify-center">
                <i class="fa-solid fa-location-dot fa-lg"></i>
              </span>
              <span className="flex flex-col">
                <p className="text-sm">Lugar</p>
                <p className="font-bold">Cuernavaca, Mor.</p>
              </span>
            </div>
            <div className="flex gap-3 border-b border-[#3D3A3A] last-of-type:border-0 py-2 w-full">
              <span className="bg-black px-4 py-3 rounded-md flex items-center justify-center">
                <i class="fa-solid fa-envelope-open-text fa-lg"></i>
              </span>
              <span className="flex flex-col">
                <p className="text-sm">Correo</p>
                <p className="font-bold">r.hidalgo.dev@gmail.com</p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

import React from 'react'
import Image from 'next/image'

export const ItemProject = ({gradient, project, urlStrapi}) => {
  return (
    <div className={`relative bg-gradient-to-r rounded px-3 py-2 group flex-1 ${gradient}`}>
        <div className="absolute bg-special-black top-[0.15rem] left-2 w-[calc(100%-0.65rem)] h-[calc(100%-0.3rem)] rounded -z-0 transition-all"></div>
        <div className="flex flex-row gap-4 !z-[999] relative pl-2 items-center">
          <section className='basis-2/12'>
            <Image
              src={`http://127.0.0.1:1337${project.attributes.imagen.data[0].attributes.formats.large.url}`} 
              alt={`Imagen Proyecto ${project.attributes.nombre_proyecto}`}
              width={600}
              height={400}
            />
          </section>
          <section className='basis-10/12 flex flex-col gap-2 font-lexend'>
            <span className="font-bold text-white text-base">
              {project.attributes.nombre_proyecto}
            </span>
            <span className="text-[#A3A3A3] text-base font-bold">
              Descripción: <span className='text-white !text-base font-normal'>{project.attributes.descripcion_proyecto}</span>
            </span>
            <span className="text-[#A3A3A3] text-base font-bold">
              Tecnologías utilizadas: <span className='text-white !text-base font-normal'>{project.attributes.lenguajes}</span>
            </span>
          </section>
        </div>
    </div>
  )
}

// export async function getStaticProps() {
//   const urlStrapi = `${process.env.URL_STRAPI}`;
//   alert(urlStrapi)
//   return {
//     props: {
//       urlStrapi
//     }
//   }
// }

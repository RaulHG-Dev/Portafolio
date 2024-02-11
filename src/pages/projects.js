import { Layout } from '@/components/layout'
import { ItemProject } from '@/components/item-project'
import Title from '@/components/title'
import React from 'react'

export default function Projects({listProjects}) {
  return (
    <Layout
        title="Proyectos"
    >
      <div className="flex flex-col gap-4">
        <Title>Proyectos</Title>
        <h2 className="flex items-center gap-2 font-lexend text-xl">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8 text-[#1EC198]">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
          </svg>
          Algunos Proyectos
        </h2>
        <div className="flex flex-col gap-4">
        {
          listProjects?.map(project => (
            <ItemProject
              gradient="from-[#079AB8] via-[#07BF95] to-[#33C487]"
              key={project.id}
              project={project}
            />
          ))
        }
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const urlProjects = `${process.env.API_URL}/proyectos?populate=imagen`;
  const [resProjects] = await Promise.all([
    fetch(urlProjects)
  ]);

  const [{data: listProjects}] = await Promise.all([
    resProjects.json()
  ])

  return {
    props: {
      listProjects
    }
  }
}

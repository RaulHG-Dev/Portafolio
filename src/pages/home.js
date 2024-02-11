import Title from "@/components/title";
import { Layout } from "../components/layout";

export default function Home({contentAboutMe}) {
  return (
    <Layout
      title="Acerca de mi"
    >
      <section className="flex flex-col gap-4 font-lexend">
        <Title>Acerca de mi</Title>
        <div dangerouslySetInnerHTML={{ __html: contentAboutMe[0]?.attributes.contenido }} className="text-xl"></div>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const urlContentAboutMe = `${process.env.API_URL}/texto-contenidos?fields[0]=contenido&fields[1]=seccion&filters[seccion][$eq]=ABOUT_ME`;

  const [resAboutMe] = await Promise.all([
    fetch(urlContentAboutMe)
  ]);

  const [{data: contentAboutMe}] = await Promise.all([
    resAboutMe.json()
  ])

  return {
    props: {
      contentAboutMe
    }
  }
}
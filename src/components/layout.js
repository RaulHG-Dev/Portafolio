import Head from "next/head"
import { Contact } from "./contact"
import Menu from "./menu"

export const Layout = ({children, title=''}) => {
  return (
    <>
        <Head>
            <title>{`Portafolio - ${title}`}</title>
        </Head>
        <main className='relative h-screen w-full'>
            <div className="bg-back-image bg-no-repeat bg-cover top-0 left-0 z-0 w-full h-full fixed"></div>
            <div className='bg-gradient-to-r from-[#0D1124] to-[#41222C] top-0 left-0 w-full h-full opacity-80 fixed'></div>
            <div className='flex !text-white mx-40 py-32 gap-8'>
                <div className='basis-3/12'>
                    {/* <div className="fixed"> */}
                        <Contact/>
                    {/* </div> */}
                </div>
                <div className='basis-9/12 flex flex-col relative gap-8'>
                    <Menu/>
                    <div className="bg-special-black px-8 py-6 rounded-md">
                        {children}
                    </div>
                </div>
            </div>
        </main>
    </>
  )
}

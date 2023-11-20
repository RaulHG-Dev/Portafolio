import Head from "next/head"
import { Contact } from "./contact"
import Menu from "./menu"

export const Layout = ({children, title=''}) => {
  return (
    <>
        <Head>
            <title>{`Portafolio - ${title}`}</title>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        </Head>
        <main className='bg-back-image bg-no-repeat w-screen h-screen bg-cover relative -z-30'>
        <div className='absolute bg-gradient-to-r from-[#0D1124] to-[#41222C] top-0 left-0 w-full h-full opacity-80'></div>
        <div className='flex !text-white mx-40 py-32 gap-3'>
            <div className='basis-1/5'>
                <Contact/>
            </div>
            <div className='basis-4/5 flex flex-col relative gap-4'>
                <Menu/>
                <div className="bg-special-black px-6 py-5 rounded-md">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas nemo at, neque animi sunt porro aspernatur fugiat adipisci sequi. Quisquam unde sunt ipsa deserunt vel quaerat quam nulla soluta animi?
                    {children}
                </div>
            </div>
        </div>
        </main>
    </>
  )
}

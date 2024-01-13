import Link from "next/link"

export default function Menu() {
  return (
    <div className="flex w-full items-center justify-center relative">
        <div className="flex gap-6 bg-special-black relative px-6 py-5 w-full rounded-md mx-80">
            <Link href="/home" className="basis-1/3 bg-special-gray px-5 py-2 rounded-md flex flex-col gap-1 justify-center items-center hover:bg-gradient-to-r hover:from-[#001937] hover:to-[#2563EB] transition-all duration-300 ease-in-out font-lexend group">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-[#A3A3A3] group-hover:text-white transition-all duration-300 ease-in-out">
                    <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                    <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
                </svg>
                <p className="text-sm text-[#A3A3A3] group-hover:text-white transition-all duration-300 ease-in-out">Inicio</p>
            </Link>
            <Link href="/resume" className="basis-1/3 bg-special-gray px-5 py-2 rounded-md flex flex-col gap-1 justify-center items-center hover:bg-gradient-to-r hover:from-[#001937] hover:to-[#2563EB] transition-all duration-300 ease-in-out font-lexend group">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-[#A3A3A3] group-hover:text-white transition-all duration-300 ease-in-out">
                    <path fillRule="evenodd" d="M4.125 3C3.089 3 2.25 3.84 2.25 4.875V18a3 3 0 003 3h15a3 3 0 01-3-3V4.875C17.25 3.839 16.41 3 15.375 3H4.125zM12 9.75a.75.75 0 000 1.5h1.5a.75.75 0 000-1.5H12zm-.75-2.25a.75.75 0 01.75-.75h1.5a.75.75 0 010 1.5H12a.75.75 0 01-.75-.75zM6 12.75a.75.75 0 000 1.5h7.5a.75.75 0 000-1.5H6zm-.75 3.75a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5H6a.75.75 0 01-.75-.75zM6 6.75a.75.75 0 00-.75.75v3c0 .414.336.75.75.75h3a.75.75 0 00.75-.75v-3A.75.75 0 009 6.75H6z" clipRule="evenodd" />
                    <path d="M18.75 6.75h1.875c.621 0 1.125.504 1.125 1.125V18a1.5 1.5 0 01-3 0V6.75z" />
                </svg>
                <p className="text-sm text-[#A3A3A3] group-hover:text-white transition-all duration-300 ease-in-out">Curriculum</p>
            </Link>
            <Link href="/projects" className="basis-1/3 bg-special-gray px-5 py-2 rounded-md flex flex-col gap-1 justify-center items-center hover:bg-gradient-to-r hover:from-[#001937] hover:to-[#2563EB] transition-all duration-300 ease-in-out font-lexend group">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-[#A3A3A3] group-hover:text-white transition-all duration-300 ease-in-out">
                    <path d="M16.5 7.5h-9v9h9v-9z" />
                    <path fillRule="evenodd" d="M8.25 2.25A.75.75 0 019 3v.75h2.25V3a.75.75 0 011.5 0v.75H15V3a.75.75 0 011.5 0v.75h.75a3 3 0 013 3v.75H21A.75.75 0 0121 9h-.75v2.25H21a.75.75 0 010 1.5h-.75V15H21a.75.75 0 010 1.5h-.75v.75a3 3 0 01-3 3h-.75V21a.75.75 0 01-1.5 0v-.75h-2.25V21a.75.75 0 01-1.5 0v-.75H9V21a.75.75 0 01-1.5 0v-.75h-.75a3 3 0 01-3-3v-.75H3A.75.75 0 013 15h.75v-2.25H3a.75.75 0 010-1.5h.75V9H3a.75.75 0 010-1.5h.75v-.75a3 3 0 013-3h.75V3a.75.75 0 01.75-.75zM6 6.75A.75.75 0 016.75 6h10.5a.75.75 0 01.75.75v10.5a.75.75 0 01-.75.75H6.75a.75.75 0 01-.75-.75V6.75z" clipRule="evenodd" />
                </svg>
                <p className="text-sm text-[#A3A3A3] group-hover:text-white transition-all duration-300 ease-in-out">Proyectos</p>
            </Link>
        </div>
    </div>
  )
}

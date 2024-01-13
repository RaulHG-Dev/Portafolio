import { useEffect, useRef } from "react"
import Typed from "typed.js";

export default function Title({children}) {
  const title = useRef(null);

  useEffect(() => {
    const typed = new Typed(title.current, {
      strings: [`> ${children}`],
      cursorChar: '_',
      typeSpeed: 50,
      backSpeed: 0,
      loop: false
    });

    return () => {
      typed.destroy();
    };
  }, [])

  return (
    <div className="font-lexend font-black text-3xl relative py-3">
        <div className="bg-gradient-to-r from-[#001937] to-[#2563EB] top-0 w-full left-0 h-full absolute"></div>
        <span className="absolute bg-special-black top-0 left-0 w-full h-[93%]"></span>
        <p className="relative inline-block" ref={title}></p>
    </div>
  )
}

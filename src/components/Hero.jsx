import { LuImport } from "react-icons/lu";
// import benson from '../assets/benson.webp';
import umesh from '../assets/umesh.jpeg';

const Hero = () => {
  return (
    <section>
        
        <div className="flex flex-col items-center justify-center" >
            <h1 className="mt-16 overflow-hidden text-[12vw] font-semibold uppercase leading-none" >Umesh <br/> Dixit</h1>
            
            <div className="mt-8" >
            <a className="flex items-center rounded-xl bg-lime-300 p-2 px-3 font-sans font-medium text-black hover:bg-lime-400"
                href="/UmeshDixit_CSE.pdf"
                download
                target="_blank"
                rel="noopener noreferrer" > 
                <span>Resume.pdf</span>
                <LuImport className="ml-2" />
            </a>
            </div>
        </div>

        <div className="w-full" >
            <img src={umesh} alt="umeshDixit" className="mt-8 h-96 w-full object-cover " />
        </div>
    </section>
  )
}

export default Hero
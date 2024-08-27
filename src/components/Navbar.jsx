import {useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import {LINKS} from '../constants/index';
import { AnimatePresence, motion } from 'framer-motion';

const Navbar = () => {

    const [isOpen , setIsOpen ] = useState(false);

    const handleIsOpen = ()=> {
        setIsOpen(!isOpen);
    }

    useEffect( ()=> {
        if(isOpen){
            document.body.style.overflow = "hidden"; //when menu is opened then we not want to show scrollbar
        }else{
            document.body.style.overflow = "auto";
        }
    } , [isOpen] );

    // animation

    const containerVariants = {
        hidden: { opacity: 0, y: "-100%" },
        visible: { opacity: 1, y: 0,
            transition: {
                staggerChildren: 0.1
            }
         }
    };

    const linkVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, y: 0}
    };


  return (
    <>
        <nav className="fixed right-0 top-0 z-30 p-4" >
            <button className="rounded-md p-2" onClick={handleIsOpen} >
                {
                    isOpen===true ? (
                        <FaTimes className='h-10 w-10' />
                    ) : (
                        <FaBars className='h-10 w-10' />
                    )
                }
            </button>
        </nav>

        <AnimatePresence>

        {
            isOpen && (
                <motion.div 
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={containerVariants}
                    className="fixed flex flex-col z-20 items-center justify-center bg-black text-white inset-0  " >
                    
                    <ul className="text-3xl space-y-6" >
                        {
                            LINKS.map( (link)=> (
                                <motion.li
                                    variants={linkVariants}
                                    key={link.id} >
                                    <a href={`#${link.id}`} onClick={handleIsOpen} className="text-5xl font-semibold uppercase tracking-wide hover:text-lime-300 lg:text-9xl"   >
                                        {link.name}
                                    </a>
                                </motion.li>
                            ) )
                        }
                    </ul>
                </motion.div>
            )
        }

    </AnimatePresence>
    </>
  )
}

export default Navbar
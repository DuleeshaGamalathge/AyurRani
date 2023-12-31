import React, {useState} from 'react';
import Logo from '../img/Logo.png';
import { AiOutlineClose, AiOutlineMenu} from "react-icons/ai";

const TopNavigation = () =>{
    const [nav, setNav]= useState(false)

    const handleNav = () => {
        setNav(!nav)
    }

    return(
        <div className="flex justify-between items-center max-w-[1440px] mx-auto bg-primary py-3.5 px-20 text-white">
            <div className="w-full">
              <img className="logo h-6" src={Logo} alt="Logo" />
            </div>
            <ul className="hidden sm:flex text-sm">
                <li className='px-3.5'>SERVICES</li>
                <li className='px-3.5'>ABOUT</li>
                <li className='px-3.5'>CONTACT</li>
                <li className='px-3.5'>CAREERS</li>
            </ul>
            
            <div onClick={handleNav} className='block sm:hidden'>
                {!nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
            </div>
            <div className={!nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-primary ease-in-out duration-500' : 'fixed left-[-100%]'}>
            <div className="w-full p-2">
              <img className="logo" src={Logo} alt="Logo" />
            </div>
            <ul className='pt-24'>
                <li className='p-3.5 border-b border-white-400'>SERVICES</li>
                <li className='p-3.5 border-b border-white-400'>ABOUT US</li>
                <li className='p-3.5 border-b border-white-400'>CONTACT US</li>
                <li className='p-3.5'>CAREERS</li>
            </ul>
            </div>
        </div>
    )
}

export default TopNavigation;
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const Navbar=()=>{
    const [isMenuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
      setMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="h-20  w-full bg-blue-600 font-semibold fixed top-0 left-0 p-4 md:px-4 lg:px-36 text-white tracking-wide shadow-md shadow-bottom">
            <FontAwesomeIcon icon={faBars} onClick={toggleMenu} className='m-4 mt-3 float-right md:hidden w-7 h-7'/>
            <div className="md:flex justify-between">
                <span className="block text-3xl mt-2 mr-40 md:flex md:mt-1 md:text-2xl md:ml-5 md:mr-20 lg:text-3xl lg:mr-0 mt-1 lg:ml-10">DenisRoldan.dev</span>
                <ul className={`${isMenuOpen ? 'block w-full mt-5' : 'hidden'} text-black md:w-fit md:text-white md:flex md:mt-3 my-2 mr-8 mt-3 text-lg hover:transition-all duration-300}`}>
                    <li onClick={toggleMenu} className="w-full border border-solid h-12 border-black border-t-0  md:border-none  flex-2 mr-8 cursor-pointer hover:text-blue-500">About me</li>
                    <li onClick={toggleMenu} className="w-full border border-solid h-12 border-black border-t-0  md:border-none  flex-2 mr-8 cursor-pointer hover:text-blue-500">Skills</li>
                    <li onClick={toggleMenu} className="w-full border border-solid h-12 border-black border-t-0  md:border-none  flex-2 mr-8 cursor-pointer hover:text-blue-500">Projects</li>
                </ul>
                <button className="hidden md:flex h-12 w-36  bg-blue-500 justify-around border-0 hover:bg-blue-700">Contact me</button>
            </div>
        </nav>
    )
    }
    export default Navbar;
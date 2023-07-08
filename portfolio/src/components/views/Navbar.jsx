import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { customList } from '../../assets/TailwindCustom';

const Navbar=()=>{
    //BarState
    const [isMenuOpen, setMenuOpen] = useState(false);
    //BarHandler
    const toggleMenu = () => {
      setMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="fixed h-20 z-10 rounded-b-sm w-full bg-blue-600 font-semibold  top-0 left-0 p-4 md:px-4 lg:px-36 text-white tracking-wide shadow-md shadow-bottom">
            <FontAwesomeIcon
             icon={faBars}
             onClick={toggleMenu}
             className={`m-4 mt-2 float-right md:hidden w-7 h-7 bg-none rounded-lg border-4 border-transparent  ${isMenuOpen ? 'bg-blue-700 rounded-lg border-4 border-blue-700 ':'bg-none'}`}
             />
            <div className="w-full md:flex justify-between">
                <span className="block text-3xl mt-2 mr-40 md:flex md:mt-1 md:text-2xl md:ml-5 md:mr-20 lg:text-3xl lg:mr-0 lg:ml-10">DenisRoldan.dev</span>
                <ul className={`${isMenuOpen ? 'border-b border-0 rounded-lg rounded-t-none absolute w-full left-0 mt-5 bg-slate-400 bg-opacity-50' : 'hidden'}  md:border-none md:w-fit md:bg-transparent md:relative md:text-white md:flex md:mt-4 my-2 mr-8 mt-3 text-lg hover:transition-all duration-300}`}>
                    <li onClick={toggleMenu} className={customList}>About me</li>
                    <li onClick={toggleMenu} className={customList}>Skills</li>
                    <li onClick={toggleMenu} className={customList}>Projects</li>
                    <li onClick={toggleMenu} className={`shadow-md shadow-bottom md:hidden + ${customList}`}>Contact me</li>
                </ul>
                <button className="hidden md:flex h-12 w-36  bg-blue-500 justify-around border-0 hover:bg-blue-700 active:scale-95 focus:outline-none focus:bg-none">Contact me</button>
            </div>
        </nav>
    )
    }

export default Navbar;
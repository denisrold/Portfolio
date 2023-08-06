import Style from'./darkModeButton.module.css'
import {useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';

export const DarkModeButton =()=>{

    const darkMode = useSelector(state => state.darkModeReducer.darkMode); 
    const dispatch = useDispatch();
    
    //LocalStorage && darkMode:
    useEffect(() => {
    const savedDarkMode = JSON.parse(localStorage.getItem('darkMode'));
        if (savedDarkMode !== null && savedDarkMode !== darkMode) {
        dispatch({ type: 'TOGGLE_DARK_MODE', payload: savedDarkMode });
        }
    }, []);
    // Agregar o eliminar la clase 'dark-mode' del elemento raíz según el estado del modo oscuro
    useEffect(() => {
        const root = document.documentElement;
        if (darkMode) {
        root.classList.add('dark-mode');
        } else {
        root.classList.remove('dark-mode');
        }
    }, [darkMode]);
    //Fin del modo oscuro

    const handleToggleDarkMode = () => {
        dispatch({ type: 'TOGGLE_DARK_MODE' });
    };
    
    useEffect(() => {
        localStorage.setItem('darkMode', JSON.stringify(darkMode));
      }, [darkMode]);
    
      return(
    <div className='w-full flex justify-end mt-96'>
    <div className={Style.container}>
    <button onClick={handleToggleDarkMode} className={`${Style.toggle} + p-0 focus:outline-none focus:bg-none`}></button>
    </div>
    </div>
 )
};


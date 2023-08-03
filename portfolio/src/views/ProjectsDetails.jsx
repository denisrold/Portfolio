import {useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';

export const ProjectsDetails = ()=>{
    const darkMode = useSelector(state => state.darkModeReducer.darkMode);
   
    const dispatch = useDispatch();
  
    useEffect(() => {
        console.log(darkMode);
      }, [darkMode]);

    const handleToggleDarkMode = () => {
        dispatch({ type: 'TOGGLE_DARK_MODE' });
    };
    return(
        <>
            <div>Configurando modo oscuro</div>
            <button onClick={handleToggleDarkMode}>{darkMode ? 'Desactivar modo oscuro' : 'Activar modo oscuro'}</button>
        </>
    )
}
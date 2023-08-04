import {useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate,useLocation } from 'react-router-dom';



export const ProjectsDetails = ({buttonClicked})=>{
    
    const darkMode = useSelector(state => state.darkModeReducer.darkMode); 
    const dispatch = useDispatch();
    //DarkMode
    const navigate = useNavigate();
      
    useEffect(() => {
        console.log(buttonClicked)
      if(buttonClicked == false){
        navigate("/")
      }  
      }, [navigate,buttonClicked]);
     
      if (buttonClicked === false) {
        return null;
    }
    useEffect(() => {
        localStorage.setItem('darkMode', JSON.stringify(darkMode));
      }, [darkMode]);

    //History location
   
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
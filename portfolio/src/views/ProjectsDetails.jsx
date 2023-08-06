import {useEffect} from "react";
import { useNavigate} from 'react-router-dom';
import{DarkModeButton} from'../components/darkModeButton/darkModeButton'



export const ProjectsDetails = ({buttonClicked})=>{
   //Ruta protegida
    const navigate = useNavigate();
    useEffect(() => {
      if(buttonClicked == false){
        navigate("/")
      }  
      }, [navigate,buttonClicked]);
      if (buttonClicked === false) {
        return null;
    }
    return(
        <>
            <div>Configurando modo oscuro</div>
            
        </>
    )
}
import {useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';

export const ProjectsDetails = ()=>{
    const darkMode = useSelector(state => state.darkModeReducer.darkMode);
   
    const dispatch = useDispatch();
  
    useEffect(() => {
        console.log(darkMode);
      }, [darkMode]);

    const handleToggleDarkMode = () => {
        console.log(darkMode);
        dispatch({ type: 'TOGGLE_DARK_MODE' });
    };
    return(
        <>
            <div>Soy mis Projects</div>
            <button onClick={handleToggleDarkMode}></button>
        </>
    )
}
import { AboutText } from "../components/utils/AboutTexts";
import {forwardRef} from "react"

const About = (props,aboutRef)=>{
    return (

    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 mt-24 mb-24">
        <div  ref={aboutRef} className="h-20"></div>
        <div  className="text-center mb-10 col-span-2">
            <p  className="text-4xl font-semibold">About Me</p>
        </div>
        <div className="mx-auto md:float-right col-span-2 md:col-span-1 mb-10">
            <div className="w-96 h-96 md:w-96 md:h-96 border border-black">Soy una Imagen</div>
        </div>
        <div className="col-span-2 ml-2 md:col-span-1 md:ml-5 w-full">
            <p className="md:w-96  text-start text-xl ml-5 mb-6">{AboutText.paragraphOne}</p>
            <p className="md:w-96 text-start text-xl ml-5">{AboutText.paragraphTwo}</p>
        </div>
    </div>

    )
}

export default forwardRef(About);


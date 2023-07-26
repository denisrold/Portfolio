import {customTWS} from "../assets/styles/TailwindCustom";
import {forwardRef} from "react"
import {Link} from "react-router-dom"

const Proyects = (props,projectsRef) =>{
    return (
    <div className="lg:ml-14">
        <div  ref={projectsRef}  className="h-24"></div>
        <div className="text-center md:-ml-6 lg:-ml-14 -mb-6 md:mb-24">
            <p  className="text-4xl font-semibold">Projects</p>
        </div>
        <div className="bg-slate-100 max-w-screen-lg w-full mt-14 md:h-80 pt-7 grid grid-cols-1 gap-4 md:grid-cols-2  mb-24 border border-black rounded-md shadow-2xl lg:pr-10">
                <div className="mx-auto md:pl-8 lg:pr-10 col-span-2 md:col-span-1 md:mb-10 md:mr-2">
                    <div className="w-96 h-80 md:w-96 md:h-64 border border-black rounded-lg">Soy una Imagen</div>
                </div>
                <div className=" ml-2 col-span-1 md:col-span-1 md:ml-5 w-full md:pr-8">
                    <p className="text-center ml-auto mr-auto  w-auto text-xl font-semibold mb-5">Title</p>
                    <p className="text-center w-auto text-base ml-5  mb-6 mr-6">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam dolore eaque praesentium odio ex nisi, minus facilis animi culpa autem aliquam maiores asperiores impedit neque voluptates aut veritatis a libero!</p>
                    <div className="ml-auto mr-auto w-80 space-x-8 mb-10 md:mt-auto md:mb-auto md:pt-4 box-border">
                    <Link className="text-white hover:text-white" to="/projects">
                        <button className={`shadow-xl ${customTWS.customButton}}`}>
                          Details
                        </button>
                    </Link>
                        <button className={`shadow-xl text-white ${customTWS.customButton}}`}>Button2</button>
                    </div>
                </div>
        </div>
        
    </div>
    )
}

export default forwardRef(Proyects);
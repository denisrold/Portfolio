import {Link} from "react-router-dom"
import {customTWS} from "../../assets/styles/TailwindCustom";
import project from "../../assets/images/project.png"


 const ProjectCard =() =>{
    return(
        <div className="bg-slate-100 max-w-screen-lg w-full md:-ml-5 mt-14 md:pt-8 md:pl-3
         md:h-84 pt-7 grid grid-cols-1 gap-4 md:grid-cols-2  mb-24 border border-black rounded-md shadow-2xl lg:pr-10">
        <div className={`mx-auto md:h-72 md:w-wbig md:pl-8 lg:pr-10 col-span-2 md:col-span-1 md:mb-10 md:mr-2 overflow-hidden `}>
        <img src={project} alt="Vista previa del proyecto" className=" w-96 h-auto md:w-full  rounded-lg object-contain md:tansition-transform md:hover:-translate-y-2/3 md:duration-long "/>
        </div>
        <div className=" ml-2 col-span-1 md:pt-4 md:col-span-1 md:ml-5 w-full md:pr-8">
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
    )
};

export default ProjectCard
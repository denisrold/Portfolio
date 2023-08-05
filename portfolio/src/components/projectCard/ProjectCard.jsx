import {Link} from "react-router-dom"
import {customTWS} from "../../assets/styles/TailwindCustom";
import project from "../../assets/images/project.png"


 const ProjectCard =({setButtonClicked}) =>{
    const handleButtonClick =()=>{
        setButtonClicked(true);
    }
    return(
        <div className="mi-dark-mode bg-slate-100 max-w-screen-lg w-full md:ml-auto mt-14 md:pt-8 md:pl-3 lg:-ml-4
         md:h-84 pt-7 grid grid-cols-1 gap-4 md:grid-cols-2 mb-24 border border-black rounded-md shadow-2xl lg:pr-10">
        <div className={`md:ml-8 mx-auto md:h-72 md:w-wbig md:pt-4 md:pl-8 md:mt-1  md:pr-8 rounded-lg shadow-lg col-span-2 md:col-span-1 md:mb-10 md:mr-2 overflow-hidden`}>
        <img src={project} alt="Vista previa del proyecto" className="w-96 md:scale-x-125 md:scale-y-114 h-auto md:w-wbig shadow-md  rounded-lg  object-contain mt-9 md:transition-transform md:hover:-translate-y-3/4 md:duration-long "/>
        </div>
        <div className=" ml-2 col-span-1 md:pt-4 md:col-span-1 w-full md:w-96 md:mr-auto md:ml-16 md:pr-8">
            <p className="text-center ml-auto mr-auto  w-auto text-xl font-semibold mb-5">Title</p>
            <p className="text-center w-auto text-base ml-5 mb-6 mr-6">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam dolore eaque praesentium odio ex nisi, minus facilis animi culpa autem aliquam maiores asperiores impedit neque voluptates aut veritatis a libero!</p>
            <div className="ml-auto mr-auto w-80  lg:ml-15 space-x-12 mb-10 md:mt-auto md:mb-auto md:pt-4 box-border">
            <Link onClick={handleButtonClick} className="text-white hover:text-white" to="/projects">
                <button   className={`shadow-xl ${customTWS.customButton}}`}>
                  Details
                </button>
            </Link>
                <button  className={`shadow-xl text-white ${customTWS.customButton}}`}>Button2</button>
            </div>
        </div>
</div>
    )
};

export default ProjectCard

import {forwardRef} from "react"
import ProjectCard from"../components/projectCard/ProjectCard";

const Proyects = (props,projectsRef) =>{
    return (
    <div className="lg:ml-14">
        <div  ref={projectsRef}  className="h-24"></div>
        <div className="text-center md:-ml-6 lg:-ml-14 -mb-6 md:mb-24">
            <p  className="text-4xl font-semibold">Projects</p>
        </div>
        <ProjectCard />
    </div>
    )
}

export default forwardRef(Proyects);
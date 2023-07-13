import TechsArray from "../components/utils/TechsArray"

const TechStack =()=>{
    return (
        <div className="flex flex-col max-w-xs  mx-auto md:flex-row justify-center space-x-4 space-y-2 md:space-y-0 md:space-x-10">
            <p className="lg:ml-10 mt-auto mb-auto text-lg font-bold">Tech Stack |</p>
            <div className=" border border-black h-40 md:h-20 flex flex-wrap md:flex-nowrap space-x-2">
                {TechsArray.map(s=>{
                  return (
                    <div className="md:my-auto border rounded-full md:h-14 shadow-xl h-1/2 md:w-14 flex-grow md:flex-row">
                        <a href={s.url} target="_blank" rel="noreferrer"> 
                        <img src={s.img} alt={s.name} className="mx-auto mt-2 max-w-2xl w-13 h-10 saturate-150 hover:brightness-110"/>
                        </a>
                    </div>)
                })
                }
            </div>
        </div>
    )
}

export default TechStack;
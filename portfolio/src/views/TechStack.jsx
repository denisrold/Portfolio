import TechsArray from "../components/utils/TechsArray"

const TechStack =()=>{
    return (
        <div className="flex flex-col -ml-2 mb-10 max-w-xs md:mx-auto md:flex-row justify-center space-x-4 space-y-2 lg:space-y-0 lg:space-x-10">
            <p className="lg:ml-10 mt-auto mb-auto text-lg font-bold">Tech Stack</p>
            <div className=" p-1 w-fit h-56 border border-black md:w-fit  md:h-20 flex flex-wrap md:flex-nowrap space-x-3">
                {TechsArray.map(s=>{
                  return (
                    <div key={s.key} className="w-14  md:my-auto border rounded-full md:h-14 shadow-xl h-16 md:w-14 flex-grow md:flex-row">
                        <a href={s.url} target="_blank" rel="noreferrer"> 
                        <img src={s.img} alt={s.name} className="mx-auto mt-3  md:mt-2 max-w-2xl w-13 h-10 saturate-150 hover:brightness-110"/>
                        </a>
                    </div>)
                })
                }
            </div>
        </div>
    )
}

export default TechStack;
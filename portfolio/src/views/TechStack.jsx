import TechsArray from "../components/utils/TechsArray"

const TechStack =()=>{
    return (
        <div className="flex flex-col mx-auto md:flex-row justify-center space-x-4 space-y-2 md:space-y-0 md:space-x-10">
            <p className="ml-10 mt-auto mb-auto text-lg font-bold">Tech Stack  |</p>
            <div className=" border border-black h-20 flex flex-row space-x-2">
                {TechsArray.map(s=>{
                  return (
                    <div className="my-auto border rounded-full w-14 h-14 shadow-xl ">
                        <a href={s.url} target="_blank" rel="noreferrer"> 
                        <img src={s.img} alt={s.name} className=" mx-auto mt-2 max-w-2xl w-13 h-10 saturate-150 hover:brightness-110 hover:shadow-blue-950"/>
                        </a>
                    </div>)
                })
                }
            </div>
        </div>
    )
}

export default TechStack;
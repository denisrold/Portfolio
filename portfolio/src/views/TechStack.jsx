import TechsArray from "../components/utils/TechsArray"

const TechStack =()=>{
    return (
        <div className="mr-auto ml-auto md:-ml-10 flex flex-col  mb-10 max-w-xs lg:mx-auto lg:flex-row justify-center space-x-4 space-y-2 lg:space-y-0 lg:space-x-10">
            <p className="ml-5 text-xl mb-8 md:-ml-36 lg:ml-10 md:mt-auto md:mb-auto md:text-xl lg:text-lg font-bold">Tech Stack:</p>
            <div className=" w-94 border rounded-lg bg-slate-500 h-1 opacity-30  md:hidden"/>
            <div className="py-1 pr-2 md:p-1 w-fit h-56  md:w-fit  md:h-20 flex flex-wrap md:flex-nowrap space-x-3">
                    {TechsArray.map(s=>{
                  return (
                    <div key={s.key} className=" bg-slate-50 w-14  md:my-auto border rounded-full md:h-14 shadow-lg h-16 md:w-14 flex-grow md:flex-row first:ml-3 md:first:ml-0 hover:shadow-md hover:scale-110  active:scale-100 active:shadow-sm transition-all duration-300 ">
                        <a href={s.url} target="_blank" rel="noreferrer"> 
                        <img src={s.img} alt={s.name} className="mx-auto mt-3  md:mt-2 max-w-2xl w-13 h-10 saturate-150 hover:brightness-110 transition-all duration-150"/>
                        </a>
                    </div>
                  )
                })
                }
            
            </div>
            <div className="w-94 border rounded-lg bg-slate-500 h-1 opacity-30 md:hidden"/>
        </div>
    )
}

export default TechStack;
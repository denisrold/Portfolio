import { forwardRef } from "react";


const GoHomeButton =(props,ref) =>{
    
const handleClick = (ref) =>{
    ref.current?.scrollIntoView({behavior:'smooth'});
    }
return (
    <div className=" flex justify-end bg-transparent mb-8 mt-36 mr-6 md:mr-0">
    <button onClick={()=>{handleClick(ref)}} className="mi-dark-mode-buttonHome pt-2 p-3  bg-opacity-50 border-2 text-slate-600 shadow-lg hover:border-blue-600 hover:text-blue-600 md:hover:scale-110  w-12 h-12 rounded-full  transition-all duration-500 active:scale-95 focus:outline-none focus:bg-none">
        <span className=".mi-dark-mode-buttonHome text-3xl font-semibold font-serif">^</span>
    </button>
    </div>
)
}
export default forwardRef(GoHomeButton);
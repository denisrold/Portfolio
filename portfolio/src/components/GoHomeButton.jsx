import { forwardRef } from "react";


const GoHomeButton =(props,ref) =>{
    
const handleClick = (ref) =>{
    ref.current?.scrollIntoView({behavior:'smooth'});
    }
return (
    <div className=" flex justify-end bg-transparent mb-8 mt-40">
    <button onClick={()=>{handleClick(ref)}} className="mi-dark-mode-buttonHome pt-2 p-3  bg-opacity-50 border-2 text-slate-600 shadow-lg hover:border-blue-600 hover:text-blue-600 spin-border w-12 h-12 rounded-full md:hover:scale-105 transition-all duration-150">
        <span className=".mi-dark-mode-buttonHome text-3xl font-semibold font-serif">^</span>
    </button>
    </div>
)
}
export default forwardRef(GoHomeButton);
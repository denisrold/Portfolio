const GoHomeButton =() =>{
return (
    <div className="mt-40 h-8 mb-4 flex flex-col max-w-screen-2xl  text-white ">
    <button className="flex-col-reverse max-w-full items-center justify-center w-full mt-11 hover:mt-9 h-5 opacity-70 scale-x-125 bg-slate-800 hover:opacity-90  hover:shadow-xl rounded-xl hover:brightness-110 focus:outline-none focus:bg-none shadow-lg active:scale-y-90 hover:border-transparent text-center text-2xl  transition-all duration-300 active:text-slate-600">
        <span className="text-3xl font-semibold font-serif">^</span>
    </button>
    </div>
)
}
export default GoHomeButton;
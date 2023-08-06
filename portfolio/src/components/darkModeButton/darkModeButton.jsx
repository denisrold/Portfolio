import Style from'./darkModeButton.module.css'

export const DarkModeButton =()=>{
    return(
    <div className='w-full flex justify-end'>
    <div className={Style.container}>
    <button className={`${Style.toggle} + bg-white  p-0 active:scale-95 focus:outline-none focus:bg-none`}>On</button>
    </div>
    </div>
 )
};


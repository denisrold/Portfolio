import Style from'./darkModeButton.module.css'

export const DarkModeButton =()=>{
    return(
    <div className='w-full flex justify-end'>
    <div className={Style.container}>
    <button className={`${Style.toggle} + p-0 focus:outline-none focus:bg-none`}></button>
    </div>
    </div>
 )
};


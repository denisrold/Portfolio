import  iconGH from '../../assets/icons/GITH.png';
import iconLIN from '../../assets/icons/LINKED.png';
import { handleClickGitHub, handleClickLinked } from'../functions/handlersClicks'



const Footer=()=>{
    return (
        <footer className=" absolute flex flex-col-reverse items-center justify-center space-x-3 md:items-start md:flex-row md:space-x-48 lg:space-x-72 w-full h-32 left-0 bottom-0 bg-slate-600 ">
            <p className="text-2x1 text-white font-semibold mt-0 mb-6 md:mt-12">Copyright © 2023. All rights are reserved</p>
           <div className='flex space-x-16 md:space-x-6 mt-auto mb-auto'> 
            <img src={iconGH} onClick={handleClickGitHub} alt="Github logo" className='w-8 h-8 hover:scale-110 cursor-pointer'/>
            <img src={iconLIN} onClick={handleClickLinked}alt='LinkedIn logo' className='w-8 h-8 hover:scale-110 cursor-pointer' />
           </div>
        </footer>
    )
    }
    export default Footer;
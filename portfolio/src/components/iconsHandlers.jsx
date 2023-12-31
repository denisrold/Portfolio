import iconGH from '../assets/icons/GITH.png';
import iconLIN from '../assets/icons/LINKED.png';
import iconGHhome from '../assets/icons/ghlhome.png';
import iconLINhome from '../assets/icons/LILOGHOME.png';

import { handleClickGitHub, handleClickLinked } from'./utils/handlersClicks'

export const IconsHandlerFooter = () => {
return(
    <div className='flex space-x-16 md:space-x-6 mt-auto mb-auto'> 
    <img src={iconGH} onClick={handleClickGitHub} alt="Github logo" className='w-8 h-8 hover:scale-110 cursor-pointer'/>
    <img src={iconLIN} onClick={handleClickLinked}alt='LinkedIn logo' className='w-8 h-8 hover:scale-110 cursor-pointer' />
   </div>
)
}

export const IconsHAndlersHome =()=>{
    return(
    <div className='flex space-x-2 mt-3 mb-auto'> 
    <img src={iconGHhome} onClick={handleClickGitHub} alt="Github logo" className='max-h-10 max-w-md w-10 shadow-md rounded-full h-10 hover:scale-105 hover:brightness-110 hover:shadow-sm cursor-pointer transition-all duration-300 active:scale-100 active:shadow-none'/>
    <img src={iconLINhome} onClick={handleClickLinked} alt='LinkedIn logo' className='max-h-11 max-w-md w-10 shadow-md rounded-full hover:scale-105 hover:brightness-110 hover:shadow-sm cursor-pointer transition-all duration-300 active:scale-100 active:shadow-none' />
    </div>)
}

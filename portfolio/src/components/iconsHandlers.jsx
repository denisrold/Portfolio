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
    <img src={iconGHhome} onClick={handleClickGitHub} alt="Github logo" className='w-7 h-7 hover:scale-105 cursor-pointer'/>
    <img src={iconLINhome} onClick={handleClickLinked} alt='LinkedIn logo' className='w-7 h-7 hover:scale-105 cursor-pointer' />
    </div>)
}

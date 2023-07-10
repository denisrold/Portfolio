import  iconGH from '../../assets/icons/ghlhome.png';
import iconLIN from '../../assets/icons/LILOGHOME.png';
import { handleClickGitHub, handleClickLinked } from'../functions/handlersClicks.jsx'

const Home=()=>{
    return (
        <div>
            <p className="text-3xl uppercase">Hi there! i'm Denis</p>
            <p className="text-3xl uppercase">Full Stack Web Developer based in Rio Negro, Argentina.</p>
            <div className='flex space-x-2 mt-3 mb-auto'> 
                <img src={iconGH} onClick={handleClickGitHub} alt="Github logo" className='w-8 h-8 hover:scale-105 cursor-pointer'/>
                <img src={iconLIN} onClick={handleClickLinked}alt='LinkedIn logo' className='w-8 h-8 hover:scale-105 cursor-pointer' />
            </div>
        </div>
    )
    }
    export default Home;
import  iconGH from '../../assets/icons/ghlhome.png';
import iconLIN from '../../assets/icons/LILOGHOME.png';
import { handleClickGitHub, handleClickLinked } from'../functions/handlersClicks.jsx'

const Home=()=>{
    return (
        <div className='flex justify-center space-x-36'>
            <div className='flex flex-col items-start'>
                <p className="font-bold text-4xl">Hi there! i'm <span className='text-blue-700'>Denis</span></p>
                <p className="text-base font-semibold ">Full Stack Web Developer based in Rio Negro, Argentina.</p>
                <div className='flex space-x-2 mt-3 mb-auto'> 
                    <img src={iconGH} onClick={handleClickGitHub} alt="Github logo" className='w-8 h-8 hover:scale-105 cursor-pointer'/>
                    <img src={iconLIN} onClick={handleClickLinked}alt='LinkedIn logo' className='w-8 h-8 hover:scale-105 cursor-pointer' />
                </div>
            </div>
            <div className='w-96 h-96 border border-black'>Soy una imagen</div>
        </div>
    )
    }
    export default Home;
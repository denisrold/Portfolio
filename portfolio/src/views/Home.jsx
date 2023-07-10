import { IconsHAndlersHome } from "../components/iconsHandlers";

const Home=()=>{
    return (
        <main className='flex justify-center space-x-36'>
            <div className='flex flex-col items-start'>
                <p className="font-bold text-4xl mt-auto">Hi there! i'm <span className='text-blue-700'>Denis</span></p>
                <p className="text-base font-semibold ">Full Stack Web Developer based in Rio Negro, Argentina.</p>
                <IconsHAndlersHome/>
            </div>
            <div className='w-96 h-72 border border-black'>Soy una imagen</div>
        </main>
    )
    }
    export default Home;
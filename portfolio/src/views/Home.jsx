import { IconsHAndlersHome } from "../components/iconsHandlers";

const Home=()=>{
    return (
        <main className='flex flex-col items-center md:flex-row md:justify-center space-x-36'>
            <div className='flex flex-col items-start text-start'>
                <p className="font-bold text-4xl mt-auto">Hi there! i'm <span className='text-blue-700'>Denis</span></p>
                <p className="text-2xl mt-2 text-start font-semibold ">Full Stack Web Developer <span className="hidden md:inline-block md:text-xl lg:text-2xl">based in Rio Negro, Argentina.</span></p>
                <span className="block left-auto row-auto text-xl md:hidden">based in Rio Negro, Argentina.</span>
                <IconsHAndlersHome/>
            </div>
            <div className='w-96 h-72 mt-8 md:mt-0 border border-black'>Soy una imagen</div>
        </main>
    )
    }
    export default Home;
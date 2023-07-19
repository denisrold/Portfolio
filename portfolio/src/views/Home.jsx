import { IconsHAndlersHome } from "../components/iconsHandlers";

const Home=()=>{
    return (
        <main className='flex flex-col items-center md:mb-12 mb-14 md:flex-row md:justify-center lg:space-x-28 gap-8 lg:mb-20'>
            <div className='flex flex-col items-start text-start'>
                <p className="font-bold text-4xl mt-auto">Hi there! i'm <span className='text-blue-700'>Denis</span></p>
                <p className="ml-auto mr-auto text-2xl mt-2 text-start font-semibold lg:text-sm">Full Stack Web Developer <span className="hidden md:inline-block md:text-xl lg:text-sm">based in Rio Negro, Argentina.</span></p>
                <span className="ml-auto mr-auto block left-auto row-auto text-xl font-medium md:hidden">based in Rio Negro, Argentina.</span>
                <div className="ml-auto mr-auto mt-6 md-0 md:ml-0 md:mr-0">               
                <IconsHAndlersHome />
                </div>
            <div className='w-72 ml-auto mr-auto h-72 mt-10 rounded-full md:hidden border border-black'>img</div>
            </div>
            <div className='hidden md:flex w-72 ml-auto mr-auto rounded-full h-72 mt-8 md:mt-0 border border-black'>img</div>
        </main>
    )
    }
    export default Home;
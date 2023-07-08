const Navbar=()=>{
    return (
        <nav className="h-20  w-full bg-blue-600 font-semibold  fixed top-0 left-0 p-4 px-36 text-white tracking-wide shadow-md shadow-bottom">
            <div className="flex justify-between">
            <span className="text-3xl mt-1 ml-10">DenisRoldan.dev</span>
            <ul className="flex my-2 mr-8 mt-3 text-lg hover:transition-all duration-300">
                <li className="flex-2 mr-8 cursor-pointer hover:text-blue-500">About me</li>
                <li className="flex-2 mr-8 cursor-pointer hover:text-blue-500">Skills</li>
                <li className="flex-2 mr-8 cursor-pointer hover:text-blue-500">Projects</li>
            </ul>
            <button className="flex h-12 w-36  bg-blue-500 justify-around border-0 hover:bg-blue-700 ">Contact me</button>
            </div>
        </nav>
    )
    }
    export default Navbar;
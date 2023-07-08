const Navbar=()=>{
    return (
        <nav className=" h-20  w-full bg-slate-300 fixed top-0 left-0 p-4 px-36">
            <div className="flex justify-between">
            <span className="text-3xl mt-1 ml-10">DenisRoldan.dev</span>
            <ul className="flex my-2 mr-12">
                <li className="flex-2 mt-1 mr-6">About me</li>
                <li className="flex-2 mt-1 mr-6">Skills</li>
                <li className="flex-2 mt-1 ">Projects</li>
            </ul>
            <button className="flex h-12 w-36 bg-slate-900 justify-around">Contact me</button>
            </div>
        </nav>
    )
    }
    export default Navbar;
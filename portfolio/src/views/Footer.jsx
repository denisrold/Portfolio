import {IconsHandlerFooter} from "../components/iconsHandlers.jsx";

const Footer=()=>{
    return (
        <footer className="absolute left-0  flex flex-col-reverse items-center justify-center space-x-3 md:items-start md:flex-row md:space-x-48 lg:space-x-72 w-full h-32  bg-slate-600 ">
            <p className="text-2x1 text-white font-semibold mt-0 mb-6 md:mt-12">Copyright © 2023. All rights are reserved</p>
            <IconsHandlerFooter />
        </footer>
    )
    }
    export default Footer;
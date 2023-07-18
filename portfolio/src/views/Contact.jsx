import Styles from"../components/contactMe/Contact.module.css"
import { customCard } from "../assets/styles/TailwindCustom";
const ContactMe = ()=>{
    return(
        <>
        <h1 className="text-4xl font-semibold mb-12 md:mb-10 lg:mb-16 lg:ml-6">Contact Me</h1>
        <div className="flex flex-col w-auto md:flex-row gap-8 md:gap-5 items-center md:justify-around lg:ml-8 mb-32">
            <div className={`${customCard} "+" ${Styles.card} "`}>
                <div className="flex flex-row space-x-6 pt-2 pl-1 gap-1">
                    <img className="w-16 h-16 border border-black rounded-full shadow-lg"/>
                    <div className="flex flex-col items-start pt-3"> 
                    <p className="font-semibold text-lg ">Email</p>
                    <a href="mailto:denisroldan.dev@gmail.com" target="_blank" className="text-lg cursor-pointer text-gray-700 hover:text-blue-700">denisroldan.dev@gmail.com</a>
                    </div>
                </div>
            </div>
            <div className={`${customCard} "+" ${Styles.card}`}>
            <div className="flex flex-row space-x-6 pt-2 pl-1 gap-1">
                    <img className="w-16 h-16 border border-black rounded-full shadow-lg"/>
                    <div className="flex flex-col items-start pt-3"> 
                    <p className="font-semibold text-lg">WhatsApp</p>
                    <a href="https://api.whatsapp.com/send?phone=3417122685" target="_blank" className="cursor-pointer text-gray-700 hover:text-blue-700">+543417122685</a>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default ContactMe;
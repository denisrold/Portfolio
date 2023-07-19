import Styles from"../components/contactMe/Contact.module.css"
import { customTWS } from "../assets/styles/TailwindCustom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import iconMail from"../assets/icons/gmail.png"
import {forwardRef} from "react"
 
const ContactMe = (props,contactRef) =>{
    return(
        <div>
        <p ref={contactRef} className="h-24"></p>
        <h1 className="text-4xl font-semibold mb-12 md:mb-10 lg:mb-16 lg:ml-6">Contact Me</h1>
        <div className="flex flex-col w-auto md:flex-row gap-8 md:gap-5 items-center md:justify-around lg:ml-8 mb-32">
            <div className={`${customTWS.customCard} "+" ${Styles.card}`}>
                <div className="flex flex-row space-x-4 pt-2 pl-3 gap-1">
                <img src={iconMail} className="w-16 h-16 p-1  rounded-full shadow-xl" />
                    <div className="flex flex-col items-start pt-3"> 
                    <p className="font-semibold text-lg ">Email</p>
                    <a href="mailto:denisroldan.dev@gmail.com" target="_blank" className="-ml-1 md:ml-0 cursor-pointer text-xl text-blue-700 md:text-lg md:text-gray-700 hover:text-blue-700">denisroldan.dev@gmail.com</a>
                    </div>
                </div>
            </div>
            <div className={`${customTWS.customCard} "+" ${Styles.card}`}>
            <div className="flex flex-row space-x-4 pt-2 pl-3 gap-1">
                    <FontAwesomeIcon icon={faWhatsapp} className="w-16 h-16 p-1  rounded-full shadow-xl" />
                    <div className="flex flex-col items-start pt-3"> 
                    <p className="font-semibold text-lg">WhatsApp</p>
                    <a href="https://api.whatsapp.com/send?phone=3417122685" target="_blank" className="cursor-pointer text-lg md:text-base text-blue-700 md:text-gray-700 hover:text-blue-700">+54 3417122685</a>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default forwardRef(ContactMe);
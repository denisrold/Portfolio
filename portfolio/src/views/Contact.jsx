import Styles from"../components/contactMe/Contact.module.css"
import { customCard } from "../assets/styles/TailwindCustom";
const ContactMe = ()=>{
    return(
        <>
        <h1 className="text-4xl font-semibold mb-12 md:mb-10 lg:mb-20 lg:ml-6">Contact Me</h1>
        <div className="flex flex-col w-auto md:flex-row gap-8 md:gap-5 items-center md:justify-around lg:ml-8 mb-20">
            <div className={`${customCard} "+" ${Styles.card} "`}>
                <div className="flex flex-row space-x-6 pt-3 pl-1 gap-1">
                    <img className="w-16 h-16 border border-black rounded-full shadow-lg"/>
                    <div className="flex flex-col items-start pt-3"> 
                    <p className="font-semibold">Mail</p>
                    <span className="text-lg">denisroldan.dev@gmail.com</span>
                    </div>
                </div>
            </div>
            <div className={`${customCard} "+" ${Styles.card}`}>
            <div className="flex flex-row space-x-6 pt-3 pl-1 gap-1">
                    <img className="w-16 h-16 border border-black rounded-full shadow-lg"/>
                    <div className="flex flex-col items-start pt-3"> 
                    <p className="font-semibold">WhatsApp</p>
                    <span>+54 3417122685</span>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default ContactMe;
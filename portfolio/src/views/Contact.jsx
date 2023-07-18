import Styles from"../components/contactMe/Contact.module.css"
import { customCard } from "../assets/styles/TailwindCustom";
const ContactMe = ()=>{
    return(
        <>
        <h1 className="text-4xl font-semibold mb-12 md:mb-10">Contact Me</h1>
        <div className="flex flex-col w-auto md:flex-row gap-8 md:gap-5 items-center md:justify-around lg:ml-8 mb-20">
            <div className={`${customCard} "+" ${Styles.card} `}>
                Email
            </div>
            <div className={`${customCard} "+" ${Styles.card}`}>WhatsApp
            </div>
        </div>
        </>
    )
}

export default ContactMe;
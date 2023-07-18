import Styles from"../components/contactMe/Contact.module.css"
import { customCard } from "../assets/styles/TailwindCustom";
const ContactMe = ()=>{
    return(
        <>
        <h1 className="text-4xl font-semibold mb-10">Contact Me</h1>
        <div className="flex flex-row justify-around ml-8 mb-10">
        <div className={`${customCard} "+" ${Styles.card}`}>
            Email
        </div>
        <div className={`${customCard} "+" ${Styles.card}`}>WhatsApp</div>
        </div>
        </>
    )
}

export default ContactMe;
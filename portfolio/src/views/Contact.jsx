import Styles from"../components/contactMe/Contact.module.css"
const ContactMe = ()=>{
    return(
        <>
        <h1 className="text-4xl font-semibold mb-10">Contact Me</h1>
        <div className="flex flex-row justify-around ml-8 mb-10">
        <div className={`w-96 p-5 h-32 rounded-sm hover:scale-105 transition-transform duration-500 ${Styles.card}`}>
        </div>
        <div className={`w-96 p-5 h-32 rounded-sm hover:scale-105 transition-transform duration-500 ${Styles.card}`}>WhatsApp</div>
        </div>
        </>
    )
}

export default ContactMe;
const ContactMe = ()=>{
    return(
        <>
        <h1 className="text-4xl font-semibold mb-10">Contact Me</h1>
        <div className="flex flex-row justify-around ml-8 mb-10">
        <div className=" border border-black w-96 p-5 h-32 rounded-lg hover:scale-110 transition-transform duration-500">Mail</div>
        <div className=" border border-black w-96 p-5 rounded-lg hover:scale-110 transition-transform duration-500">WhatsApp</div>
        </div>
        </>
    )
}

export default ContactMe;
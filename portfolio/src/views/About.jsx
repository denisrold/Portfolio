const About = ()=>{
    return (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 mt-24 mb-24">
            <div className="text-center mb-10 col-span-2">
            <p className="text-4xl font-semibold">About Me</p>
            </div>
            <div className="mx-auto md:float-right col-span-2 md:col-span-1 mb-10">
            <div className="w-96 h-96 md:w-96 md:h-96 border border-black">Soy una Imagen</div>
            </div>
            <div className="col-span-2 md:col-span-1 md:ml-5 w-full">
            <p className="w-96 text-start text-xl ml-5 mb-6">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam dolore eaque praesentium odio ex nisi, minus facilis animi culpa autem aliquam maiores asperiores impedit neque voluptates aut veritatis a libero!</p>
            <p className="w-96 text-start text-xl ml-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam dolore eaque praesentium odio ex nisi, minus facilis animi culpa autem aliquam maiores asperiores impedit neque voluptates aut veritatis a libero!</p>
            </div>
        </div>
 
    )
}

export default About;

// PASAR LOS TEXTOS A UN ARCHIVO APARTE. IMPORTARLO COMO OBJETO. 
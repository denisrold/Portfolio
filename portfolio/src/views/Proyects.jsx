const Proyects = () =>{
    return (

    <div >
        <div className="text-center mb-10">
        <p className="text-4xl font-semibold">Projects</p>

        </div>
            <div className="bg-slate-50 max-w-full md:h-80 w-full pt-7 md:pl-2 grid grid-cols-1 gap-4 md:grid-cols-2 mt-24 mb-24 border border-black rounded-xl shadow-2xl">
                    <div className="mx-auto md:float-right md:pl-3 col-span-2 md:col-span-1 mb-10">
                        <div className="w-96 h-80 md:w-96 md:h-64 border border-black rounded-xl">Soy una Imagen</div>
                    </div>
                    <div className=" ml-2 col-span-2 md:col-span-1 md:ml-5 w-full">
                        <p className="w-auto md:w-64 text-left text-lg ml-5 md:ml-10 lg:ml-0 mb-6 mr-6">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam dolore eaque praesentium odio ex nisi, minus facilis animi culpa autem aliquam maiores asperiores impedit neque voluptates aut veritatis a libero!</p>
                    </div>
            </div>

    </div>
    )
}

export default Proyects;
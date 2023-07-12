const TechStack =()=>{
    return (
        <div className="flex flex-col mx-auto md:flex-row justify-center space-x-4 space-y-2 md:space-y-0 md:space-x-24">
            <p className="mt-auto mb-auto font-semibold">Tech Stack</p>
            <div className=" border border-black w-72 h-20 flex flex-row">
                <div className="border rounded-full w-14 h-14 shadow-xl ">
                     <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> 
                     <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" className=" mx-auto mt-1 w-11 h-11  hover:brightness-110"/>
                    </a>
                </div>
                <div className="border rounded-full w-14 h-14 shadow-xl">
                     <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> 
                     <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" className=" mx-auto mt-1 w-11 h-11 hover:brightness-110"/>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default TechStack;
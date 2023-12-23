const Contact = () => {
    return (
        <>
            <h1 className="m-auto w-[80%] flex justify-center font-bold font-mono">Contact us</h1>
            <div className="relative flex w-[80%] gap-4 p-4 m-auto mt-8 ">
                <input className="rounded-md flex-1 pl-4 py-2 border border-slate-200" placeholder="Enter your full name"></input>
                <input className="flex-1 rounded-md  pl-4 py-2 border border-slate-200" placeholder="Enter your email"></input>
                <button className="absolute bottom-[-55%] left-[50%] translate-x-[-50%] px-4 py-2 rounded-md text-yellow-300 border border-yellow-300 transition-all hover:bg-yellow-300 hover:text-white" >Submit</button>
            </div>
        </>
    )
};

export default Contact;
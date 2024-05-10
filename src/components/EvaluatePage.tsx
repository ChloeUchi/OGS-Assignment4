const EvaluatePage = () => {
    return (
        <div className=''>
            <div className="content-evaluate">
                <div className="content-home place-self-center bg-[#a9d4ff] w-[800px] h-[500px] m-auto rounded-2xl overflow-y-auto opacity-85">
                    <h1 className='text-left p-[2em] pb-4 font-extrabold text-[2em] text-[#173f67]'>ประเมินคอร์สเรียน</h1>
                    <div className='containerDiv flex flex-col px-[4em]'>
                        <h1>Git Version Control</h1>
                        <div className='header-div flex justify-around'>
                            <div className='flex border-[3px] rounded-md border-neutral-800 h-6 w-[550px]'>
                                <div className='progress-con rounded-sm bg-[#5da3ff] w-[95%]'></div>
                            </div>
                            <p className='font-bold'>9.5/10</p>
                        </div>
                        <h1>Basic JavaScript</h1>
                        <div className='header-div flex justify-around'>
                            <div className='flex border-[3px] rounded-md border-neutral-800 h-6 w-[550px]'>
                                <div className='progress-con rounded-sm bg-[#5da3ff] w-[90%]'></div>
                            </div>
                            <p className='font-bold'>9/10</p>
                        </div>
                        <h1>Basic TypeScript</h1>
                        <div className='header-div flex justify-around'>
                            <div className='flex border-[3px] rounded-md border-neutral-800 h-6 w-[550px]'>
                                <div className='progress-con rounded-sm bg-[#5da3ff] w-[90%]'></div>
                            </div>
                            <p className='font-bold'>9/10</p>
                        </div>
                        <h1>React TypeScript</h1>
                        <div className='header-div flex justify-around'>
                            <div className='flex border-[3px] rounded-md border-neutral-800 h-6 w-[550px]'>
                                <div className='progress-con rounded-sm bg-[#5da3ff] w-[100%]'></div>
                            </div>
                            <p className='font-bold'>10/10</p>
                        </div>
                        <h1>Github Page</h1>
                        <div className='header-div flex justify-around'>
                            <div className='flex border-[3px] rounded-md border-neutral-800 h-6 w-[550px]'>
                                <div className='progress-con rounded-sm bg-[#5da3ff] w-[80%]'></div>
                            </div>
                            <p className='font-bold'>8/10</p>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EvaluatePage
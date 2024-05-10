const HomePage = () => {
    return (
        <div className='welcome'>
            <div className="flex justify-around">
                <div className="card">
                    <div className="cloud"></div>
                    <div className="shadow"></div>
                </div>
                <div className="card">
                    <div className="cloud2 flex flex-col gap-2 overflow-hidden">
                        <div className="flex justify-around">
                            <div className="moon1"></div>
                            <div className="moon2"></div>
                            <div className="moon3"></div>
                        </div>
                        <div className="flex gap-9">
                            <div className="moon3"></div>
                            <div className="moon2"></div>
                        </div>
                        <div className="moon4 flex place-items-end ml-14"></div>
                    </div>
                    <div className="shadow"></div>
                </div>

                <div className="card">
                    <div className="cloud"></div>
                    <div className="shadow"></div>
                </div>
            </div>
            <div className="floattext-con flex text-[7em] text-center font-extrabold text-[#173f67] dark:text-white mt-[1em] absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                {/* drop-shadow-xl */}
                <div className="floattext">W</div>
                <div className="floattext2">E</div>
                <div className="floattex3">L</div>
                <div className="floattext2">C</div>
                <div className="floattext">O</div>
                <div className="floattext2">M</div>
                <div className="floattex3">E</div>
                <div className="floattext2">!</div>
                {/* <h1 className='text-welcome text-[7em] text-center font-extrabold text-[#173f67] dark:text-white mt-[1em] absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 drop-shadow-xl' data-word="WELCOME!">WELCOME!</h1> */}
            </div>
        </div>
    )
}

export default HomePage;

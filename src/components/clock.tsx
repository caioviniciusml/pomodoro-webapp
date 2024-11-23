export default function Clock(){
    return(
        <div className="flex flex-col items-center text-snow font-bakbak">
            <h2 className="font-semibold text-4xl">Activy Time</h2>
            <span id="clock" className="text-9xl">19:44</span>
            <hr className="w-64 mt-4"/>
            <div id="player-controls" className="flex gap-4 mt-4 ">
                <button>
                    <img className="h-10" src="../src/assets/pauseButton.svg" alt="" />
                </button>
                <button>
                    <img className="h-10" src="../src/assets/stopButton.svg" alt="" />
                </button>
                <button>
                    <img className="h-10"src="../src/assets/playButton.svg" alt="" />
                </button>
            </div>
        </div>
    )
}
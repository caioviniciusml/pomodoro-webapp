import { useEffect, useState } from "react"


export default function Clock({ initialMinutes = any }){
    const [isRunning, setIsRunning] = useState(false)
    const [timeInSeconds, setTimeInSeconds] = useState(initialMinutes * 60);

    useEffect( () =>{
        if(!isRunning) return
        if(timeInSeconds <= 0 ){
            reset()
            return
        }

        const interval = setInterval(() => {
            setTimeInSeconds((prev) => prev - 1)
        }, 1000);

        return () => clearInterval(interval)
    }, [isRunning, timeInSeconds])

    const formatTime = () => {
        let minutes = Math.floor(timeInSeconds / 60)
        let seconds = timeInSeconds % 60

        if(minutes < 10) minutes = '0' + minutes
        if(seconds < 10) seconds = '0' + seconds
        
        return minutes + ':' + seconds
      };

    const reset = () =>{
        setTimeInSeconds(initialMinutes * 60)
        setIsRunning(false)
    }

    return(
        <div className="flex flex-col items-center text-snow font-bakbak">
            <h2 className="font-semibold text-4xl">Activy Time</h2>
            <span id="clock" className="text-9xl">{formatTime()}</span>
            <hr className="w-64 mt-4"/>
            <div id="player-controls" className="flex gap-4 mt-4 ">
                <button onClick={reset}>
                    <img className="h-10" src="../src/assets/stopButton.svg" alt="" />
                </button>
                <button onClick={() => setIsRunning((prev) => !prev)}>
                    <img className="h-10" src={isRunning? "../src/assets/pauseButton.svg" : "../src/assets/playButton.svg"} alt="" />
                </button>
                <button>
                    <img className="h-10"src="../src/assets/nextButton.svg" alt="" />
                </button>
            </div>
        </div>
    )
}
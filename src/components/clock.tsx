import { useEffect, useState } from "react"

interface ClockProps{
    pomodoroCycles: number;
    focusTimeInSeconds: number;
    breakTimeInSeconds: number;
    longBreakTimeInSeconds: number;
}

export default function Clock({ pomodoroCycles = 4, focusTimeInSeconds = 1500, breakTimeInSeconds = 300, longBreakTimeInSeconds = 1800}: ClockProps){
    const [isRunning, setIsRunning] = useState(false)
    const [focusTime, setFocusTime] = useState(focusTimeInSeconds);

    useEffect(() =>{
        if(!isRunning) return;

        if(focusTime <= 0 ){
            resetClock()
            return;
        }

        setInterval(() => {
            setFocusTime(focusTime - 1);
        }, 1000);
    }, [isRunning, focusTime])

    function resetClock(){
        setFocusTime(focusTimeInSeconds);
        setIsRunning(false);
    }

    function formatTime(){
        const minutes = Math.floor(focusTime / 60);
        const seconds = focusTime % 60

        const minutesFormatted = minutes < 10 ? '0' + minutes.toString() : minutes.toString();  
        const secondsFormatted = seconds < 10 ? '0' + seconds.toString() : seconds.toString();   

        return `${minutesFormatted}:${secondsFormatted}`;
    };

    return(
        <div className="flex flex-col items-center text-snow font-bakbak">
            <h2 className="font-semibold text-4xl">Activy Time</h2>
            <span id="clock" className="text-9xl">{formatTime()}</span>
            <hr className="w-64 mt-4"/>
            <div id="player-controls" className="flex gap-4 mt-4 ">
                <button onClick={resetClock}>
                    <img className="h-10" src="../src/assets/stopButton.svg" alt=""/>
                </button>
                <button onClick={() => setIsRunning(!isRunning)}>
                    <img className="h-10" src={isRunning? "../src/assets/pauseButton.svg" : "../src/assets/playButton.svg"} alt="" />
                </button>
                <button>
                    <img className="h-10"src="../src/assets/nextButton.svg" alt=""/>
                </button>
            </div>
        </div>
    )
}

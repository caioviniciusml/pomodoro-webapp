import { Input } from "@/components/ui/input"
import TimePicker from "./timePicker.tsx";

interface SettingsModalProps {
    settingsHandler: () => void;
}

export default function SettingsModal({ settingsHandler }: SettingsModalProps) {
    function updateClockSettings(){
        settingsHandler();
    }

    return (
        <>
            <div className="w-full h-full fixed top-0 left-1/2 -translate-x-1/2 backdrop-blur-sm" onClick={settingsHandler}></div>
            <div className="w-80 sm:w-96 p-6 flex flex-col items-center absolute top-40 left-1/2 -translate-x-1/2 border-[1px] rounded-lg bg-gradient-to-b from-10% to-100% from-white to-neutral-400 dark:from-black dark:to-neutral-900 border-neutral-900 text-2xl text-black dark:text-white">
                <button className="self-end" onClick={settingsHandler}>
                    <svg className="fill-neutral-400 hover:fill-black dark:fill-neutral-600 dark:hover:fill-white" xmlns="http://www.w3.org/2000/svg" height="20px" width="20px" viewBox="0 -960 960 960"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" /></svg>
                </button>
                <div className="text-center pb-5 flex flex-col items-center">
                    <label>Pomodoro Cycles</label>
                    <div className="flex ">
                        <Input className="w-20" type="number" />
                    </div>
                </div>
                <div className="text-center pb-5">
                    <label>Focus Time</label>
                    <TimePicker />
                </div>
                <div className="text-center pb-5">
                    <label>Break Time</label>
                    <TimePicker />
                </div>
                <div className="text-center pb-5">
                    <label>Long Break Time</label>
                    <TimePicker />
                </div>
                <button onClick={updateClockSettings}>Save</button>
            </div>
        </>
    )
}
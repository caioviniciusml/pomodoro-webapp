import { Switch } from "@/components/ui/switch"

export default function ThemeToggle(){
    return(
        <div className="flex hover:cursor-pointer">
            <img src="../assets/lightThemeIcon.svg" alt="" />
            <Switch />
            <img src="../assets/darkThemeIcon.svg" alt="" />
        </div>
    )
}

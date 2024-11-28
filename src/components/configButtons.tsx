import ThemeToggle from "./themeToggle";

export default function ConfigButtons(){
    return(
        <div id="configButtonGroup" className="flex items-center gap-5">
            <ThemeToggle />
        </div>
    );
}
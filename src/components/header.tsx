import ConfigButtons from "./configButtons.tsx"

export default function Header(){
    return(
        <nav className="p-4 flex items-center justify-between">
            <div>
                <img src="" alt=""/>
                <h1 className="font-bakbak font-extrabold text-3xl text-snow">POMO</h1>
            </div>
            <ConfigButtons />
        </nav>
    )
}

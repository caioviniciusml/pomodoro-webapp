export default function Nav(){
    return(
        <nav className="p-4 flex items-center justify-between">
            <div>
                <img src="" alt="" />
                <h1 className="font-bakbak font-extrabold text-3xl text-snow">POMO</h1>
            </div>
            <div id="navButtonGroup" className="flex items-center">
                <button>
                    <img className="h-8 px-2" src="../src/assets/sunIcon.svg" alt="" />
                </button>
                <button>
                    <img className="h-8 px-2" src="../src/assets/settingsIconDark.svg" alt="" />
                </button>
            </div>
        </nav>
    )
}
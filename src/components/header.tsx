import Logo from "./logo.tsx"
import ThemeToggler from "./themeToggler.tsx"
import SettingsButton from "./settingsButton.tsx"

export default function Header() {
    return (
        <header className="p-4 sm:px-10 flex items-center justify-between">
            <Logo />
            <div className="flex items-center gap-5">
                <ThemeToggler />
                <SettingsButton />
            </div>
        </header>
    )
}

import { useTheme } from 'app/providers/ThemeProvider'
import Moon from 'shared/assets/icons/moon.svg'
import Sun from 'shared/assets/icons/sun.svg'
import { Button, ThemeButton } from 'shared/ui/Button/Button'

interface ThemeSwitcherProps {
  className?: string

}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
    const { theme, themeToggle } = useTheme()

    return (
        <>
            <Button
                theme={ThemeButton.CLEAR}
                onClick={themeToggle}
            >
                {theme === 'light' ? <Sun /> : <Moon />}
            </Button>
        </>
    )
}

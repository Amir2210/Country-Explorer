import { useEffect, useState } from 'react'
import { MdSunny } from "react-icons/md"
import { FaMoon } from "react-icons/fa"
type Props = {}

interface Themes {
  light: string
  dark: string
}

const themes: Themes = {
  light: 'light',
  dark: 'dark'
}

function getThemeFromLocal(): string {
  return localStorage.getItem('theme') || themes.light
}

export default function Navbar({ }: Props) {
  const [theme, setTheme] = useState<string>(getThemeFromLocal())

  function handleTheme() {
    const { light, dark } = themes
    const newTheme = theme === light ? dark : light
    setTheme(newTheme)
  }

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <nav className='container shadow-lg min-w-full flex items-center min-h-20'>
      <h1 className='font-semibold text-4xl capitalize'>where in the world?</h1>
      <div className='ml-auto flex gap-3'>
        <h2 className='text-3xl font-semibold capitalize'>{theme === 'light' ? 'dark' : 'light'} mode</h2>
        <label className='swap swap-rotate'>
          <input type="checkbox" onChange={handleTheme} />
          <MdSunny className='swap-on h-6 w-6 ' />
          <FaMoon className='swap-off h-6 w-6 ' />
        </label>
      </div>
    </nav>
  )
}
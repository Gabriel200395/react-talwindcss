import React, { useEffect } from 'react'
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";

// para implementar dark mode aplicação deve utilizar a classe utilitária dark e aplicar no body do html de acordo com as cores  
// systemPreference verificar o tema padrão da maquina

export default function ThemeFile() {
    const systemPreference = window.matchMedia('(prefers-color-scheme: dark)').matches
    const toogle = () => document.documentElement.classList.toggle('dark')


    useEffect(() => {
        systemPreference && document.documentElement.classList.add('dark')
    }, [])

    return (
        <div className="flex">
            <MoonIcon className="h-6 w-6  text-white dark:hidden cursor-pointer" onClick={toogle} />
            <SunIcon className="h-6 w-6 hidden text-white dark:block cursor-pointer" onClick={toogle} />
        </div>
    )
}
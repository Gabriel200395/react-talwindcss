import { MoonIcon, SunIcon } from "@heroicons/react/24/solid"
import React from 'react'
import ThemeFile from "../themeFile"

//responsividade em max-width e min-width utilizar o seguinte utilitários max-[] ou min-[]

export const Header = () => {
    return (
        <nav className="bg-alura-200 dark:bg-dark-200 flex justify-between items-center h-20 px-10 flex-wrap max-[500px]:justify-center">
            <h2 className='font-bold text-2xl text-white'>
                Talwindcss
            </h2>
            <ul className='list-none flex space-x-2'>
                <li className='font-normal text-lg  text-white'>
                    React
                </li>
                <li className='font-normal text-lg text-white'>
                    Next JS
                </li>
                <li className='font-normal text-lg text-white'>
                    React Native
                </li>
               <ThemeFile />
            </ul>
        </nav>
    )

}
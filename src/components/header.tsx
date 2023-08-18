import React from 'react'


//Para usar responsividade em max-width e min-width utilizar o seguinte utilitários max-[] ou min-[]

export const Header = () => {
    return (
        <nav className="bg-blue-400 flex justify-between items-center h-20 px-10 flex-wrap max-[500px]:justify-center">
            <h2 className='font-bold text-white text-2xl'>
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
            </ul>
        </nav>
    )

}
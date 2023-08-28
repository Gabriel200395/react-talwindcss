import React, { ChangeEvent, InputHTMLAttributes } from 'react'

interface InputPros extends InputHTMLAttributes<HTMLInputElement> {
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
    name: string;
}

export const Input = ({ value, onChange, name, ...rest }: InputPros) => {
    return <input
        className='max-w-lg rounded-full 
        h-10 outline-none px-5 border
        border-gray-700 
        w-full mb-5 
        placeholder:uppercase 
        placeholder:text-xs 
        placeholder:font-bold 
        placeholder:text-blue-950
        focus:invalid:border-red-400
        focus:invalid:border-[3px]
        dark:focus:invalid:border-green-500
        '
        required
        name={name}
        value={value}
        onChange={onChange}
        {...rest}
    />

}
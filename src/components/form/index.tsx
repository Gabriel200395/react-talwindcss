import React, { ChangeEvent, useContext } from "react"
import { GlobalContext } from "../../context/GlobalContext"
import { Input } from "../../components"

const Form = () => {

    const { setUser, user, setAuth, auth } = useContext(GlobalContext)

    const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => setUser({ ...user, [e.target.name]: e.target.value })

    const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (user.email && user.name) {
            setAuth(true)
        }
    }

    return (
        <form onSubmit={handleSubmit} className={`${auth && 'hidden'} flex flex-col justify-center items-center h-screen px-5`}>
            <Input name='name' placeholder="nome" value={user.name} onChange={handleChangeInput} />
            <Input name='email' placeholder="E-mail" value={user.email} onChange={handleChangeInput} />
            <button type="submit" className="w-full max-w-sm bg-blue-400 text-white h-10 rounded-full mt-5 hover:animate-pulse">Enviar</button>
        </form>
    )

}


export default Form
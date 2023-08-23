import React, { ChangeEvent, useContext } from "react"
import { GlobalContext } from "../../context/GlobalContext"

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
        <form onSubmit={handleSubmit} className={`${auth && 'hidden'}`}>
            <input name='name' placeholder="nome" value={user.name} onChange={handleChangeInput} />
            <input name='email' placeholder="nome" value={user.email} onChange={handleChangeInput} />
            <button type="submit">Enviar</button>
        </form>
    )

}


export default Form
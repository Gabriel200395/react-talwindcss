import React, { useContext } from "react"
import { articlesItems } from "../../constants/articles"
import { GlobalContext } from "../../context/GlobalContext"

const ArticleItem = ({ text, img }: { text: string, img: string }) => {
    return (
        <div className="bg-slate-200 dark:bg-dark-200  rounded px-10 py-10 flex flex-col items-center justify-center">
            <p className="font-normal text-base text-black dark:text-gray-400 text-left mb-5">{text}</p>
            <img src={img} alt='imagem' />
            {
                img && <span className="sr-only">video sobre alura</span>
            }
        </div>
    )
}

export const ArticlesList = () => {

    const { auth } = useContext(GlobalContext)

    return (
        <div className={`w-full justify-center ${auth ? 'flex' : 'hidden'}`}>
            <div className="grid gap-10 px-10 py-10 md:grid-cols-2  lg:grid-cols-4  max-w-full">

                {
                    articlesItems.map((article, index) => {
                        return <ArticleItem key={index} {...article} />
                    })

                }
            </div>
        </div>
    )
}
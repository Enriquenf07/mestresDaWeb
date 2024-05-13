import { useEffect, useState } from "react"
import { useMyStore } from "../../Store/useMyStore"
import { Navigate, redirect } from "react-router-dom"
import Modal from "../../componets/Modal"
import wanda from '../../assets/wanda.jpeg'
import HeaderTitle from "../../componets/HeaderTitle"
import person from "../../assets/pessoa.jpeg"
import banner from "../../assets/vingadoresBanner.jpeg"
import Carousel from "../../componets/Carousel"

export default function Home() {
    const isUserLoggedIn = useMyStore((state) => state.isUserLoggedIn)
    const isLogged = isUserLoggedIn()
    const [menu, setMenu] = useState(0)
    const [page, setPage] = useState(0)

    if (!isLogged) {
        return <Navigate to="/login" replace />
    }

    return (
        <div className="absolute z-10 flex flex-col w-screen h-screen">
            <div className="flex bg-black z-10 justify-between items-center w-full pt-5 px-12 border-b border-[#ff0000]">
                <HeaderTitle />
                <div className="flex gap-7">
                    <button className={`${menu == 0 ? 'text-white' : 'text-gray-600'} text-3xl font-bold`} onClick={() => {
                        setMenu(0)
                        setPage(0)
                    }}>Personagens</button>
                    <button className={`${menu == 1 ? 'text-white' : 'text-gray-600'} text-3xl font-bold`} onClick={() => {
                        setMenu(1)
                        setPage(0)
                    }}>Filmes</button>
                    <button className={`${menu == 2 ? 'text-white' : 'text-gray-600'} text-3xl font-bold`} onClick={() => {
                        setMenu(2)
                        setPage(0)
                    }}>Hqs</button>
                </div>
                <img src={person} alt="" className="rounded-full w-[5rem] h-[5rem]" />
            </div>

            <div className="w-full fit-content bg-gradient-to-r from-black from-60% overflow-x-hidden  overflow-y-hidden">
                <Carousel page={page} setPage={setPage} section={menu}/>
            </div>
            <img className='fixed -bottom-32 -right-56 -z-10 h-full' src={banner} alt="" />
        </div>
    )
}
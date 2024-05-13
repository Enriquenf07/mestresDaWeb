import { Dispatch, SetStateAction, useState } from "react";
import Card from "../Card";
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";
import useData, { Card as card } from "../../hooks/useData";
import Modal from "../Modal";
import { MdKeyboardArrowDown } from "react-icons/md";



type props = {
    section: number,
    page: number,
    setPage: Dispatch<SetStateAction<number>>
}

export default function Carousel({ section, page, setPage }: props) {
    const { personagens, filmes, hqs, filterFilms } = useData()
    const [open, setOpen] = useState(false)
    const [selected, setSelected] = useState<card>()
    const [filtro, setFiltro] = useState('lancamento')
    const [openFiltro, setOpenFiltro] = useState(false)
    const sections = [
        personagens,
        filmes,
        hqs
    ]


    return (
        <>
            <Modal imgsAdd={selected?.imgs} section={section} img={selected?.capa} nome={selected?.titulo} aparicoes={selected?.aparicoes} descricao={selected?.descricao} avaliacao={selected?.stars} onClose={() => setOpen(false)} open={open} />
            <div className="flex flex-col h-full w-full pt-20 flex-grow">
                {
                    section === 1 && <div className="absolute z-40 bg-black ml-32 flex flex-col border-[#ff0000] border rounded-xl w-fit text-[#ff0000] p-1 px-4 gap-1">
                        {!openFiltro ? <button onClick={() => setOpenFiltro(true)} className="w-full  flex items-center gap-1">{filtro === 'lancamento' ? 'Lançamento' : 'Cronologia'} <MdKeyboardArrowDown style={{ color: '#ff0000' }} /></button> :
                            <>
                                <button onClick={() => setOpenFiltro(false)} className="w-full flex items-center gap-1">{'Filtrar por'} <MdKeyboardArrowDown style={{ color: '#ff0000' }} /></button>
                                <button onClick={() => {
                                    setFiltro('lancamento')
                                    filterFilms('lancamento')
                                    setOpenFiltro(false)
                                }}>Lançamento</button>
                                <button onClick={() => {
                                    setFiltro('cronologia')
                                    filterFilms('cronologia')
                                    setOpenFiltro(false)
                                }}>Cronologia</button>
                            </>
                        }

                    </div>
                }
                <div className="flex w-full px-32 pt-8 gap-7 h-full">
                    <div className="h-full flex items-center">
                        {page > 0 && <button className="h-10" onClick={() => setPage(p => p - 1)}> <FaArrowLeft style={{ color: '#ff0000' }} size={40} /> </button>}
                    </div>
                    <div className="flex gap-28 w-full justify-center pt-14">
                        {sections[section].slice(0 + page, 3 + page).map(i => (
                            <Card titulo={i.titulo} descricao={i.descricao} img={i.capa} onClick={() => {
                                setSelected(i)
                                setOpen(true)
                            }} />
                        ))}
                    </div>
                    <div className="h-full flex items-center">
                        {sections[section].length - page > 3 && <button className="h-10" onClick={() => setPage(p => p + 1)}> <FaArrowRight style={{ color: '#ff0000' }} size={40} /> </button>}
                    </div>

                </div>
            </div>

        </>

    )
}
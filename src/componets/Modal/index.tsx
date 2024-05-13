import { FaStar } from "react-icons/fa6";

type props = {
    img: string,
    nome: string,
    descricao: string,
    avaliacao: number,
    onClose: () => void,
    open: boolean,
    section: number,
    imgsAdd: Array<string>,
    aparicoes: Array<string>
}

export default function Modal({ imgsAdd, section, img, nome, descricao, avaliacao, onClose, open, aparicoes }: props) {
    return (
        <>
            {open && <div className="absolute z-50 h-screen w-screen bg-black bg-opacity-75 top-0 left-0 flex justify-start items-end p-20 pl-32">
                <div className="flex w-[45rem] h-[30rem] bg-gradient-to-r from-[#ff0000] to-[#400e0e] rounded-3xl">
                    <img src={img} alt="" className='rounded-3xl h-full w-[20rem]' />
                    <div className='flex flex-col text-white items-center-center pl-14 pt-28 gap-4'>
                        <h1 className=' font-bold text-3xl'>{nome}</h1>
                        <div>
                            {section === 0 && <h2 className="font-bold">Aparições:</h2>}
                            {
                                aparicoes ? aparicoes.map(i => (
                                    <p>{i}</p>
                                )) :
                                <p>{descricao}</p>
                            }
                        </div>
                        {imgsAdd && (
                            <>
                                <div>
                                    <h2>{section === 2 ? 'Disponivel para compra: ': 'Disponivel em streaming'}</h2>
                                    <div className="flex gap-2">
                                        {imgsAdd.map(i => (
                                            <>
                                                <img className="w-10 h-10 object-cover shadow-lg rounded-xl" src={i} />
                                            </>
                                        ))}
                                    </div>
                                </div>
                            </>
                        )}
                        {section === 0 && <h2 className="font-bold text-2xl">Avaliação dos fãs</h2>}
                        {section != 0 && <h2 className="font-bold text-2xl">Crítica</h2>}
                        <div className="flex gap-1">
                            {Array.from({ length: 5 }, (_, i) => i < avaliacao).map((i) => (
                                <>
                                    {i ? <FaStar style={{ color: "yellow" }} /> : <FaStar style={{ color: "grey" }} />}
                                </>
                            ))}
                        </div>

                    </div>
                    <div className="flex w-20 justify-end h-full items-end pb-5 pr-3 text-white">
                        <button className="border border-white px-2 rounded-full" onClick={onClose}>X</button>
                    </div>
                </div>
            </div>}
        </>
    )
}
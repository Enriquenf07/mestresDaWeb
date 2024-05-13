import cpt from '../../assets/cpt-marvel.jpeg'

type props = {
    titulo: string,
    descricao: string,
    onClick: () => void,
    img: string
}

export default function Card({ titulo, descricao, onClick, img }: props) {

    return (
        <div className='w-[17rem]'>
            <img className='absolute w-[17rem] h-[21.2rem] z-10 rounded-2xl' src={img} alt="" />
            <div className={'absolute z-20 flex items-end h-[21.3rem] rounded-2xl  '}>
                <div className='bg-gradient-to-b from-[#ff0000] to-[rgba(128,0,0,0.66)] h-[12rem] flex flex-col w-[17rem] rounded-2xl items-center justify-between py-5 text-white'>
                    <div className='flex flex-col items-center w-full px-3'>
                        <h1 className='text-xl font-bold'>{titulo}</h1>
                        <p className='text-xs'>{descricao}</p>
                    </div>
                    <button onClick={onClick}>Ver detalhes</button>
                </div>
            </div>
        </div>
    )
}
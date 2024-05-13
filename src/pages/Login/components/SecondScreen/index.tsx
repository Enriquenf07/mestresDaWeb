import banner from '../../../../assets/vingadoresBanner.jpeg'

interface props{
    children?: React.ReactNode
}

export default function SecondScreen({children}: props) {
    return (
        <>
            <div className="z-10 fixed flex container columns-2 w-screen h-screen bg-gradient-to-r from-black from-60%">
                <div className='flex container w-[55%] justify-end p-10'>
                   {children} 
                </div>
            </div>
            <img className='fixed top-0 right-0 z-0 h-full' src={banner} alt="" />
        </>
    )
}
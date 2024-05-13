type props = {
    value: boolean,
    onClick: () => void
    label?: string
}

export default function RadioButton({value, onClick, label}: props) {
    return (
        <div className="flex gap-2 items-center" onClick={onClick}>
            {!value ? <button  className="bg-white w-[1rem] h-[1rem] border-double border-4"/> : <button className="bg-[#ff0000] w-[1rem] h-[1rem] border-double border-4"/>}
            <h2 className="text-[#84848d] start-0">{label}</h2>
        </div>
    )
}
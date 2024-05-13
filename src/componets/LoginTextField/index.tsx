interface props{
    id: string
    label: string
    value: string | number
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    type?: string
}

export default function LoginTextField({id, label, value, onChange, type}: props){
    return(
        <>
            {value != '' && <label htmlFor={id} className="text-white">{label}</label>}
            <input id={id} type={type ? type : "text" } value={value} onChange={onChange} placeholder={label} className="p-4 rounded-full"/> 
        </>
    )
}
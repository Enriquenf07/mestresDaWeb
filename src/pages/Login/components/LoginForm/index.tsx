import { useState } from "react";
import HeaderTitle from "../../../../componets/HeaderTitle";
import LoginTextField from "../../../../componets/LoginTextField";
import { useMyStore } from "../../../../Store/useMyStore";
import { useNavigate } from "react-router-dom";
import RadioButton from "../../../../componets/RadioButton";

type loginForm = {
    user: string
    password: string
}

export default function LoginForm() {
    const setUser = useMyStore(state => state.setUser)
    const navigate = useNavigate()
    const [userForm, setUserForm] = useState<loginForm>({
        user: '',
        password: ''
    })
    const [salvarLogin, setSalvarLogin] = useState(false)

    return (
        <div className="flex justify-center flex-col w-[25rem]">
            <div className="full flex justify-end">
                <HeaderTitle />
            </div>
            <div className="flex flex-col gap-3 w-[80%]">
                <h1 className="text-[#ff0000] text-2xl pl-2">Bem-vindo(a) de volta</h1>
                <h2 className="text-[#84848d]">Acesse sua conta</h2>
                <LoginTextField id="login" label="Login" value={userForm.user} onChange={(e) => setUserForm(p => ({ ...p, user: e.target.value }))} />
                <LoginTextField type='password' id="password" label="Senha" value={userForm.password} onChange={(e) => setUserForm(p => ({ ...p, password: e.target.value }))} />
                <div className="flex justify-between">
                    <RadioButton value={salvarLogin} onClick={() => setSalvarLogin(p => !p)} label="Salvar login" />
                    <p className="text-[#84848d] border-b-2 border-[#ff0000]">Esqueci a senha</p>
                </div>
                <button className="bg-[#ff0000] text-white p-4 rounded-full" onClick={() => {
                    console.log(userForm)
                    setUser(userForm.user)
                    navigate('/')
                }}>Entrar</button>
                <h2 className="text-[#84848d] start-0">Ainda não tem o login? <span className="text-[#ff0000]">Cadastre-se</span></h2>
            </div>
        </div>
    )
}
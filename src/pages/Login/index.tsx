import { useEffect, useState } from "react"
import StartScreen from "./components/StartScreen"
import SecondScreen from "./components/SecondScreen"
import HeaderTitle from "../../componets/HeaderTitle"
import LoginForm from "./components/LoginForm"
import { Navigate } from "react-router-dom"
import { useMyStore } from "../../Store/useMyStore"

export default function Login() {
    const [screen, setScreen] = useState(0)
    const [isStartScreen, setIsStartScreen] = useState(true)
    const isUserLoggedIn = useMyStore((state) => state.isUserLoggedIn)
    const isLogged = isUserLoggedIn()

    const screens = [
        <SecondScreen>
            <div className="flex w-full justify-end items-end h-1/2">
                <HeaderTitle />
            </div>
        </SecondScreen>,
        <SecondScreen>
            <LoginForm/>
        </SecondScreen>
    ]

    useEffect(() => {
        if (screen < 1) {
            const timeoutId = setTimeout(() => {
                isStartScreen ? setIsStartScreen(false) : setScreen(prev => prev + 1);
            }, 500);
            return () => clearTimeout(timeoutId);
        }
    }, [screen, isStartScreen])

    if (isLogged) {
        return <Navigate to="/" replace />
    }

    return (
        <>
            {isStartScreen && <StartScreen/>}
            {screens[screen]}
        </>
    )
}
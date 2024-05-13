import { Route, Routes, redirect } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import { useMyStore } from "../Store/useMyStore";

export default function Router() {
    
    return (
        <>
            <Routes>
                <Route
                    path="/"
                    element={<Home />}
                />
                <Route path="/login" element={<Login />} />
            </Routes>
        </>
    )
}
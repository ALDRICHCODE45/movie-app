import { Routes, Route } from "react-router-dom"
import { MovieRoutes } from '../movies'


export const AppRouter = () => {
    return (

        <>
            <Routes>
                <Route path="/*" element={<MovieRoutes/>} /> 
            </Routes>
        </>

    )
}


import {Routes, Route, Navigate} from "react-router-dom"
import {Movie, MoviePage} from "../pages"

export const MovieRoutes = props => {
    return (

        <>

            <div className="">

                <Routes>

                    <Route path="movies" element={<MoviePage/>}/>

                    <Route path="movies/:id" element={<Movie/>}/>

                    <Route path="/" element={<Navigate to="/movies" />} />

                </Routes>

            </div>

        </>

    )
}


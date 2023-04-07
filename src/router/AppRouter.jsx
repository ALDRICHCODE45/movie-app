import { Routes, Route } from "react-router-dom"
import { MovieRoutes } from '../movies'
import { LoginPage } from "../auth/pages/LoginPage";
import { PrivateRoute } from "./PriveteRoute";
import { PublicRoute } from "./PublicRoute";


export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/login" element={
          <PublicRoute>
            <LoginPage/>
          </PublicRoute>
        } />
        {/* <Route path="login" element={<LoginPage/>} /> */}

        <Route path="/*" element={
          <PrivateRoute>
            <MovieRoutes />
          </PrivateRoute>
        } />

        {/* <Route path="/*" element={<MovieRoutes />} /> */}
      </Routes>
    </>
  );
}


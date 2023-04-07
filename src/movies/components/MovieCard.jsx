import { Link } from "react-router-dom"
import { TARGETA, IMAGEN, ImagenPelicula } from "../styles/styles"

export const MovieCard = ({ imagen, id, title, description, fecha, calificacion }) => {
  return (
    <>
      <div className="movie-item-style-2  animate__animated animate__fadeInDown ">
            <img src={imagen} alt="image " />
        <div className="mv-item-infor">
          <h6> <Link to={`/movies/${id}`} >{title}</Link> <span>({fecha})</span></h6>
          <p className="rate"><i className="ion-android-star"></i><span>{calificacion}</span> /10</p>
          <p className="describe">{description}</p>
          <p className="run-time"> Run Time: 2h21’    .     <span>MMPA: PG-13 </span>    .     <span>Release: {fecha}</span></p>
          <p>Director: <a href="#">Joss Whedon</a></p>
        </div>
      </div>
    </>
  )
}


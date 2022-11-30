import { Link } from "react-router-dom"
import {TARGETA,IMAGEN} from "../styles/styles"

export const MovieCard = ({imagen, id}) => {
    return (
        <>
            <TARGETA>
                <Link to={`/movies/${id}`}>
                    <IMAGEN src={imagen} alt='nada'></IMAGEN>
                </Link>
            </TARGETA>
        </>
    )
}


import {useEffect, useState} from 'react';
import {useParams} from "react-router-dom"
import {GetMovie} from '../../api/GetMovie';
import {Nav} from '../components/Nav';
import {ContenedorMovie, ImagenPelicula, TextoPelicula, DIV, DIV2, IMAGEN2, Titulo, Descripcion} from '../styles/styles';

export const Movie = ()=> {
    const { id } = useParams();
    const [Movie, setMovie] = useState([])
    useEffect(() => {
        
        GetMovie(id).then(val => setMovie(val) )
    }, [id]);

    return(
        <>
            <Nav/>

            <ContenedorMovie>

                <ImagenPelicula>
                    <IMAGEN2 src={`https://image.tmdb.org/t/p/w300${Movie.poster_path}`} alt="no"></IMAGEN2>
                </ImagenPelicula>

                <TextoPelicula>
                    <DIV>
                        <Titulo > Titulo: {Movie.title} </Titulo>
                    </DIV>

                    <DIV2>
                        <Descripcion>
                            {Movie.overview}
                        </Descripcion>
                    </DIV2>

                </TextoPelicula>

            </ContenedorMovie>
        </>
    );
};




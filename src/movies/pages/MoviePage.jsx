import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {MovieCard} from '../components';
import {Nav} from '../components/Nav';
import {getData} from '../store/slices/Movie/thunks';
import {Contenedor, DIVFLEX, } from '../styles/styles';


export const MoviePage = () => {
    const [character, setcharacter] = useState([]);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getData());
    }, []);



    const { data, isloading } = useSelector((state) => state.movieApp);

    useEffect(() => {

        setcharacter(data);

    }, [data]);

    return (
        <>
            <Nav/>


           
            <div>
                {
                    isloading ? <h1>Cargando</h1> : <></>
                }
            </div>
            <DIVFLEX>

                <Contenedor>
                    {
                        character.map(dato => (
                            <MovieCard id={dato.id} imagen={`https://image.tmdb.org/t/p/w300${dato.poster_path}`} key={dato.id} />
                        ))
                    }
                </Contenedor>

            </DIVFLEX>

               
        </>
    )
}


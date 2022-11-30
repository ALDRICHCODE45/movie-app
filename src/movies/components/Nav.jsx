import {ContenedorNav, IMAGEN, Parrafo} from "../styles/styles"
import {Link} from 'react-router-dom';

export const Nav = () => {
    return (
        <>
            <ContenedorNav>
                <Link to={'/'} >
                    <IMAGEN ancho src="https://images.vexels.com/media/users/3/255410/isolated/preview/b994e883d8559f5c2154cd03ee408f58-corte-de-palomitas-de-cine.png"></IMAGEN>


                </Link>

                <Parrafo rojo>
                    MovieApp
                </Parrafo>

            </ContenedorNav>

            <hr />
        </>
    ) 
}


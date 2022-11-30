import styled from "styled-components";

export const Contenedor = styled.div`
    display:grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 70px;
    margin: 10px;
    @media (max-width: 500px) {
        grid-template-columns: 1fr;
  }
`
export const Contenedor2 = styled.div`
    display:grid;
    grid-template-columns: 1fr 1fr;
`
export const ContenedorNav = styled.div`
    display: flex;
    justify-content:center;
`
export const DIVFLEX = styled.div`
    display:flex;
    justify-content:${props => props.end? 'end' : 'center'};
`
export const TARGETA = styled.div`
    width: 270px;
    height:437px;
    padding-top: 20px;
    border-radius: 15px;
    transition: transform .3s; 
    &:hover{
        transform: scale(1.1)
    };
`
export const NavUnlisted = styled.ul`
    background-color: white;
    text-decoration: none;
    list-style: none;
`;
export const Boton = styled.button`
    width:50px;
    height:30px;
    background-color: ${props => props.rojo? 'red' : 'white'};
    color:${props => props.blanco ? 'white' : 'red'};
    cursor: pointer;
    border-radius: 4px;
    border: solid 2px red;

    &:hover{
        box-shadow: 1px 2px 5px rgb(0,0,0,0.3);
    };
`
export const Parrafo = styled.p`
    color: ${props => props.rojo ? 'red' : 'black'};
    font-family:sans-serif;
    font-size: 30px;
    font-weight: bolder;

`
export const IMAGEN = styled.img`
    width: ${props => props.ancho ? '100px' : 'inherit'};
    border-radius:17px;
`
export const IMAGEN2 = styled.img`
    margin-right: 150px;
    max-width: 100%;
    height: auto;
    border-radius:17px;
`
export const ContenedorMovie = styled.div`
    margin-top: 50px;
    display:flex;
`
export const ImagenPelicula = styled.div`
    display: flex;
    justify-content: end;
    width:50%;
`
export const TextoPelicula = styled.div`
    width: 50%;
`
export const DIV = styled.div`
    width: 75%;
    display: flex;
    justify-content:center;
`
export const DIV2 = styled.div`
    width: 75%;
    display:flex;
    justify-content:center;
`
export const Titulo = styled.h1`
    color: ${props => props.red ? 'red' : 'black'};
    font-family: sans-serif;
    font-size: 35px;
    font-weight: bolder;
    text-align:center;
`
export const Descripcion = styled.p`
    font-family:sans-serif;
    font-size: 22px;
    font-weight: bolder;
    color: white;
    text-align:justify 
`

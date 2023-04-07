
const Token = 'https://api.themoviedb.org/'

export const Get = async(path) => {

    const peticion = await fetch(Token + path, {
        headers:{
            Authorization:
    "Bearer eyJhbGciOiJIUzI0NiJ9.eyJhdWQiOiIyNDdmMDAyYzI3NWZkYWZiMzExMTBiYzFmMGVmNThkMCIsInN1YiI6IjYzNjJkMWFkYTZhNGMxMDA3YTg4ODkxOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NddtAQ9Q1GDDLZ7vK-Bc10rxMamqYkExqPA1hHGjY8g ",
            "Content-Type":"application/json;charset=utf-8"
        },
    });

    const result = await peticion.json()
    return result
};





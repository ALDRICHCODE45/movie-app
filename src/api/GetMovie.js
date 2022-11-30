


export const GetMovie = async(id) => {

    const Movie = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=247f002c275fdafb31110bc1f0ef58d0`, {
        headers: {
            Authorization:
                "Bearer eyJhbGciOiJIUzI0NiJ9.eyJhdWQiOiIyNDdmMDAyYzI3NWZkYWZiMzExMTBiYzFmMGVmNThkMCIsInN1YiI6IjYzNjJkMWFkYTZhNGMxMDA3YTg4ODkxOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NddtAQ9Q1GDDLZ7vK-Bc10rxMamqYkExqPA1hHGjY8g ",
            "Content-Type": "application/json;charset=utf-8"
        }
    });

    const data = await Movie.json();

   return data
}




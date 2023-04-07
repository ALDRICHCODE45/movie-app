import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MovieCard } from "../components";
import { getData } from "../store/slices/Movie/thunks";
import { Navbar } from "../../ui/Navbar";
import { Footer } from "../../ui/Fotter";

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
      <div>
        <Navbar  />
        <div className="hero common-hero">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="hero-ct">
                  <h1> MOVIE APP </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="page-single movie_list">
          <div className="container">
            <div className="row ipad-width2">
              <div className="col-md-8 col-sm-12 col-xs-12">
                {character.map((dato) => (
                  <MovieCard
                    id={dato.id}
                    title={dato.title}
                    fecha={dato.release_date}
                    description={dato.overview}
                    imagen={`https://image.tmdb.org/t/p/w200${dato.poster_path}`}
                    calificacion={dato.vote_average}
                    key={dato.id}
                  />
                ))}
              </div>
              <div className="col-md-4 col-sm-12 col-xs-12">
                <div className="sidebar">
                  <div className="searh-form">
                    <h4 className="sb-title">Search for movie</h4>
                    <form className="form-style-1" action="#">
                      <div className="row">
                        <div className="col-md-12 form-it">
                          <label>Movie name</label>
                          <input type="text" placeholder="Enter keywords" />
                        </div>
                        <div className="col-md-12 ">
                          <input
                            className="submit"
                            type="submit"
                            value="submit"
                          />
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

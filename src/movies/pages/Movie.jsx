import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GetMovie } from "../../api/GetMovie";
import { Navbar } from "../../ui/Navbar";
import { Footer } from "../../ui/Fotter";

export const Movie = () => {
  const { id } = useParams();
  const [Movie, setMovie] = useState([]);

  useEffect(() => {
    GetMovie(id).then((val) => setMovie(val));
  }, [id]);

  console.log(Movie)
  return (
    <>
      <Navbar  />
      <div
        className="hero mv-single-hero"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w500${Movie.backdrop_path})`,
        }}
      ></div>
      <div className="page-single movie-single movie_single">
        <div className="container  ">
          <div className="row ipad-width2">
            <div className="col-md-4 col-sm-12 col-xs-12">
              <div className="movie-img sticky-sb  animate__animated animate__fadeInDown">
                <img
                  src={`https://image.tmdb.org/t/p/w400${Movie.poster_path}`}
                  alt=""
                />
                <div className="movie-btn">
                  <div className="btn-transform transform-vertical red">
                    <div>
                      <a href="" className="item item-1 redbtn">
                        <i className="ion-play"></i> Watch Trailer
                      </a>
                    </div>
                    <div>
                      <a
                        href="https://www.youtube.com/watch?v=1gUCu2e_JiM"
                        target="_blank"
                        className="item item-2 redbtn fancybox-media hvr-grow"
                      >
                        <i className="ion-play"></i>
                      </a>
                    </div>
                  </div>
                  <div className="btn-transform transform-vertical">
                    <div>
                      <a href="" className="item item-1 yellowbtn">
                        <i className="ion-card"></i> Buy ticket
                      </a>
                    </div>
                    <div>
                      <a href="#" className="item item-2 yellowbtn">
                        <i className="ion-card"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-8 col-sm-12 col-xs-12 mr-0">
              <div className="movie-single-ct main-content">
                <h1 className="bd-hd">
                  {Movie.title}
                  <span>{Movie.release_date}</span>
                </h1>
                <div className="social-btn">
                  <a href="#" className="parent-btn">
                    <i className="ion-heart"></i> Add to Favorite
                  </a>
                  <div className="hover-bnt">
                    <a href="#" className="parent-btn">
                      <i className="ion-android-share-alt"></i>share
                    </a>
                    <div className="hvr-item">
                      <a href="#" className="hvr-grow">
                        <i className="ion-social-facebook"></i>
                      </a>
                      <a href="#" className="hvr-grow">
                        <i className="ion-social-twitter"></i>
                      </a>
                      <a href="#" className="hvr-grow">
                        <i className="ion-social-googleplus"></i>
                      </a>
                      <a href="#" className="hvr-grow">
                        <i className="ion-social-youtube"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="movie-rate">
                  <div className="rate">
                    <i className="ion-android-star"></i>
                    <p>
                      <span>{Movie.vote_average}</span> /10
                      <br />
                      <span className="rv">56 Reviews</span>
                    </p>
                  </div>
                  <div className="rate-star">
                    <p>Rate This Movie: </p>
                    <i className="ion-ios-star"></i>
                    <i className="ion-ios-star"></i>
                    <i className="ion-ios-star"></i>
                    <i className="ion-ios-star"></i>
                    <i className="ion-ios-star"></i>
                    <i className="ion-ios-star"></i>
                    <i className="ion-ios-star"></i>
                    <i className="ion-ios-star"></i>
                    <i className="ion-ios-star-outline"></i>
                  </div>
                </div>
                <div className="movie-tabs">
                  <div className="tabs">
                    <ul className="tab-links tabs-mv">
                      <li className="active">
                        <a href="#overview">Overview</a>
                      </li>
                    </ul>
                    <div className="tab-content">
                      <div id="overview" className="tab active">
                        <div className="row">
                          <div className="col-md-8 col-sm-12 col-xs-12">
                            <p>{Movie.overview}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

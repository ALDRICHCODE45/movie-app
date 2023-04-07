import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Authcontext } from "../auth/Context/AuthContext";

export const Navbar = ({ topSearch }) => {
  const navigate = useNavigate();
  const { user, logout } = useContext(Authcontext);

  const onLogOut = () => {
    logout();
  };
  const handleLogin = () => {
    navigate("/login", {
      replace: true,
    });
  };
  return (
    <>
      <header className="ht-header">
        <div className="container">
          <nav className="navbar navbar-default navbar-custom">
            <div className="navbar-header logo">
              <div
                className="navbar-toggle"
                data-toggle="collapse"
                data-target="#bs-example-navbar-collapse-1"
              >
                <span className="sr-only">Toggle navigation</span>
                <div id="nav-icon1">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
              <Link to="/movies">
                <img
                  className="logo"
                  src="/images/icono-def.webp"
                  alt=""
                  width="119"
                  height="58"
                />
              </Link>
            </div>
            <div
              className="collapse navbar-collapse flex-parent"
              id="bs-example-navbar-collapse-1"
            >
              <ul className="nav navbar-nav flex-child-menu menu-left">
                <li className="btn signupLink boton-logout" onClick={onLogOut}>
                  {user?.name ? <a>LogOut</a> : <></>}
                </li>
              </ul>
              <ul className="nav navbar-nav flex-child-menu menu-right">
              
                <li className="btn signupLink">{<a>{user.name}</a>}</li>
              </ul>
            </div>
          </nav>
          {topSearch ? (
            <div className="top-search">
              <input
                type="text"
                placeholder="Search for a movie, TV Show or celebrity that you are looking for"
              />
            </div>
          ) : (
            <></>
          )}
        </div>
      </header>
    </>
  );
};

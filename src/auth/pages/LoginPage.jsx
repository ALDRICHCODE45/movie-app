import { useNavigate } from "react-router-dom";
import styles from "./logear.module.css";
import { useFormik } from "formik";
import { Authcontext } from "../Context/AuthContext";
import { useContext } from "react";

export const LoginPage = () => {

  const validate = (values) => {
    const errors = {};
    if (!values.username) {
      errors.username = "Please write a username";
    }
    if(!values.password){
      errors.password = 'please write a password'
    }else if(values.password.length <= 3){
      errors.password = 'password must have more than 3 characters'
    }
      return errors
  }
  const navigate = useNavigate();
  const {login} = useContext( Authcontext );

  const onLogin = (values) => {
    login(values?.username)
  };

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validate ,
    onSubmit: onLogin,
  });
  

  return (
    <>
      <div className="">
        <div className={styles.container}>
          <span className="error animated tada" id="msg"></span>
          <form
            className={styles.box}
            onSubmit={formik.handleSubmit}
          >
            <h4>
            </h4>
            <h5>Sign in to your account.</h5>
            <input type="text" name="username" placeholder="username" onChange={formik.handleChange}/>
            {formik.errors.username? <p className={styles.errors} >{formik.errors.username}</p> : null}
            <i className={styles.typcn} id="eye"></i>
            <input
              type="password"
              name="password"
              onChange={formik.handleChange}
              placeholder="Passsword"
              id="pwd"
            />
            {formik.errors.password? <p className={styles.errors} >{formik.errors.password}</p> : null}
            <input type="submit" value="Sign in" className={styles.btn1} />
          </form>
        </div>
      </div>
    </>
  );
};

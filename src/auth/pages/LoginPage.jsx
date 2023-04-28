import { useDispatch, useSelector } from "react-redux";
import { useForm } from "../../hooks/useForm";
import "./loginPage.css";
import { AiFillGoogleCircle } from "react-icons/ai";
import {
  startLoginWithEmailPassword,
  checkingAuthentication,
  startGoogleSignIn,
} from "../../store/auth/thunks";
import { Link  } from 'react-router-dom'
import { useMemo } from "react";

export const LoginPage = () => {
  const dispatch = useDispatch();
  const { status, errorMessage = 'El usuario no se encuentra registrado'  } = useSelector((state) => state.auth);

  const { email, password, formState, onInputChange } = useForm({
    email: "",
    password: "",
  });
  

  const isAuthenticating = useMemo(() => status === "checking", [status]);

  const onHandleSubmit = (e) => {
    e.preventDefault();
    dispatch(checkingAuthentication());
    dispatch(startLoginWithEmailPassword({ email, password }));
  };

  const onGoogleSignIn = () => {
    dispatch(startGoogleSignIn());
  };

  return (
    <div className="login toDos_general_Container" id="login">
      <div className="login_container">
        <div>
          <h2>Login</h2>
          <form onSubmit={onHandleSubmit}>
            <div className="login_input_box">
              <input
                type="email"
                name="email"
                placeholder="Correo Electronico"
                value={email}
                onChange={onInputChange}
              />
            </div>
            <div className="login_input_box">
              <input
                type="password"
                name="password"
                placeholder="Contraseña"
                value={password}
                onChange={onInputChange}

              />
            </div>
              { !errorMessage &&  <p style={{color:'red' , paddingBottom:'10px' }}>{ errorMessage }</p>}
            <div className="login_buttons">
              <button type="submit" disabled={isAuthenticating}>
                Login
              </button>
              <button onClick={onGoogleSignIn} disabled={isAuthenticating}>
                <AiFillGoogleCircle
                  style={{ color: "#000000", margin: "0px 5px 0px 0px" }}
                />
                Google
              </button>
            </div>
          </form>
        </div>
        <div className="anchor_redirection">
          <span>¿ No tienes una cuenta ? </span>
          <Link to={'/auth/register'}>Ingresa</Link>
        </div>
      </div>
    </div>
  );
};

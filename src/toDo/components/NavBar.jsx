import { FiLogOut } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { startLogout } from "../../store/auth/thunks";

export const NavBar = () => {

    const dispatch = useDispatch()
    
    const { displayName } = useSelector(state => state.auth)

    const onLogout = () => {
         dispatch(startLogout())
    }


  return (
    <div className="header_container">
      <div>
        <h1>ToDo App</h1>
      </div>
      <div className="header_logout">
        <h3>{ displayName  }</h3>
        <FiLogOut onClick={onLogout} style={{ color: "e25555", fontSize: "20px" }} />
      </div>
    </div>
  );
};

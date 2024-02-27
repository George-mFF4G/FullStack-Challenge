import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
// import { logInOut } from "../store/authSlice";

interface Props {
  component: React.ComponentType;
  path?: string;
}

export const RequireAuth: React.FC<Props> = ({ component: RouteComponent }) => {
  const { isLoggedIn } = useSelector(
    (state: { auth: { isLoggedIn: boolean } }) => state.auth
  );

  //   if (isLoggedIn) {
  //     return <RouteComponent />;
  //   }
  //   return <Navigate to="/" />;

  //   {
  //     isLoggedIn ? return (<RouteComponent />) : return <Navigate to="/" />;
  //   }

  return isLoggedIn ? <RouteComponent /> : <Navigate to="/" />;
};

export default RequireAuth;

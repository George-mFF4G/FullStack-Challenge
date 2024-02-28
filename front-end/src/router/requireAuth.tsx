import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

interface Props {
  component: React.ComponentType;
  path?: string;
}

export const RequireAuth: React.FC<Props> = ({ component: RouteComponent }) => {
  const { isLoggedIn } = useSelector(
    (state: { auth: { isLoggedIn: boolean } }) => state.auth
  );
  return isLoggedIn ? <RouteComponent /> : <Navigate to="/" />;
};

export default RequireAuth;

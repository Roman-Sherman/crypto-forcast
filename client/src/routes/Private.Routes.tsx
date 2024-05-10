import { Navigate, Outlet } from "react-router";
import { useSelector } from "src/store/Store";

const PrivateRoute = () => {
    const isAuthenticated = useSelector(state => state.authReducer.isAuthenticated);

    if (isAuthenticated) {
        return <Outlet />;
    } else {
        return <Navigate to="/auth/sign-in" />;
    }
}

export default PrivateRoute;
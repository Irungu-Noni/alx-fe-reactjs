import { Navigate } from "react-router-dom";
// import { getIsAuthenticator } from "../authenticator";
import { useAuth } from "../hooks/useAuth";

function ProtectionRoute({ children }) {
    const { isAuthenticated } = useAuth();

    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }
    return children;    
};

export default ProtectionRoute;
import { Navigate } from "react-router-dom";
import { getIsAuthenticator } from "../authenticator";

function ProtectionRoute({ children }) {
    if (!getIsAuthenticator()) {
        return <Navigate to="/login" replace />;
    }
    return children;    
};

export default ProtectionRoute;
import { useEffect } from "react";
import Router from "next/router";   // ✅ default import
import { isAuth } from "../../actions/auth";

const Admin = ({ children }) => {
    useEffect(() => {
        if (!isAuth()) {
            Router.push("/signin");
        } else if (isAuth().role !== 1) {
            Router.push("/");
        }
    }, []);

    // ✅ React.Fragment ki jagah shorthand syntax
    return <>{children}</>;
};

export default Admin;

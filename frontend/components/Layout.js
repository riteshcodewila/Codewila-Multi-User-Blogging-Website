import React from "react";
import Header from "./Header";
const Layout = ({children}) => {
  return <React.Fragment>
    <Header/>
    {children}
    <p>Footer Section</p>

  </React.Fragment>;
};
export default Layout;
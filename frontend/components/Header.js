import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { APP_NAME } from "../config";
import { signout, isAuth } from "../actions/auth";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
} from "reactstrap";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [auth, setAuth] = useState(null); // client-side auth state
  const router = useRouter();

  const toggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    setAuth(isAuth()); // run only on client
  }, []);

  const handleSignout = () => {
    signout(() => {
      setAuth(null); // clear auth state
      router.push("/signin"); // redirect after logout
    });
  };

  return (
    <Navbar color="light" light expand="md" className="px-3 shadow-sm">
      <NavbarBrand href="/">{APP_NAME}</NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ms-auto" navbar>
          {/* Not authenticated */}
          {!auth && (
            <>
              <NavItem>
                <Link href="/signup" passHref legacyBehavior>
                  <NavLink>Signup</NavLink>
                </Link>
              </NavItem>
              <NavItem>
                <Link href="/signin" passHref legacyBehavior>
                  <NavLink>Signin</NavLink>
                </Link>
              </NavItem>
            </>
          )}

          {/* Authenticated users */}
          {auth && (
            <>
              {auth.role === 1 && (
                <NavItem>
                  <NavLink style={{ cursor: "pointer" }} onClick={handleSignout}>
                    Admin Signout
                  </NavLink>
                </NavItem>
                
              )}
              {auth.role === 1 && (
                <NavItem>
                  <NavLink>
                    {`${isAuth().name}'s Dashboard }`}
                  </NavLink>
                </NavItem>
                
              )}
              {auth.role === 0 && (
                <NavItem>
                  <NavLink style={{ cursor: "pointer" }} onClick={handleSignout}>
                    User Signout
                  </NavLink>
                </NavItem>
              )}
              {auth.role === 0 && (
                <NavItem>
                  <NavLink>
                    {`${isAuth().name}'s Dashboard }`}
                  </NavLink>
                </NavItem>
                
              )}
            </>
          )}

        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default Header;

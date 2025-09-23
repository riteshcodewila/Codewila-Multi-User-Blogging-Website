// import React, { useState } from "react";
// import Link from "next/link";
// import { APP_NAME } from "../config";
// import {
//   Collapse,
//   Navbar,
//   NavbarToggler,
//   NavbarBrand,
//   Nav,
//   NavItem,
//   NavLink,
//   UncontrolledDropdown,
//   DropdownToggle,
//   DropdownMenu,
//   DropdownItem,
//   NavbarText,
// } from "reactstrap";

// const Header = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const toggle = () => setIsOpen(!isOpen);

//   return (
//     <Navbar color="light" light expand="md" className="px-3 shadow-sm">
//       <NavbarBrand href="/">{APP_NAME}</NavbarBrand>
//       <NavbarToggler onClick={toggle} />
//       <Collapse isOpen={isOpen} navbar>
//         {/* 👇 ab ye right side me chale jayenge */}
//         <Nav className="ms-auto" navbar>
//           <NavItem>
//             <Link href="/components" passHref legacyBehavior>
//               <NavLink>Components</NavLink>
//             </Link>
//           </NavItem>

//           <NavItem>
//             <Link href="/signup" passHref legacyBehavior>
//               <NavLink>Signup</NavLink>
//             </Link>
//           </NavItem>
//           <NavItem>
//             <NavLink>
//               <Link href="/signup">Signup</Link>
//             </NavLink>
//           </NavItem>
//           <UncontrolledDropdown nav inNavbar>
//             <DropdownToggle nav caret>
//               Options
//             </DropdownToggle>
//             <DropdownMenu end>
//               <DropdownItem>Option 1</DropdownItem>
//               <DropdownItem>Option 2</DropdownItem>
//               <DropdownItem divider />
//               <DropdownItem>Reset</DropdownItem>
//             </DropdownMenu>
//           </UncontrolledDropdown>
//           {/* NavbarText ko bhi Nav ke andar daal diya */}
//           <NavbarText className="ms-3">Simple Text</NavbarText>
//         </Nav>
//       </Collapse>
//     </Navbar>
//   );
// };

// export default Header;


import React, { useState } from "react";
import Link from "next/link";
import { APP_NAME } from "../config";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar color="light" light expand="md" className="px-3 shadow-sm">
      <NavbarBrand href="/">{APP_NAME}</NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ms-auto" navbar>
          <NavItem>
            <Link href="/components" passHref legacyBehavior>
              <NavLink>Components</NavLink>
            </Link>
          </NavItem>

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

          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
              Options
            </DropdownToggle>
            <DropdownMenu end>
              <DropdownItem>Option 1</DropdownItem>
              <DropdownItem>Option 2</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>Reset</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>

          <NavbarText className="ms-3">Simple Text</NavbarText>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default Header;

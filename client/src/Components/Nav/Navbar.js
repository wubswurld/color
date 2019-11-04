import React, { useState } from "react";
import Icon from "../../Components/svg";
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
  DropdownItem
} from "reactstrap";

const BasicNav = props => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="#fbfbfb" light expand="md">
        <NavbarBrand href="/" className="hvr-grow">
          <Icon id="icon"></Icon>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem id="navitem">
              {/* <bold>here</bold> */}
              {/* <NavLink href="/components/">Components</NavLink> */}
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default BasicNav;

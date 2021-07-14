import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  UncontrolledTooltip,
} from "reactstrap";

const Headerbar = () => {
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");

  // React.useEffect(() => {
  //     const updateNavbarColor = () => {
  //       if (
  //         document.documentElement.scrollTop > 399 ||
  //         document.body.scrollTop > 399
  //       ) {
  //         setNavbarColor("");
  //       } else if (
  //         document.documentElement.scrollTop < 400 ||
  //         document.body.scrollTop < 400
  //       ) {
  //         setNavbarColor("navbar-transparent");
  //       }
  //     };
  //     window.addEventListener("scroll", updateNavbarColor);
  //     return function cleanup() {
  //       window.removeEventListener("scroll", updateNavbarColor);
  //     };
  //   });
  return (
    <>
      {collapseOpen ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setCollapseOpen(false);
          }}
        />
      ) : null}

      <Navbar className='header' color="light" expand="lg">
        <Container >
          <Collapse
            className="justify-content-center"
            isOpen={collapseOpen}
            navbar
          >
            <Nav navbar>
              <NavItem>
                <div  className="search bg-light">
                   <i className="fa fa-search serachIcon"></i>
                  <input type="text" className="searchInput" />
                 
                </div>
              </NavItem>
              <NavItem>
                <NavLink href="#">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Features</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Travel</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Pages</NavLink>
              </NavItem>

              <NavItem>
                <NavLink href="#">Shop</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Contact</NavLink>
              </NavItem>

              <NavItem>
                <NavLink href="#" target="_blank" id="cart-tooltip">
                  <i className="fa fa-shopping-cart  px-3"></i>
                  <p className="d-lg-none d-xl-none">My Cart</p>
                </NavLink>
                <UncontrolledTooltip target="#cart-tooltip">
                  My Cart content
                </UncontrolledTooltip>
              </NavItem>

              <UncontrolledDropdown className="button-dropdown py-2 px-3">
                <DropdownToggle
                  
                  data-toggle="dropdown"
                  href="#"
                  id="navbarDropdown"
                  tag="a"
                  onClick={(e) => e.preventDefault()}
                >
                  <i class="fa fa-bars " aria-hidden="true"></i>
                  {/* <span className="button-bar"></span>
                  <span className="button-bar"></span>
                  <span className="button-bar"></span> */}
                </DropdownToggle>
                <DropdownMenu aria-labelledby="navbarDropdown">
                  <DropdownItem header tag="a">
                    Dropdown header
                  </DropdownItem>
                  <DropdownItem href="#" onClick={(e) => e.preventDefault()}>
                    Action
                  </DropdownItem>
                  <DropdownItem href="#" onClick={(e) => e.preventDefault()}>
                    Another action
                  </DropdownItem>
                  <DropdownItem href="#" onClick={(e) => e.preventDefault()}>
                    Something else here
                  </DropdownItem>
                  <DropdownItem divider></DropdownItem>
                  <DropdownItem href="#" onClick={(e) => e.preventDefault()}>
                    Separated link
                  </DropdownItem>
                  <DropdownItem divider></DropdownItem>
                  <DropdownItem href="#" onClick={(e) => e.preventDefault()}>
                    One more separated link
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Headerbar;

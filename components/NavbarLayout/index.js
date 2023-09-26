import { Dropdown } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Avatar1 from "../../public/images/avatar-1.jpg";
import Avatar2 from "../../public/images/avatar-2.jpg";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
import { ROUTES } from "../../utils/constant";
import {
  decodeJwtToken,
  getFirstTwoNames,
  getJwtToken,
  removeLoginSession,
} from "../../utils/utilization";

function NavbarLayout() {
  const router = useRouter();
  const handleLogout = () => {
    removeLoginSession();
    router.push(ROUTES.LOGIN());
  };
  const decode = decodeJwtToken(getJwtToken());
  return (
    <Navbar
      expand="lg"
      style={{
        boxShadow: "-10px -10px 30px 0 #fff, 10px 10px 30px 0 #1d0dca17",
      }}
    >
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/* <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link> */}
          </Nav>
          <Dropdown className="drp-user">
            <Dropdown.Toggle
              variant="link"
              id="dropdown-basic"
              className="text-decoration-none d-flex align-items-center"
            >
              <Image
                src={Avatar1}
                width={50}
                height={50}
                className="img-radius m-r-15"
                alt="User Profile"
              />
              <div className="ms-4 text-black">
                Hi, {getFirstTwoNames(decode?.name) || ""}
              </div>
            </Dropdown.Toggle>
            <Dropdown.Menu className="text-center">
              <div
                onClick={handleLogout}
                className="dud-logout cursor-pointer"
                title="Logout"
              >
                <i className="feather icon-log-out">Logout</i>
              </div>
            </Dropdown.Menu>
          </Dropdown>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarLayout;

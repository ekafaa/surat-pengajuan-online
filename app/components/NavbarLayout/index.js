import { Dropdown } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Avatar1 from "../../../public/images/avatar-1.jpg";
import Avatar2 from "../../../public/images/avatar-2.jpg";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";

function NavbarLayout() {
  const router = useRouter();
  const handleLogout = () => {
    router.push("/auth/login");
  };
  return (
    <Navbar
      expand="lg"
      style={{
        boxShadow: "-10px -10px 30px 0 #fff, 10px 10px 30px 0 #1d0dca17",
      }}
    >
      <Container>
        <Link href="/">
          <Image
            src={Avatar2}
            width={50}
            height={50}
            className="img-radius m-r-10"
            alt="User Profile"
          />
        </Link>
        <h4>Logo</h4>
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
              className="text-decoration-none "
            >
              <Image
                src={Avatar1}
                width={50}
                height={50}
                className="img-radius m-r-15"
                alt="User Profile"
              />
              <span className="m-r-15 text-black">Hi, Eka</span>
            </Dropdown.Toggle>
            <Dropdown.Menu className="text-center">
              {/* <span>Logout</span> */}
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

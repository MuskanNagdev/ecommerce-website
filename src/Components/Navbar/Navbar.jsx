import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


function CustomNavbar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid style={{background:'white'}}>
        <Navbar.Brand href="#" style={{fontWeight:'bolder', fontSize:'2rem', fontFamily: "'Mulish', sans-serif", color:'blue' }}> <i><u> Style Attire </u></i></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '400px'}}
            navbarScroll
          >
            {/* <Nav.Link href="#action2">Link</Nav.Link> */}
            <NavDropdown title="New in" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Women</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Men
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Ready to Wear
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Women" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Ready to Wear</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Unstitched
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Western
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Men" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Shalwar Kameez</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Kurta
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Shirts/T-shirts
              </NavDropdown.Item>
            </NavDropdown>

            {/* <Nav.Link href="#" disabled>
              Link
            </Nav.Link> */}
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;

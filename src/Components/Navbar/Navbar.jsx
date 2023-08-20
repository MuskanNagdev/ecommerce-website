import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navbar.css'
import NavDropdown from 'react-bootstrap/NavDropdown';


function CustomNavbar() {
  return (
    <>
    <Navbar expand="lg" className="body-tertiary" style={{height:'4rem', backgroundColor:'white', color:'white'}}>
      <Container fluid style={{background:'white'}}>
        <Navbar.Brand href="#" style={{fontWeight:'bolder', fontSize:'3rem', fontFamily: "'Mulish', sans-serif", color:'black', marginLeft:'2rem', marginTop:'0.5rem' }}>  S A P P H I R E </Navbar.Brand>
        
        
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '400px'}}
            navbarScroll
          >

            {/* <Nav.Link href="#" disabled>
              Link
            </Nav.Link> */}
          </Nav>
          <Form className="d-flex" style={{marginRight:'36rem', width:'42rem', height:'3rem', marginTop:'1rem'}}>
            <Form.Control
              type="search"
              placeholder="Find Your Favorites"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        
      </Container>
      {/* <hr style={{ margin: 0 , color:'black'}} />  */}
      
    </Navbar>
    <div className="navbar-divider"></div> 
    </>
  );
}

export default CustomNavbar;

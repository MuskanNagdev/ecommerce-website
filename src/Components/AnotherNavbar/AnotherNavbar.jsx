import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './AnotherNavbar.css'
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink, Link} from 'react-router-dom';
import Women from '../Women/Women';

function AnotherNavbar() {
  return (
    <>
    <Navbar expand="lg" className="body-tertiary" style={{height:'5rem', backgroundColor:'white', color:'white'}}>
      <Container fluid style={{background:'white'}}>
        {/* <Navbar.Brand href="#" style={{fontWeight:'bolder', fontSize:'2rem', fontFamily: "'Mulish', sans-serif", color:'blue' }}> <i><u> Style Attire </u></i></Navbar.Brand> */}
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '400px', marginLeft: '45rem'}}
            navbarScroll
          >
           
            {/* <Nav.Link href="#action2">Link</Nav.Link> */}
            <NavDropdown title="New in" id="navbarScrollingDropdown" style={{ fontSize:'1.2rem'}}>
              <NavDropdown.Item><NavLink to ="/Women" className='custom-navlink'>Women</NavLink></NavDropdown.Item>
              <NavDropdown.Item >
              <NavLink to ="/Shirts" className='custom-navlink'>Men</NavLink>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item >
              <NavLink to ="/Women" className='custom-navlink'>Ready to Wear</NavLink>
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Women" id="navbarScrollingDropdown" style={{fontSize:'1.2rem'}}>
              <NavDropdown.Item ><NavLink to ="/Women" className='custom-navlink'>Ready to Wear</NavLink></NavDropdown.Item>
              <NavDropdown.Item>
              <NavLink to ="/Unstitched" className='custom-navlink'>Unstitched</NavLink>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item >
              <NavLink to ="/Western" className='custom-navlink'>Western</NavLink>
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Men" id="navbarScrollingDropdown" style={{fontSize:'1.2rem'}}>
              <NavDropdown.Item ><NavLink to ="/ShalwarKameez" className='custom-navlink'>Shalwar Kameez</NavLink></NavDropdown.Item>
              <NavDropdown.Item >
              <NavLink to ="/Kurta" className='custom-navlink'>Kurta</NavLink>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item >
              <NavLink to ="/Shirts" className='custom-navlink'>Shirts / T-Shirts</NavLink>
              </NavDropdown.Item>
            </NavDropdown>

            {/* <Nav.Link href="#" disabled>
              Link
            </Nav.Link> */}
          </Nav>
        
        </Navbar.Collapse>
      </Container>
      {/* <hr style={{ margin: 0 , color:'black'}} />  */}
      
    </Navbar>
    {/* <div className="navbar-divider"></div>  */}
    </>
  );
}

export default AnotherNavbar;

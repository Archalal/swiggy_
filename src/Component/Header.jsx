import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



function Header() {
  return (
    <div>
      


      <Navbar style={{backgroundColor:"white",color:"black"}}>
        <Container>
        <Navbar.Brand href="#home">
            <img
              alt=""
              src="https://logos-world.net/wp-content/uploads/2020/11/Swiggy-Logo-700x394.png"
              width="90"
              height="50"
              className="d-inline-block align-top"
            />{' '}
           
          </Navbar.Brand>
          <Nav className=""style={{gap:"50px",letterSpacing:"1px",fontSize:"15px",fontWeight:"bold"}}>
            <Nav.Link href="#home">Swiggy Corporate</Nav.Link>
            <Nav.Link href="#features">Search</Nav.Link>
            <Nav.Link href="#pricing">Offers</Nav.Link>
            <Nav.Link href="#pricing">Help</Nav.Link>
            <Nav.Link href="#pricing">Sign In</Nav.Link>
            <Nav.Link href="#pricing">Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

        <h3 style={{textAlign:"center",margin:"20px"}}>Top Restaurant chains</h3>


    </div>
  )
}

export default Header

import React, {useState} from 'react'
import { Hamburger, Logo, Menu, MenuLink, Nav } from './NavbarStyled'

const Navbar = () => {
  const [open, setOpen] = useState(false)
  return (
    <Nav>
      <Logo onClick={()=>setOpen(!open)} to="/home">
        <i>{"<RecepGüç>"}</i>
        <span>recipe</span>
        <Hamburger onClick={()=>setOpen(!open)}>
          <span/>
          <span/>
          <span/>
        </Hamburger>
      </Logo>
      <Menu open={open}>
        <MenuLink onClick={()=>setOpen(!open)} to="/abaout">About</MenuLink>
        <MenuLink to="/github">Github</MenuLink>
        <MenuLink onClick={()=>setOpen(!open)} to="/Logout">Logout</MenuLink>
      </Menu>
    </Nav>
    
       
    
  )
}

export default Navbar
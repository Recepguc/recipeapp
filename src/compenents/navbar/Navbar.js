import React, {useState} from 'react'
import { Hamburger, Logo, Menu, MenuLink, Nav } from './NavbarStyled'

const Navbar = () => {
  const [open, setOpen] = useState(false)
  return (
    <Nav>
      <Logo to="/home">
        <i>{"<RecepGüç>"}</i>
        <span>recipe</span>
        <Hamburger onClick={()=>setOpen(!open)}>
          <span/>
          <span/>
          <span/>
        </Hamburger>
      </Logo>
      <Menu open={open}>
        <MenuLink to="/abaout">About</MenuLink>
        <MenuLink to="/github">Github</MenuLink>
        <MenuLink to="/Logout">Logout</MenuLink>
      </Menu>
    </Nav>
    
       
    
  )
}

export default Navbar
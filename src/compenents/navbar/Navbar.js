import React, { useState } from "react";
import { Hamburger, Logo, Menu, MenuLink, Nav } from "./NavbarStyled";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [github, setGithub] = useState("");
  return (
    <Nav>
      <Logo onClick={() => setOpen(!open)} to="/home">
        <i>{"<RecepGüç>"}</i>
        <span>recipe</span>
      </Logo>
      <Hamburger onClick={() => setOpen(!open)}>
        <span />
        <span />
        <span />
      </Hamburger>

      <Menu open={open}>
        <MenuLink onClick={() => setOpen(!open)} to="/about">
          About
        </MenuLink>
        <MenuLink
          onClick={() =>
            setGithub((window.location.href = "https://github.com/Recepguc"))
          }
          to={github}
          target="_blank"
        >
          Githubb
        </MenuLink>

        <MenuLink
          onClick={() => setOpen(!open)}
          onMouseUp={() => sessionStorage.clear()}
          to="/"
        >
          Logout
        </MenuLink>
      </Menu>
    </Nav>
  );
};

export default Navbar;

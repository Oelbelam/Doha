import React from "react";
import { useState } from "";
import {
  Logo,
  NavBarContainer,
  NavBarGroup,
  NavBarItem,
  NavBarLogo,
  NavBarSubItems,
} from "../styles/NavBar.ui";

function NavBar() {
  const [isHovering, setIsHovering] = useState(false);
  const navbargroup1 = [
    { title: "Accueil", hasChild: true, childs: ["item1", "item2", "item2"] },
    { title: "Accueil", hasChild: true, childs: ["item1", "item2", "item2"] },
    { title: "Accueil", hasChild: true, childs: ["item1", "item2", "item2"] },
    { title: "Accueil", hasChild: true, childs: ["item1", "item2", "item2"] },
  ];
  const navbargroup2 = [
    { title: "Accueil", hasChild: true, childs: ["item1", "item2", "item2"] },
    { title: "Accueil", hasChild: true, childs: ["item1", "item2", "item2"] },
    { title: "Accueil", hasChild: true, childs: ["item1", "item2", "item2"] },
    { title: "Accueil", hasChild: true, childs: ["item1", "item2", "item2"] },
    { title: "Accueil", hasChild: true, childs: ["item1", "item2", "item2"] },
  ];
  return (
    <NavBarContainer>
      <NavBarGroup>
        {navbargroup1.map((item) => {
          return (
            <NavBarItem>
              {item.title}
              {item.hasChild && <NavBarSubItems>{item.childs}</NavBarSubItems>}
            </NavBarItem>
          );
        })}
      </NavBarGroup>
      <NavBarLogo>Logo</NavBarLogo>
      <NavBarGroup>
        {navbargroup2.map((item) => {
          return (
            <NavBarItem>
              {item.title}
              {item.hasChild && <NavBarSubItems>{item.childs}</NavBarSubItems>}
            </NavBarItem>
          );
        })}
      </NavBarGroup>
    </NavBarContainer>
  );
}

export default NavBar;

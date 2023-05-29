import React, { useState } from "react";
import * as S from "./Navbar.styles";

const Navbar = () => {
  const [showMenuBurguer, setShowMenuBurguer] = useState(false);

  const clickItemNav = (item) => {
    
    document.getElementById(item).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <S.ContainerNavbar>
      <S.ContainerLogo>
        <div>
          <h1>Darío Salazar</h1>
          <h2>Frontend Developer</h2>
        </div>
      </S.ContainerLogo>

      <S.ContainerBurguer onClick={() => setShowMenuBurguer(!showMenuBurguer)}>
        <S.BurguerMenu />
        <S.BurguerMenu />
        <S.BurguerMenu />
      </S.ContainerBurguer>

      <S.ContainerItems showMenuBurguer={showMenuBurguer}>
        <p onClick={() => clickItemNav("about-me")}>About me</p>
        <p onClick={() => clickItemNav("projects")}>Projects</p>
        <S.Button onClick={() => clickItemNav("contact")}>
           Contact me
        </S.Button>
      </S.ContainerItems>
    </S.ContainerNavbar>
  );
};

export default Navbar;

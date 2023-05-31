import React from "react";

import logoGithub from "../../svg/github.svg";
import logoLinkedin from "../../svg/linkedin.svg";
import * as S from "./AboutMe.styles";

const AboutMe = () => {
  const socialNetworks = [
    {
      name: "Github",
      link: "https://github.com/DarioAlbertoSalazar",
      logo: logoGithub,
    },
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/dar%C3%ADo-alberto-salazar-leal-6212ab7b/",
      logo: logoLinkedin,
    },
  ];

  return (
    <S.ContainerAboutMe id="about-me">
      <S.ContainerFlex>
        <S.ContainerText>
          <S.Title>
            <p>Hello, i'm</p>
            <p>Darío Salazar</p>
            <p>Frontend Developer</p>
          </S.Title>
          <S.DescriptionText>
            As a front-end web developer with experience in Angular and ReactJS, I have
            been able to improve my social skills, adapt to changes, and solve
            problems through my participation in various areas. Additionally, I
            have improved my UI design skills by working with Bootstrap,
            tailwind, and ng-zorro. I am committed to continuous learning and
            improvement of my technical and communication skills to bring value
            to any team I work with.
          </S.DescriptionText>
          <S.ContainerIcons>
            {socialNetworks.map((network, index) => (
              <a
                key={index}
                href={network.link}
                target="__blank"
                rel="noreferrer"
              >
                <img src={network.logo} alt={network.name} />
              </a>
            ))}
          </S.ContainerIcons>
        </S.ContainerText>
      </S.ContainerFlex>
    </S.ContainerAboutMe>
  );
};

export default AboutMe;

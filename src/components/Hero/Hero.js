import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const btnClick = () => {
  window.open("https://www.google.com");
};

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Taevon Jordan <br />
          Software Engineer <br />
        </SectionTitle>
        <SectionText>
          Hello and welcome to my software engineering portfolio! Here, you can
          learn about me and view my latest projects.
        </SectionText>
        <Button onClick={btnClick}>Learn More</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;

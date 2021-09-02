import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const btnClick = () => {
  window.open(
    "https://drive.google.com/file/d/1G8VJ1XTc1Rxc21PCNHSdM2q7b4lwX2qQ/view?usp=sharing"
  );
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
          learn a bit about me and view my latest projects.
        </SectionText>
        <Button onClick={btnClick}>Learn More</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;

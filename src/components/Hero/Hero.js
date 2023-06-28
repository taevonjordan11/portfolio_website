import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

// const btnClick = () => {
//   window.open(
//     "resume link"
//   );
// };

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Taevon Jordan <br />
          Software Engineer <br />
        </SectionTitle>
        <SectionText>
          Welcome to my portfolio. Here, you can
          learn about me and view my latest projects.
        </SectionText>
        <Button>Learn More</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;

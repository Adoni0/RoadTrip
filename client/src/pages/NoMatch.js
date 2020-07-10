import React from "react";
import { Section, Container } from "../components/Grid";

function NoMatch() {
  return (
    <Container>
      <Section page={true}>
        <h1>
          404 Page Not Found
          <span role="img" aria-label="Face With Rolling Eyes Emoji">
            🙄
          </span>
        </h1>
      </Section>
    </Container>
  );
}

export default NoMatch;

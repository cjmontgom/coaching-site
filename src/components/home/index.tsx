import React, { Fragment } from "react";
import {
  MobileLogo,
  WelcomeImage,
  WelcomeSection,
  WelcomeText
} from "../../styles/home/home.styles";
import {
  Body,
  BodyWrapper,
  Section,
  Header
} from "../../styles/main.styles";
import allison from "../../images/allison.png";
import logo from "../../images/logo.png";
import Review from "./review";
import Form from "./form";

class Home extends React.PureComponent {
  render() {
    return (
      <Fragment>
        <MobileLogo src={logo} />
        <BodyWrapper>
          <WelcomeSection>
            <WelcomeText>
              <Header>WELCOME</Header>
              <Body welcomeText={true}>
                Allison Tash Montgomery <br />
                (aka Montashery) is a coach who's passionate about helping
                people find freedom, joy and hope!
              </Body>
            </WelcomeText>
            <WelcomeImage
              src={allison}
              alt="A photo of Allison sitting on a green chair."
            />
          </WelcomeSection>

          <Section>
            <Header>ABOUT</Header>
            <Body>
              As a coach, Allison is committed to journeying alongside people as
              they discover more of who they are and how they can step into a
              more hope-filled future. She specialises in coaching individuals
              and groups exploring themes around{" "}
              <strong>gender, sexuality & spirituality</strong>, drawing on both
              her personal story (being a queer woman of faith) and her
              educational background (she holds a Bachelors degree in Theology
              and a Masters degree in Gender Studies).
            </Body>
          </Section>

          <Section>
            <Header>WORKING WITH ALLISON</Header>
            <Body>
              Allison offers both in-person coaching sessions in Spitalfields,
              London and online via phone or zoom. International clients are
              very much welcome.
              <br />
              <strong>Pricing operates on a sliding scale based on what the client can
                afford.</strong>
            </Body>
          </Section>

          <Review />

          <Section>
            <Header>NEXT STEPS</Header>
            <Body>
              If you're interested in working with Allison, pop your details
              below. She'll be in touch to schedule a 30 minute discovery chat,
              and you can see if working together might be right for you.
            </Body>
          </Section>

          <Form />
        </BodyWrapper>
      </Fragment>
    );
  }
}

export default Home;

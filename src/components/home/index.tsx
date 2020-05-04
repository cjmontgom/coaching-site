import React, {Fragment} from "react";
import {Image, WelcomeSection, WelcomeText} from "../../styles/home/home.styles";
import {Body, Section, SubHeader} from "../../styles/main.styles";
import allison from "../../images/allison.png";
import Form from "./form";
import Review from "./review";

class Home extends React.PureComponent {
  render() {
    return (
      <Fragment>
        <WelcomeSection>
          <WelcomeText>
            <SubHeader>WELCOME</SubHeader>
            <Body welcomeText={true}>
              Allison Tash Montgomery <br />
              (aka Montashery) is a coach who's passionate about helping people
              find freedom, joy and hope!
            </Body>
          </WelcomeText>
          <Image
            src={allison}
            alt="A photo of Allison sitting on a green chair."
          />
        </WelcomeSection>

        <Section>
          <SubHeader>ABOUT</SubHeader>
          <Body>
            As a coach, Allison is committed to journeying alongside people as
            they discover more of who they are and how they can step into a more
            hope-filled future. She specialises in coaching individuals and
            groups exploring themes around{" "}
            <strong>gender, sexuality & spirituality</strong>, drawing on both
            her personal story (being a queer woman of faith) and her
            educational background (she holds a Bachelors degree in Theology and
            a Masters degree in Gender Studies).
          </Body>
        </Section>

        <Section>
          <SubHeader>WORKING WITH ALLISON</SubHeader>
          <Body>
            Allison offers both in-person coaching sessions in Spitalfields,
            London and online via phone or zoom. International clients are very
            much welcome.
            <br />
            Pricing operates on a sliding scale based on what the client can
            afford.
          </Body>
        </Section>

        <Review />

        <Section>
          <SubHeader>NEXT STEPS</SubHeader>
          <Body>
            If you're interested in working with Allison, pop your details
            below. She'll be in touch to schedule a 30 minute discovery chat,
            and you can see if working together might be right for you.
          </Body>
        </Section>

        <Form />
      </Fragment>
    );
  }
}

export default Home;

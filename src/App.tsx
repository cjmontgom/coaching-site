import React from "react";
import {
  Body,
  FormWrapper,
  Header,
  HeaderColourBlock,
  HeaderWrapper,
  Image,
  Logo,
  ReviewQuotation,
  ReviewText,
  ReviewWrapper,
  Section,
  SubHeader,
  WelcomeSection,
  WelcomeText,
  Wrapper
} from "./App.styles";
import logo from "./images/logo.png";
import allison from "./images/allison.png";
import quotationLeft from "./images/quotationLeft.png";
import quotationRight from "./images/quotationRight.png";
import Form from "./Form";

class App extends React.PureComponent {
  render() {
    return (
      <Wrapper>
        <Logo src={logo} alt="logo" />

        <HeaderWrapper>
          <Header>MONTASHERY COACHING</Header>
          <HeaderColourBlock />
        </HeaderWrapper>

        <WelcomeSection>
          <WelcomeText>
            <SubHeader>WELCOME</SubHeader>
            <Body welcomeText={true}>
              Allison Tash Montgomery <br />
              (aka Montashery) is a coach who's passionate about helping people find
              freedom, joy and hope!
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

        <ReviewWrapper>
          <ReviewQuotation src={quotationLeft} alt="Quotation marks." />
          <ReviewText>
            Allison instantly puts me at ease and creates a safe space to speak
            freely and work through whatever is on my mind. In our sessions I
            have been exploring spirituality and faith, as well as navigating
            the confusion involved in accepting my sexuality. Allison has a
            unique ability to listen and respond with guidance and thought
            provoking insights. This is really helping me to find the clarity I
            am searching for and I always leave with a lighter heart and a
            lifted spirit.
            <br />
          </ReviewText>
          <ReviewQuotation
            endQuote={true}
            src={quotationRight}
            alt="Quotation marks."
          />
        </ReviewWrapper>

        <Section>
          <SubHeader>NEXT STEPS</SubHeader>
          <Body>
            If you're interested in working with Allison, pop your details
            below. She'll be in touch to schedule a 30 minute discovery chat,
            and you can see if working together might be right for you.
          </Body>
        </Section>

        <FormWrapper>
          <SubHeader>GET IN TOUCH</SubHeader>
          <Form />
        </FormWrapper>
      </Wrapper>
    );
  }
}

export default App;

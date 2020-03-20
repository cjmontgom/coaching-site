import React from "react";
import {
  FormSection,
  FormWrapper,
  Header,
  HeaderColourBlock,
  HeaderWrapper,
  Image,
  Logo,
  NormalTextBlock,
  PageBreakImage,
  PageBreakImageWrapper,
  Section,
  Span,
  SubHeader,
  WelcomeSection,
  Wrapper
} from "./App.styles";
import logo from "./images/logo.png";
import abstractFace from "./images/abstractFace.png";
import allison from "./images/allison.png";
import Form from "./Form";

class App extends React.PureComponent {
  render() {
    return (
      <Wrapper>
        <Logo src={logo} alt="logo" />

        <HeaderWrapper>
          <Header>
            M O N T A S H E R Y<Span>C O A C H I N G</Span>
          </Header>
          <HeaderColourBlock />
        </HeaderWrapper>

        <WelcomeSection>
          <div>
            <SubHeader>W E L C O M E</SubHeader>
            <NormalTextBlock>
              Allison Tash Montgomery <br />
              (aka Montashery) is a coach passionate about helping people find
              freedom, joy and hope!
            </NormalTextBlock>
          </div>
          <Image
            src={allison}
            alt="A photo of Allison sitting on a green chair."
          />
        </WelcomeSection>

        <Section>
          <SubHeader>A B O U T</SubHeader>
          <NormalTextBlock>
            Allison specialises in coaching individuals and groups exploring
            themes around <strong>gender, sexuality & spirituality</strong>.
            Drawing on both her personal story (being a queer woman of faith)
            and her educational background (she has a Bachelors degree in
            Theology and a Masters degree in Gender Studies) she is committed to
            journeying alongside people as they discover more of who they are
            and how they can step into a more hope-filled future.
          </NormalTextBlock>
        </Section>

        <Section>
          <SubHeader>
            W O R K I N G<Span>W I T H</Span>
            <Span>A L L I S O N</Span>
          </SubHeader>
          <NormalTextBlock>
            Allison offers both in-person coaching sessions located in
            Spitalfields, London and online via phone or skype. International
            clients are very much welcome.
            <br />
            <br />
            Pricing operates on a sliding scale based on what the client can
            afford.
          </NormalTextBlock>
        </Section>

        <Section>
          <SubHeader>
            N E X T<Span>S T E P S</Span>
          </SubHeader>
          <NormalTextBlock>
            Interested in exploring working with Allison? Pop your details below
            and we can schedule a 30 minute discovery chat to see if working
            together might be right for you.
          </NormalTextBlock>
        </Section>

        <PageBreakImageWrapper>
          <PageBreakImage
            src={abstractFace}
            alt="A line drawing of a woman's face"
          />
        </PageBreakImageWrapper>

        <FormWrapper>
          <SubHeader>
            G E T<Span>I N</Span>
            <Span>T O U C H</Span>
          </SubHeader>

          <FormSection>
            <Form />
          </FormSection>
        </FormWrapper>
      </Wrapper>
    );
  }
}

export default App;

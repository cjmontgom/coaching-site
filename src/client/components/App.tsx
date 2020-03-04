import React from "react";
import {
  Body,
  Button,
  FormSection,
  FormWrapper,
  Header,
  HeaderColourBlock,
  HeaderWrapper,
  Logo,
  Section,
  SubHeader,
  Wrapper
} from "./App.styles";
import logo from "../images/logo.png";

class App extends React.PureComponent {
  render() {
    return (
      <Wrapper>
        <Logo src={logo} alt="logo" />
        <HeaderWrapper>
          <Header>Montashery Coaching</Header>
          <HeaderColourBlock />
        </HeaderWrapper>
        <Body>
          <Section>
            Allison founded Montashery Coaching because she identified a need
            for (ipiusefh ifuhnsdf jhnsfsdf hsdfn sd uhsndnfhas udfnkjhsfa ygh
            sfhfgh fsuyhdfsbnfsh vsgydf bdsjhfguyhsd bsdhf uysdbuhdhdsl uh ).
          </Section>
          <Section>
            <strong>
              She specialises is coaching individuals who are exploring themes
              of gender, sexuality or spirituality.
            </strong>
          </Section>
          <Section>
            As your coach, Allison is committed to journeying alongside you as
            you discover what brings freedom and joy to your life.
            <br />
            The goal is for you to identify what steps you can take toward a
            more hope-filled future.
          </Section>
          <Section>
            <SubHeader>Pricing</SubHeader>
            Pricing is on a sliding scale, dependant on what you can afford.
            <br />
            Fill in the form below to learn more about working with Allison!
          </Section>
          <FormWrapper>
            <SubHeader>GET IN TOUCH</SubHeader>

            <FormSection>
              Contact form: First Name Last Name Email Phone Number Message
            </FormSection>
            <Button>Send</Button>
          </FormWrapper>
        </Body>
      </Wrapper>
    );
  }
}

export default App;

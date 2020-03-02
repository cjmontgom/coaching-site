import React from 'react';
import styled from 'styled-components'


const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

class App extends React.PureComponent {

  render() {
    return (
      <div>
          <Title>Montashery Coaching</Title>
          
        Allison is passionate about helping people to find freedom, joy, and hope.

        She specialises in coaching individuals who are exploring the themes of gender, sexuality, or spirituality.

        She especially enjoys coaching people through explorations of their relationships with gender, sexuality, and spirituality. (can change the wording if you want)

        As your coach, Allison is committed to journeying alongside you as you discover what brings you freedom, where you can find joyfulness, and what steps you can take toward a more hope-filled future.

        Get in touch now to learn more about working with Allison!

        Contact form:
        First Name
        Last Name
        Email
        Phone Number
        Message
      </div>
    );
  }
}

export default App;

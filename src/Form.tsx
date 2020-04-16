import React, { useState } from "react";
import axios from "axios";
import { Body, Button, StyledForm, TextArea, TextInput } from "./App.styles";

// add types

function Form() {

  const [serverState, setServerState] = useState({
    submitting: false,
    status: null
  });

  const handleServerResponse = (ok, msg, form) => {
    setServerState({
      submitting: false,
      status: { ok, msg }
    });
    ok ? form.reset() : console.log(msg);
  };

  const handleOnSubmit = e => {
    e.preventDefault();
    const form = e.target;
    setServerState({ submitting: true });
    axios({
      method: "post",
      url: "https://formspree.io/mvoqbjzr",
      data: new FormData(form)
    })
      .then(r => {
        handleServerResponse(true, "Success! Your message has been sent.", form);
      })
      .catch(r => {
        handleServerResponse(false, r.response.data.error, form);
      });
  };

  return (
    <StyledForm onSubmit={handleOnSubmit}>
      <Body>Name</Body>
      <TextInput name="name" required />

      <Body>Email</Body>
      <TextInput type="email" name="email" required />

      <Body>Phone number (including country code)</Body>
      <TextInput name="phone" required />

      <Body>Message</Body>
      <TextArea name="message" required></TextArea>

      <Button type="submit" disabled={serverState.submitting}>
        Send
      </Button>
      {serverState.status && (
        <Body centered={true}>
          {serverState.status.ok
            ? serverState.status.msg
            : "Sorry, there was a problem and your message wasn't sent. Please email montasherycoaching@gmail.com"}
        </Body>
      )}
    </StyledForm>
  );
}

export default Form;

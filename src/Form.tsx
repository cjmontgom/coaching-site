import React, {useState} from "react";
import axios from "axios";
import {Body, Button, StyledForm, TextArea, TextInput} from "./App.styles";

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
    if (ok) {
      form.reset();
    }
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
        handleServerResponse(true, "Thanks!", form);
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
      <TextInput
        name="phone"
        required
      />

      <Body>Message</Body>
      <TextArea name="message" required></TextArea>

      <Button type="submit" disabled={serverState.submitting}>
        Send
      </Button>
      {serverState.status && (
        <p className={!serverState.status.ok ? "errorMsg" : ""}>
          {serverState.status.msg}
        </p>
      )}
    </StyledForm>
  );
}

export default Form;

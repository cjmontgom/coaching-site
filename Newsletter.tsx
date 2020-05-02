import React, { useState } from "react";

function NewsletterSignup() {
    const [email, setEmail] = useState('');

    const handleEmailChange = (e) => {
        e.preventDefault();
        console.log('handle email change...' + JSON.stringify(e.target.value));
        setEmail(e.target.value)
    };
  //
  // const handleServerResponse = (ok, msg, form) => {
  //   setServerState({
  //     submitting: false,
  //     status: { ok, msg }
  //   });
  //   ok ? form.reset() : console.log(msg);
  // };
  const handleSubmit = e => {
    e.preventDefault();
    console.log('email handle submit ' + JSON.stringify(email));
    const data = new FormData();
    data.append('email', email);
    fetch("http://localhost:8000/signup", {
      method: "POST",
      body: data
    }).then(res => {
      console.log('res from server ' + JSON.stringify(res));
    });
  };

  return (
    <form>
      <h2>Sign Up For The Montashery Coaching Fortnightly Newsletter</h2>
      <div>
        <label>Email Address</label>
        <input type="email" name="email" onChange={handleEmailChange} />
      </div>
      <div>
        <button onClick={handleSubmit}>subscribe</button>
      </div>
    </form>
  );
}

export default NewsletterSignup;

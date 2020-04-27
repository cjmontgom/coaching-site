import React from "react";

function NewsletterSignup() {



  return (

      <form
          action="/signup"
          method="POST"
      >
          <h2>Sign Up For The Montashery Coaching Fortnightly Newsletter</h2>
          <div>
            <label>Email Address</label>
            <input type="email" name="email" />
          </div>
          <div>
            <button
              type="submit">subscribe</button>
          </div>
      </form>

  );
}

export default NewsletterSignup;

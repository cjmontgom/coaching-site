import React from "react";
import axios from "axios";

function NewsletterSignup() {
  const handleOnSubmit = (e) => {
    e.preventDefault();
    // Mailchimp List ID
    let mcListId = "f6e9d549ae";

    // My Mailchimp API Key
    let API_KEY = "90f558876113ebf9af929f702156068d-us19";

    // Mailchimp identifies users by the md5 has of the lowercase of their email address (for updates / put / patch)
    //let mailchimpEmailId = md5(values["unsubscribe-email-address"].toLowerCase());

    var postData = {
      email_address: "someone@gmailmail.com",
      status: "subscribed"
    };

    // Configure headers
    let axiosConfig = {
      headers: {
        authorization:
          "Basic " + Buffer.from("randomstring:" + API_KEY).toString("base64"),
        Accept: "application/json",
        "Content-Type": "application/json",
          cache: false,
          dataType: "jsonp"
      }
    };

    try {
      let mcResponse = axios.post(
        "https://us12.api.mailchimp.com/3.0/lists/" + mcListId + "/members" + "&amp;id=f6e9d549ae&c=?",
        postData,
        axiosConfig
      );
      console.log("Mailchimp List Response: ", mcResponse);
    } catch (err) {
      console.log("Mailchimp Error: ", err);
      console.log("Mailchimp Error: ", err["response"]["data"]);
    }
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <div>
        <label>Email Address</label>
        <input type="email" name="EMAIL" id="mce-EMAIL" />
      </div>
      <div>
        <button
          type="submit"
          value="Subscribe"
          name="subscribe"
          id="mc-embedded-subscribe"
        >Subscribe</button>
      </div>
    </form>
  );

  // return (
  //   <div id="mc_embed_signup">
  //     <form
  //       action="https://montasherycoaching.us19.list-manage.com/subscribe/post?u=a1fd8ce468ce9602cd50b92a6&amp;id=f6e9d549ae"
  //       method="post"
  //       id="mc-embedded-subscribe-form"
  //       name="mc-embedded-subscribe-form"
  //       class="validate"
  //       target="_blank"
  //     >
  //       <div id="mc_embed_signup_scroll">
  //         <h2>Sign Up For The Montashery Coaching Fortnightly Newsletter</h2>
  //         <div>
  //           <label>Email Address</label>
  //           <input type="email" name="EMAIL" id="mce-EMAIL" />
  //         </div>
  //         <div>
  //           <label>First Name </label>
  //           <input type="text" name="FNAME" id="mce-FNAME" />
  //         </div>
  //         <div>
  //           <label>Last Name </label>
  //           <input type="text" name="LNAME" id="mce-LNAME" />
  //         </div>
  //         <div id="mce-responses" className="clear">
  //           <div
  //             className="response"
  //             id="mce-error-response"
  //             display="none"
  //           ></div>
  //           <div
  //             className="response"
  //             id="mce-success-response"
  //             display="none"
  //           ></div>
  //         </div>
  //         <div aria-hidden="true">
  //           <input type="text" name="b_a1fd8ce468ce9602cd50b92a6_f6e9d549ae" />
  //         </div>
  //         <div>
  //           <button
  //             type="submit"
  //             value="Subscribe"
  //             name="subscribe"
  //             id="mc-embedded-subscribe"
  //           />
  //         </div>
  //       </div>
  //     </form>
  //   </div>
  // );
}

export default NewsletterSignup;

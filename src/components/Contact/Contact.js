import React, { useState } from "react";
import { send } from "emailjs-com";

const Contact = ({ id }) => {
  const [Success, setSuccess] = useState(false);
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [PhoneNo, setPhoneNo] = useState("");
  const [Message, setMessage] = useState("");
  const chngHandler = (event) => {
    switch (event.target.id) {
      case "name":
        setName(event.target.value);
        break;
      case "email":
        setEmail(event.target.value);
        break;
      case "phone":
        setPhoneNo(event.target.value);
        break;
      case "message":
        setMessage(event.target.value);
        break;
      default:
    }
  };

  const toSend = {
    from_name: Name,
    to_name: "Murtaza",
    phone_no: PhoneNo,
    message: `<p style="white-space: pre-line;">${Message}</p>`,
    reply_to: Email,
  };

  const submitValues = (e) => {
    e.preventDefault();
    // window.open(`mailto:er.murtuzakhachrod@gmail.com?subject=subject&body=" Name ":${Name} " Phone No ":${PhoneNo} " Message ":${Message}`);
    send(
      "service_ydstah5",
      "template_n4mliyk",
      toSend,
      "user_u9080d0n2iVE5FdRcmGXE"
    )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        setSuccess(true);
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });
  };

  const showMessage = Name =>
    (<p style={{color: "green", textAlign: "center"}}><i className="fas fa-check-circle"></i> Thank you {Name} for getting in touch! Contact you soon...</p>);

  const contactForm = () => (
    <form name="sentMessage" id="contactForm" onSubmit={submitValues}>
        <div className="control-group">
        <div className="form-group floating-label-form-group controls mb-0 pb-2">
            <label>Name</label>
            <input
            onChange={chngHandler}
            className="form-control"
            id="name"
            type="text"
            placeholder="Name"
            value={Name}
            required="required"
            data-validation-required-message="Please enter your name."
            />
            <p className="help-block text-danger"></p>
        </div>
        </div>
        <div className="control-group">
        <div className="form-group floating-label-form-group controls mb-0 pb-2">
            <label>Email Address</label>
            <input
            onChange={chngHandler}
            className="form-control"
            id="email"
            type="email"
            placeholder="Email Address"
            value={Email}
            required="required"
            data-validation-required-message="Please enter your email address."
            />
            <p className="help-block text-danger"></p>
        </div>
        </div>
        <div className="control-group">
        <div className="form-group floating-label-form-group controls mb-0 pb-2">
            <label>Phone Number</label>
            <input
            onChange={chngHandler}
            className="form-control"
            id="phone"
            type="tel"
            placeholder="Phone Number"
            value={PhoneNo}
            required="required"
            data-validation-required-message="Please enter your phone number."
            />
            <p className="help-block text-danger"></p>
        </div>
        </div>
        <div className="control-group">
        <div className="form-group floating-label-form-group controls mb-0 pb-2">
            <label>Message</label>
            <textarea
            onChange={chngHandler}
            className="form-control"
            id="message"
            rows="5"
            placeholder="Message"
            value={Message}
            required="required"
            data-validation-required-message="Please enter a message."
            ></textarea>
            <p className="help-block text-danger"></p>
        </div>
        </div>
        <br />
        <div id="success"></div>
        <div className="form-group">
        <button className="btn btn-primary btn-xl" type="submit">
            Send
        </button>
        </div>
    </form>
  );
 
  return (
    <section className="page-section" id={id}>
      <div className="container">
        <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">
          Contact Me
        </h2>
        <div className="divider-custom">
          <div className="divider-custom-line"></div>
          <div className="divider-custom-icon">
            <i className="fas fa-star"></i>
          </div>
          <div className="divider-custom-line"></div>
        </div>
        <div className="row">
          <div className="col-lg-8 mx-auto">
            {Success ? showMessage(Name) : contactForm()}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

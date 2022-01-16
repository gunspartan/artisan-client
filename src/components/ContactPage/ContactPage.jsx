import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
// import emailjs from "emailjs-com";
import handleValidation from "./FormValidation";

export default function ContactPage() {
  let submitMessage = "";
  const over = "Over $15,000";
  const between = "$10,000 - $14,999";
  const under = "Under $10,000";

  const [emailContent, setEmailContent] = useState({
    userName: "",
    userEmail: "",
    projectDesc: "",
    serviceType: "",
    budget: "",
    timeline: "",
  });

  const [formErrors, setFormErrors] = useState({});

  const sendEmail = async (email) => {
    await axios
      .post("/api/inquiries", email)
      .then((result) => {
        submitMessage = "Email sent!";
        console.log(submitMessage);
        toastSuccess();
      })
      .catch((error) => {
        submitMessage = "An error ouccred";
        console.log(error);
        toastError();
      });

    // Post again to EmailJS
    // await axios
    //   .post("/email", email, {
    //     headers: {
    //       "Content-Type": "application/x-www-form-urlencoded",
    //     },
    //   })
    //   .then((result) => {
    //     submitMessage = "Email sent";
    //     console.log(submitMessage);
    //     toastSuccess();
    //   })
    //   .catch((error) => {
    //     submitMessage = "Email not sent";
    //     console.log(error);
    //     toastError();
    //   });
  };

  function handleSubmit() {
    const [validated, errors] = handleValidation(emailContent);
    if (validated) {
      sendEmail(emailContent);
    } else {
      submitMessage = "There are errors in the form";
      console.log(submitMessage, errors);
      toastError();
    }

    setFormErrors(errors);
  }

  function handleChange(event) {
    const { name, value } = event.target;

    setEmailContent((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  function toastError() {
    toast.error(submitMessage, {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }
  function toastSuccess() {
    toast.success(submitMessage, {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }

  return (
    <div className="dark-bg">
      <div className="container ContactPage">
        <div className="contact-title">
          <h1>Contact Us</h1>
          <hr />
        </div>
        <div className="contact-content">
          <div className="contact-subheading">
            <h1>Lets get down to business</h1>
            <p>
              Answer this short survery so that we know what we're working with.
            </p>
          </div>
          <div className="contact-form-container">
            <form name="contact-form">
              <div className="question">
                <h2>What is your budget?</h2>
                <h2 className="errors">{formErrors["budget"]}</h2>
                <div className="radios">
                  <div className="radio-wrapper">
                    <input
                      className="btn-check"
                      onChange={handleChange}
                      type="radio"
                      name="budget"
                      value="Over $15,000"
                      id="over"
                      required
                    />
                    <label className="radio form-label" htmlFor="over">
                      {over}
                    </label>
                  </div>
                  <div className="radio-wrapper">
                    <input
                      className="btn-check"
                      onChange={handleChange}
                      type="radio"
                      name="budget"
                      value="$10,000 - $14,999"
                      id="between"
                      required
                    />
                    <label className="radio form-label" htmlFor="between">
                      {between}
                    </label>
                  </div>
                  <div className="radio-wrapper">
                    <input
                      className="btn-check"
                      onChange={handleChange}
                      type="radio"
                      name="budget"
                      value="Under $10,000"
                      id="under"
                      required
                    />
                    <label className="radio form-label" htmlFor="under">
                      {under}
                    </label>
                  </div>
                </div>
              </div>
              <div className="question">
                <h2>Which services are you looking for?</h2>
                <h2 className="errors">{formErrors["serviceType"]}</h2>
                <div className="radios">
                  <div className="radio-wrapper">
                    <input
                      className="btn-check"
                      onChange={handleChange}
                      type="radio"
                      name="serviceType"
                      value="Refinish"
                      id="refinish"
                      required
                    />
                    <label className="radio form-label" htmlFor="refinish">
                      Refinish
                    </label>
                  </div>
                  <div className="radio-wrapper">
                    <input
                      className="btn-check"
                      onChange={handleChange}
                      type="radio"
                      name="serviceType"
                      value="Resurface"
                      id="resurface"
                      required
                    />
                    <label className="radio form-label" htmlFor="resurface">
                      Resurface
                    </label>
                  </div>
                  <div className="radio-wrapper">
                    <input
                      className="btn-check"
                      onChange={handleChange}
                      type="radio"
                      name="serviceType"
                      value="Custom Design"
                      id="custom"
                      required
                    />
                    <label className="radio form-label" htmlFor="custom">
                      Custom Design
                    </label>
                  </div>
                </div>
              </div>

              <div className="question">
                <h2>Describe your project</h2>
                <h2 className="errors">{formErrors["projectDesc"]}</h2>
                <textarea
                  className="form-control"
                  onChange={handleChange}
                  value={emailContent.projectDesc}
                  name="projectDesc"
                  cols="100"
                  rows="5"
                ></textarea>
              </div>
              <div className="question">
                <h2>What is your timeline?</h2>
                <h2 className="errors">{formErrors["timeline"]}</h2>
                <textarea
                  className="form-control"
                  onChange={handleChange}
                  name="timeline"
                  value={emailContent.timeline}
                  cols="100"
                  rows="5"
                ></textarea>
              </div>
              <div className="question">
                <h2>How do we get in touch with you?</h2>
                <h2 className="errors">{formErrors["name"]}</h2>
                <div className="contact-info">
                  <label htmlFor="userName form-label">Name</label>
                  <input
                    className="form-control"
                    onChange={handleChange}
                    type="text"
                    name="userName"
                    value={emailContent.userName}
                    required
                  />
                </div>

                <h2 className="errors">{formErrors["email"]}</h2>
                <div className="contact-info">
                  <label htmlFor="userEmail form-label">Email</label>
                  <input
                    className="form-control"
                    onChange={handleChange}
                    type="email"
                    name="userEmail"
                    value={emailContent.userEmail}
                    required
                  />
                </div>
              </div>
            </form>
            <button
              type="submit"
              className="submit-button"
              onClick={handleSubmit}
            >
              <div className="btn-submit">
                <h1>Submit</h1>
                <i className="fas fa-caret-right"></i>
              </div>
              <hr />
            </button>
            <ToastContainer />
          </div>
        </div>
      </div>
    </div>
  );
}

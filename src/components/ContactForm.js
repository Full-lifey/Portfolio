import React, { useState } from "react";
import axios from "axios";

import "./ContactForm.scss";

import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBBtn,
  MDBCardBody
} from "mdbreact";

const ContactForm = props => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    text: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log("submitting!!!");
    console.log(form);
    e.target.className += " was-validated";
    axios
      .post("https://joel-perez-portfolio-be.herokuapp.com/api/emails", form)
      .then(res => {
        setForm({
          name: "",
          from: "",
          phone: "",
          text: ""
        });
        setSubmitted(!submitted);
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div className="contact-form-wrapper">
      <MDBContainer>
        <MDBRow>
          <MDBCol>
            <MDBCardBody>
              <form onSubmit={e => handleSubmit(e)}>
                <p className="h2 text-center py-4">Contact Me</p>
                <MDBInput
                  id="name"
                  label="Your Name"
                  // icon="user"
                  group
                  type="text"
                  error="wrong"
                  success="right"
                  name="name"
                  size="lg"
                  value={form.name}
                  onChange={e => handleChange(e)}
                />
                <MDBInput
                  id="email"
                  label="Your Email"
                  // icon="envelope"
                  group
                  type="email"
                  error="wrong"
                  success="right"
                  name="from"
                  size="lg"
                  value={form.from}
                  onBlur={e => (e.target.className += " was-validated")}
                  onChange={e => handleChange(e)}
                >
                  <div className="invalid-feedback">
                    Please provide a valid email.
                  </div>
                  <div className="valid-feedback">Looks good!</div>
                </MDBInput>
                <MDBInput
                  id="phone"
                  label="Your Phone"
                  // icon="user"
                  group
                  type="text"
                  error="wrong"
                  success="right"
                  name="phone"
                  size="lg"
                  value={form.phone}
                  onChange={e => handleChange(e)}
                />

                <MDBInput
                  id="text"
                  label="Your Message"
                  // icon="pen-fancy"
                  group
                  type="textarea"
                  name="text"
                  size="lg"
                  value={form.text}
                  onChange={e => handleChange(e)}
                />
                <div className="text-center mt-3">
                  <div className={submitted ? "success" : "hidden"}>
                    Form submitted successfully. You will hear back from me in
                    less than 24 hours.
                  </div>
                  <MDBBtn
                    id="contact-Submit-btn"
                    // color="winter-neva-gradient"
                    size="lg"
                    type="submit"
                    // gradient="winter-neva-gradient"
                    className="winter-neva-gradient"
                  >
                    Submit
                  </MDBBtn>
                </div>
              </form>
            </MDBCardBody>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
};

export default ContactForm;

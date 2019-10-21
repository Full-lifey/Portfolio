import React, { useState } from "react";

import "./ContactForm.scss";

import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBBtn,
  MDBCard,
  MDBCardBody
} from "mdbreact";

const ContactForm = props => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    body: ""
  });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log("submitting!!!");
    e.target.className += " was-validated";
  };

  return (
    <div className="contact-form-wrapper">
      <MDBContainer>
        <MDBRow>
          <MDBCol>
            <MDBCard>
              <MDBCardBody>
                <form onSubmit={e => handleSubmit(e)} noValidate>
                  <p className="h4 text-center py-4">Contact Me</p>
                  <MDBInput
                    id="name"
                    label="Your name"
                    // icon="user"
                    group
                    type="text"
                    error="wrong"
                    success="right"
                    name="email"
                    size="lg"
                    value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })}
                  />
                  <MDBInput
                    id="email"
                    label="Your email"
                    // icon="envelope"
                    group
                    type="email"
                    error="wrong"
                    success="right"
                    name="email"
                    size="lg"
                    value={form.email}
                    onBlur={e => (e.target.className += " was-validated")}
                    onChange={e => handleChange(e)}
                  >
                    <div className="invalid-feedback">
                      Please provide a valid email.
                    </div>
                    <div className="valid-feedback">Looks good!</div>
                  </MDBInput>

                  <MDBInput
                    id="body"
                    label="Your message"
                    // icon="pen-fancy"
                    group
                    type="textarea"
                    name="body"
                    size="lg"
                    value={form.body}
                    onChange={e => handleChange(e)}
                  />
                  <div className="text-center mt-3">
                    <MDBBtn
                      id="contact-Submit-btn"
                      color="primary"
                      size="lg"
                      type="submit"
                    >
                      Submit
                    </MDBBtn>
                  </div>
                </form>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
};

export default ContactForm;

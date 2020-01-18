import React from "react";
import "./Contact.scss";
import Form from "./Form/Form";
import Socials from "../../components/common/Socials/Socials"

function Contact() {
  return (
    <div className="contact container">
      <Form />
      <Socials/>
    </div>
  );
}

export default Contact;

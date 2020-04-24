import React from "react";
import Form from "./Form/Form";
import Socials from "../../components/common/Socials/Socials"
import "./Contact.scss";

function Contact() {
  return (
    <div className="contact container">
      <Form />
      <Socials/>
    </div>
  );
}

export default Contact;

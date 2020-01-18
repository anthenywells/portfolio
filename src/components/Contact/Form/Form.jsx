import React, { useState } from "react";
import * as emailjs from "emailjs-com";
import "./Form.scss";

function Form() {
  const initialState = {
    name: "",
    email: "",
    message: ""
  };
  const [formState, setFormState] = useState(initialState);

  const handleSubmit = _ => {
    const templateId = "nope";
    let templateParams = {
      to_name: "nope",
      subject: formState.name,
      from_name: formState.email,
      message_html: formState.message
    };

    sendFeedback(templateId, templateParams);
  };

  const sendFeedback = (templateId, templateParams) => {
    emailjs
      .send(
        "default_service",
        templateId,
        templateParams,
        "no ya dont"
      )
      .then(res => {
        console.log("Email successfully sent!");
      })
      .catch(err =>
        console.error(
          "Oh well, you failed. Here some thoughts on the error that occured:",
          err
        )
      );
  };

  return (
    <form className="form">
      {Object.keys(initialState).splice(0,2).map(key => {
        return (
          <div className={"form__" + key}>
            <h2>{key}</h2>
            <input
              type="text"
              onChange={e => setFormState({ [key]: e.target.value })}
              placeholder={key}
              required
              value={formState[key]}
            />
          </div>
        );
      })}
      <div className="form__textbox">
        <h2>Message</h2>
        <textarea
          onChange={e => setFormState({ message: e.target.value })}
          placeholder="Tell me something cool"
          required
          value={formState.message}
        />
      </div>
      <input
        type="button"
        value="Submit"
        className="button"
        onClick={handleSubmit}
      />
    </form>
  );
}

export default Form;

import React, { useState } from "react";
import * as emailjs from "emailjs-com";
import "./Form.scss";
import {toTitleCase} from "../../../utils/utils"
import {templateId, userName, userId} from "../../../utils/keys"

function Form() {
  const initialState = {
    name: "",
    email: "",
    message: ""
  };
  const [formState, setFormState] = useState(initialState);

  const handleSubmit = _ => {
    let templateParams = {
      from_email: formState.email,
      to_name: userName,
      from_name: formState.name,
      message_html: formState.message
    };
    sendFeedback(templateId, templateParams);
  };

  const sendFeedback = (templateId, templateParams) => {
    setFormState(initialState);
    emailjs
      .send(
        "default_service",
        templateId,
        templateParams,
        userId
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
      {Object.keys(initialState)
        .splice(0, 2)
        .map(key => {
          return (
            <div className={"form__" + key} key={key}>
              <h2>{key}</h2>
              <input
                name={key}
                type={key === "email" ? "email" : "text"}
                onChange={e =>
                  setFormState({
                    ...formState,
                    [e.target.name]: e.target.value
                  })
                }
                placeholder={toTitleCase(key)}
                required
                value={formState[key]}
              />
            </div>
          );
        })}
      <div className="form__textbox">
        <h2>Message</h2>
        <textarea
          onChange={e =>
            setFormState({ ...formState, message: e.target.value })
          }
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

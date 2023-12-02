import React, { useRef } from "react";
import "./Form.css";

const Form = () => {
  const userNameRef = useRef(null);
  const phoneNumberRef = useRef(null);
  const emailRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      userName: userNameRef.current.value,
      phoneNumber: phoneNumberRef.current.value,
      email: emailRef.current.value,
    };

    localStorage.setItem("formData", JSON.stringify(formData));

    userNameRef.current.value = "";
    phoneNumberRef.current.value = "";
    emailRef.current.value = "";

    console.log("Form data saved to local storage:", formData);
  };

  return (
    <form onSubmit={handleSubmit} className="form-container" id="Contact">
      <div>
        <label htmlFor="userName">User Name:</label>
        <input type="text" name="userName" ref={userNameRef} />
      </div>
      <div>
        <label htmlFor="phoneNumber">Phone Number:</label>
        <input type="text" name="phoneNumber" ref={phoneNumberRef} />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" name="email" ref={emailRef} />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;

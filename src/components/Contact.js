import React, { useState } from "react";
import "../App.css";
import { db } from "../config";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [loader, setLoader] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);

    db.collection("contacts")
      .add({
        name: name,
        email: email,
        message: message,
      })
      .then(() => {
        alert("Message has been submitted");
        setLoader(false);
      })
      .catch((error) => {
        alert(error.message);
        setLoader(false);
      });

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h1>Contact form phone</h1>

      <label>Name</label>
      <input
        placeholder="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label>Email</label>
      <input
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <label>Message</label>
      <textarea
        placeholder="message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      <button
        type="submit"
        style={{ background: loader ? ":#ccc" : "rgb(2, 2, 110)" }}
      >
        Submit
      </button>
    </form>
  );
};

export default Contact;

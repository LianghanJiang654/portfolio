import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Contact() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Message Submitted!");

    navigate("/");
  };

  return (
    <div className="container mt-5">

      <h1>Contact Me</h1>

      <h4>Contact Information</h4>

      <p>Email: your@email.com</p >

      <p>Phone: (647) 123-4567</p >

      <form onSubmit={handleSubmit}>

        <input
          className="form-control mb-3"
          name="firstName"
          placeholder="First Name"
          onChange={handleChange}
        />

        <input
          className="form-control mb-3"
          name="lastName"
          placeholder="Last Name"
          onChange={handleChange}
        />

        <input
          className="form-control mb-3"
          name="phone"
          placeholder="Phone Number"
          onChange={handleChange}
        />

        <input
          className="form-control mb-3"
          name="email"
          placeholder="Email Address"
          onChange={handleChange}
        />

        <textarea
          className="form-control mb-3"
          name="message"
          placeholder="Message"
          rows="5"
          onChange={handleChange}
        />

        <button
          className="btn btn-primary"
          type="submit"
        >
          Send Message
        </button>

      </form>

    </div>
  );
}

export default Contact;
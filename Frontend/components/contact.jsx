import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dogBreed: "",
    subject: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      alert(data.message);
      setFormData({ firstName: "", lastName: "", dogBreed: "", subject: "" }); // Clear form

    } catch (error) {
      alert("Error submitting form");
    }
  };

  return (
    <div>
      <div className="contact-box container">
        <h1 className="contact-head">Contact Me</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname">First Name</label>
          <input type="text" id="fname" name="firstName" placeholder="Your name.." value={formData.firstName} onChange={handleChange} />

          <label htmlFor="lname">Last Name</label>
          <input type="text" id="lname" name="lastName" placeholder="Your last name.." value={formData.lastName} onChange={handleChange} />

          <label htmlFor="dogbreed">Dog Breed</label>
          <input type="text" id="dogbreed" name="dogBreed" placeholder="Your dog's breed.." value={formData.dogBreed} onChange={handleChange} />

          <label htmlFor="subject">Subject</label>
          <textarea id="subject" name="subject" placeholder="Write something.." value={formData.subject} onChange={handleChange}></textarea>

          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
};

export default Contact;

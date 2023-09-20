import React, { useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import './AddContactPage.css';

const AddContactPage = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // // Check if any of the input fields are empty
    // if (!firstname || !lastname || !phone || !email) {
    //   alert("Please fill in all fields");
    //   return;
    // }

    // Check if the phone number has 10 digits
   

    if (firstname.length == "") {
      alert("Please Enter Your First Name");
      return;
    }
     if (lastname.length == "") {
      alert("Please Enter Your last Name");
      return;
    }
     if (phone.length !== 10) {
      alert("Phone number should have 10 digits");
      return;
    }

    if (email.length == "") {
      alert("Enter your Email-ID");
      return;
    }
    // Retrieve existing contacts from localStorage
    const existingContacts = JSON.parse(localStorage.getItem("contacts")) || [];

    // Generate a unique identifier for the new contact
    const newContact = {
      id: existingContacts.length + 1,
      firstname,
      lastname,
      phone,
      email,
    };

    // Add the new contact to the existing list
    const updatedContacts = [...existingContacts, newContact];

    // Save the updated contact list to localStorage
    localStorage.setItem("contacts", JSON.stringify(updatedContacts));

    // Redirect to the home page
    window.location.href = "/";
  };

  const handleFirstNameChange = (event) => {
    const { value } = event.target;
    // Restrict input to only alphabets
    const onlyAlphabets = /^[A-Za-z]+$/;
    if (onlyAlphabets.test(value) || value === "") {
      setFirstname(value);
    }
  };

  const handleLastNameChange = (event) => {
    const { value } = event.target;
    // Restrict input to only alphabets
    const onlyAlphabets = /^[A-Za-z]+$/;
    if (onlyAlphabets.test(value) || value === "") {
      setLastname(value);
    }
  };

  const handlePhoneChange = (event) => {
    const { value } = event.target;
    // Restrict input to only numbers and limit to 10 digits
    const onlyNumbers = /^\d+$/;
    if (onlyNumbers.test(value) || value === "") {
      setPhone(value);
    }
  };

  return (
    <>
      <header>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Nav className="head-bar">
          <Navbar.Brand >Contact Details</Navbar.Brand>
          <NavLink style={{ color: 'white', textDecoration:"none"}} className="home" to="/">Home</NavLink>
          </Nav>
        </Container>
      </Navbar>
  </header>
      <div className="container">
        <h3 className="mt-5 text-center">Add Contact</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="firstname">First Name</label>
            <input
              type="text"
              id="firstname"
              className="form-control"
              value={firstname}
              onChange={handleFirstNameChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastname">Last Name</label>
            <input
              type="text"
              id="lastname"
              className="form-control"
              value={lastname}
              onChange={handleLastNameChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input
              type="text"
              id="phone"
              className="form-control"
              value={phone}
              onChange={handlePhoneChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <br/><br/>
          <div style={{ textAlign: "center" }}>
            <button type="submit" className="btn btn-primary me-3 text-center">Save</button>
            <NavLink style={{ color: 'white' }} to="/"><button type="button" className="btn btn-light text-center">Cancel</button></NavLink>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddContactPage;

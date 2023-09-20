// EditContactPage.js
import React, { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import './EditContactPage.css';

const EditContactPage = ({ match }) => {
  const [contact, setContact] = useState({
    firstname: "",
    lastname: "",
    phone: "",
    email: ""
  });

  useEffect(() => {
    const contacts = JSON.parse(localStorage.getItem("contacts")) || [];
    const editContact = contacts.find(contact => contact.id === parseInt(match.params.id));
    if (editContact) {
      setContact(editContact);
    }
  }, [match.params.id]);

  const handleEdit = (event) => {
    event.preventDefault();
    const updatedContact = {
      ...contact,
      firstname: contact.firstname,
      lastname: contact.lastname,
      phone: contact.phone,
      email: contact.email
    };

    const contacts = JSON.parse(localStorage.getItem("contacts")) || [];
    const updatedContacts = contacts.map((c) => {
      if (c.id === parseInt(match.params.id)) {
        return updatedContact;
      }
      return c;
    });

    localStorage.setItem("contacts", JSON.stringify(updatedContacts));
    window.location.href = "/";
  };

  const handleFirstNameChange = (event) => {
    const { value } = event.target;
    setContact({ ...contact, firstname: value });
  };

  const handleLastNameChange = (event) => {
    const { value } = event.target;
    setContact({ ...contact, lastname: value });
  };

  const handlePhoneChange = (event) => {
    const { value } = event.target;
    setContact({ ...contact, phone: value });
  };

  const handleEmailChange = (event) => {
    const { value } = event.target;
    setContact({ ...contact, email: value });
  };

  return (
    <>
      <header>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Nav className="head-bar">
              <Navbar.Brand>Contact Details</Navbar.Brand>
              <NavLink style={{ color: 'white', textDecoration: "none" }} className="home" to="/">Home</NavLink>
            </Nav>
          </Container>
        </Navbar>
      </header>
      <div className="container">
        <h3 className="mt-5 text-center">Edit Contact</h3>
        <form onSubmit={handleEdit}>
          <div className="form-group">
            <label htmlFor="firstname">First Name</label>
            <input
              type="text"
              id="firstname"
              className="form-control"
              value={contact.firstname}
              onChange={handleFirstNameChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastname">Last Name</label>
            <input
              type="text"
              id="lastname"
              className="form-control"
              value={contact.lastname}
              onChange={handleLastNameChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input
              type="text"
              id="phone"
              className="form-control"
              value={contact.phone}
              onChange={handlePhoneChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              className="form-control"
              value={contact.email}
              onChange={handleEmailChange}
            />
          </div>
          <br /><br />
          <div style={{ textAlign: "center" }}>
            <button type="submit" className="btn btn-primary me-3 text-center">Save</button>
            <NavLink style={{ color: 'white' }} to="/"><button type="button" className="btn btn-light text-center">Cancel</button></NavLink>
          </div>
        </form>
      </div>
    </>
  );
};

export default EditContactPage;

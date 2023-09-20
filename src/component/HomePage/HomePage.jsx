//HomePage
import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import './HomePage.css';

const HomePage = () => {
  const contacts = JSON.parse(localStorage.getItem("contacts")) || [];

  const handleDeleteContact = (id) => {
    const updatedContacts = contacts.filter((contact) => contact.id !== id);
    localStorage.setItem("contacts", JSON.stringify(updatedContacts));
    window.location.reload();
  };

  const handleEditContact = (id) => {
    // Get the contact details from localStorage
    const contact = contacts.find((c) => c.id === id);

    // Open the AddContactPage component with the contact details
    window.location.href = "/add-contact?id=" + id;
  };

  return (
    <>
      <header>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand>Contact Details</Navbar.Brand>
            <NavLink style={{ color: 'white', textDecoration:"none"}} to="/">Home</NavLink>
            <Nav className="me-auto">
              <NavLink style={{ color: 'black'}} to="/add-contact"><button type="button" className="btn btn-light">Add Contact</button></NavLink>
            </Nav>
          </Container>
        </Navbar>
      </header>

      <br/><br/>

      <main>
        <table className="table table-striped text-center" style={{width: "60%"}}>
          <thead>
            <tr>
              <th scope="col">Full Name</th>
              <th scope="col">Phone</th>
              <th scope="col">Email</th>
              <th scope="col">Actions</th> {/* New column for buttons */}
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact, index) => (
              <tr key={index}>
                <td>{contact.firstname} {contact.lastname}</td>
                <td>{contact.phone}</td>
                <td>{contact.email}</td>
                <td>
                  <button type="button" className="btn btn-primary me-2" onClick={() => handleEditContact(contact.id)}>Edit</button>
                  <button type="button" className="btn btn-danger" onClick={() => handleDeleteContact(contact.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>

      <br/><br/><br/>

      <footer className="flex-shrink-0 py-4 bg-dark text-white-50 pt-0 pb-0">
        <div className="container text-center  ">
          <small>2023 Copyright (Manish Verma) &copy; Contact Details</small>
        </div>
      </footer>
    </>
  );
};

export default HomePage;

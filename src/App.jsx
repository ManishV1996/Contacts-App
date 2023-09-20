import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./component/HomePage/HomePage";
import AddContactPage from "./component/AddContactPage/AddContactPage";
import "./App.css"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add-contact" element={<AddContactPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
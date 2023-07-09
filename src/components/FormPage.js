import React, { useState, useEffect } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import "./style.css";

const StudentRegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    registrationId: "",
    school: "",
    gender: "",
    extension: "",
  });

  const [submittedForms, setSubmittedForms] = useState([]);
  const [showFormData, setShowFormData] = useState(false);
  const [showFormInfo, setShowFormInfo] = useState(false);
  const [selectedForm, setSelectedForm] = useState(null);
  const [loggedInUser, setLoggedInUser] = useState(null);

  useEffect(() => {
    const userLoginData = JSON.parse(localStorage.getItem("user_login"));
    const storedUsers = JSON.parse(localStorage.getItem("users"));
    const loggedInUser = storedUsers.find(
      (user) => user.email === userLoginData[0].email
    );
    setLoggedInUser(loggedInUser);
    setSubmittedForms(loggedInUser.forms);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !formData.name ||
      !formData.email ||
      !formData.registrationId ||
      !formData.school ||
      !formData.gender ||
      !formData.extension
    ) {
      alert("Please fill in all fields");
      return;
    }

    const newForm = { ...formData };

    const updatedUser = { ...loggedInUser };
    updatedUser.forms.push(newForm);

    const storedUsers = JSON.parse(localStorage.getItem("users"));
    const updatedUsers = storedUsers.map((user) => {
      if (user.email === loggedInUser.email) {
        return updatedUser;
      }
      return user;
    });

    localStorage.setItem("users", JSON.stringify(updatedUsers));

    setSubmittedForms((prevSubmittedForms) => [...prevSubmittedForms, newForm]);
    setFormData({
      name: "",
      email: "",
      registrationId: "",
      school: "",
      gender: "",
      extension: "",
    });
  };

  const openFormDataPopup = () => {
    setShowFormData(true);
  };

  const closeFormDataPopup = () => {
    setShowFormData(false);
  };

  const openFormInfoPopup = (form) => {
    setSelectedForm(form);
    setShowFormInfo(true);
  };

  const closeFormInfoPopup = () => {
    setSelectedForm(null);
    setShowFormInfo(false);
  };

  return (
    <div className="green-theme">
      <Button
        className="viewForm"
        variant="success"
        onClick={openFormDataPopup}
      >
        View Forms
      </Button>
      <h1>Student Registration</h1>
      <Form onSubmit={handleSubmit}>
        {/* Form fields */}
        <Form.Group controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="formRegistrationId">
          <Form.Label>Registration ID</Form.Label>
          <Form.Control
            type="text"
            name="registrationId"
            value={formData.registrationId}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="formSchool">
          <Form.Label>School</Form.Label>
          <Form.Control
            type="text"
            name="school"
            value={formData.school}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="formGender">
          <Form.Label>Gender</Form.Label>
          <Form.Control
            as="select"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="formExtension">
          <Form.Label>Extension</Form.Label>
          <Form.Control
            type="text"
            name="extension"
            value={formData.extension}
            onChange={handleChange}
          />
        </Form.Group>

        {/* Submit button */}
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>

      {/* Submitted Forms Modal */}
      <Modal show={showFormData} onHide={closeFormDataPopup}>
        <Modal.Header closeButton>
          <Modal.Title>Submitted Forms</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="form-list">
            {submittedForms.map((form, index) => (
              <div
                className="form-box"
                key={index}
                onClick={() => openFormInfoPopup(form)}
              >
                {form.name}
                <Button variant="primary" size="sm" className="view-button">
                  View
                </Button>
              </div>
            ))}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeFormDataPopup}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Form Info Modal */}
      <Modal show={showFormInfo} onHide={closeFormInfoPopup}>
        <Modal.Header closeButton>
          <Modal.Title>Form Information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedForm && (
            <div className="form-info-content">
              <h2>{selectedForm.name}</h2>
              <p>Email: {selectedForm.email}</p>
              <p>Registration ID: {selectedForm.registrationId}</p>
              <p>School: {selectedForm.school}</p>
              <p>Gender: {selectedForm.gender}</p>
              <p>Extension: {selectedForm.extension}</p>
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeFormInfoPopup}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default StudentRegistrationForm;

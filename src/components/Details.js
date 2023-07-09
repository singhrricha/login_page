import React from "react";

const Details = () => {
  return (
    <div>
      <h1>Project Details</h1>
      <h2>Student Registration Form</h2>
      <p>
        This project is a student registration form implemented using React.js.
        It allows users to fill in their personal information, such as name,
        email, registration ID, school, gender, and extension, and submit the
        form. The submitted forms are then stored in the user's account.
      </p>

      <h2>Technologies Used</h2>
      <ul>
        <li>React: A JavaScript library for building user interfaces.</li>
        <li>
          React Bootstrap: A UI library for React that provides pre-styled
          components.
        </li>
        <li>HTML: The standard markup language for creating web pages.</li>
        <li>CSS: The language used for styling web pages.</li>
        <li>
          JavaScript: The programming language used for interactivity and logic.
        </li>
        <li>
          localStorage: The web browser's built-in feature for storing data
          locally.
        </li>
      </ul>

      <h2>Functionality</h2>
      <p>
        The Student Registration Form allows users to enter their personal
        information and submit the form. The form validation ensures that all
        fields are filled in before submission. Once submitted, the form data is
        stored in the user's account. Users can view their submitted forms by
        clicking the "View Forms" button, which opens a modal displaying a list
        of submitted forms. Clicking on a form in the list opens another modal
        showing detailed information about that form.
      </p>

      <h2>LocalStorage Usage</h2>
      <p>
        The submitted forms are stored in the `forms` array of the user object
        in the `users` array stored in the `localStorage`. When a form is
        submitted, the user's `forms` array is updated with the new form, and
        the `users` data is stored back in the `localStorage`. This ensures that
        the forms are associated with the correct user and can be retrieved and
        displayed correctly.
      </p>
    </div>
  );
};

export default Details;

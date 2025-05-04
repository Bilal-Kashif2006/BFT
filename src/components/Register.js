import React from 'react';
import { Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './Register.css';
const Register = () => {
 return (
    <div className="container mt-5 register-container background secondary-border">
      <h2 className="text-center mb-4 light-text">Register</h2>

      <div className="card p-4 shadow">
        <h4 className="mb-3">Code of Conduct</h4>
        <ul className="code-list">
          <li>Be respectful and courteous to others.</li>
          <li>Harassment, discrimination, or hate speech will not be tolerated.</li>
          <li>Use appropriate language in all communications.</li>
          <li>Respect privacy—do not share personal info of others without consent.</li>
          <li>Report any violations to the admin team promptly.</li>
          <li>Participation implies agreement to follow these rules.</li>
        </ul>
      </div>
    </div>
  );
}



export default Register;

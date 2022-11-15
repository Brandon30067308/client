import './sign-up-form.styles.scss'
import React from 'react';
import { useState } from "react"; 

const SingUpForm = () => {  

  const [information, setInformation] = useState({
    companyName: { name: "companyName", value: "" },
    fullCompanyName: { name: "fullCompanyName", value: "" },
    login: { name: "Login", value: "" },
    email: { name: "email", value: "" },
    password: { name: "password", value: "" },
    repeatPassword: { name: "repeatPassword", value: "" },
    phoneNumber: { name: "number", value: "" },
  });
  
  return (
    <div className="registration-Div">
      <form className="registration-form">
        <div>
          <h2>Create an account</h2>
          <h4>
            Do you already have a account? <a href="Login">Login</a>
          </h4>
        </div>
        <div className="registration-info">
          <label>Company Name</label>
          <input
            name={information.companyName.name}
            value={information.companyName.value}
            type="text"
            required
          />
          <label>Full Company Name</label>
          <input
            name={information.companyName.name}
            value={information.companyName.value}
            type="text"
            required
          />
          <label>Login</label>
          <input
            name={information.companyName.name}
            value={information.companyName.value}
            type="text"
            required
            placeholder="Enter Username here"
          />
          <label>E-mail address</label>
          <input
            name={information.companyName.name}
            value={information.companyName.value}
            type="text"
            required
            placeholder="rni.software@gmail.com"
          />
          <label>Password</label>
          <input
            name={information.companyName.name}
            value={information.companyName.value}
            type="password"
            required
            placeholder="min. 6 charcters"
            minLength={6}
          />
          <label>Repeat Password</label>
          <input
            name={information.companyName.name}
            value={information.companyName.value}
            minLength={6}
            type="password"
            required
            placeholder="Retype password"
          />
          <label>Phone number</label>
          <input
            name={information.companyName.name}
            value={information.companyName.value}
            type="number"
            required
            placeholder="+xxxxxxxxxxx NO symbols"
          />
          <button className="registration-button">Create an account</button>
        </div>
      </form>
    </div>
  );
}

export default SingUpForm

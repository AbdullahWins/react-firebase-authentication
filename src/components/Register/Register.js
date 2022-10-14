import React from "react";

const Register = () => {
  const handleRegister = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    console.log(email, password);
  };

  const handleEmailOnBlur = (event) => {
    console.log(event.target.value);
  };
  const handlePasswordOnBlur = (event) => {
    console.log(event.target.value);
  };

  return (
    <div>
      <h2>Register here (HTML)</h2>
      <form onSubmit={handleRegister}>
        <input
          onBlur={handleEmailOnBlur}
          type="email"
          name="email"
          id=""
          placeholder="Your Email"
        />
        <br />
        <input
          onBlur={handlePasswordOnBlur}
          type="password"
          name="password"
          id=""
          placeholder="Your Password"
        />
        <br />
        agree to our terms and conditions
        <br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;

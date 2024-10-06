import React from "react";

const Login = ({ onLogin }) => {
  const handleLoginClick = () => {
    onLogin();
  };
  return (
    <div>
      <h1>Login</h1>
      <button>Log out</button>
    </div>
  );
};

export default Login;

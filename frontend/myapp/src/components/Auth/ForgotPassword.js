import React, { useState } from 'react';

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleResetPassword = async () => {
    try {
      // Frontend validation for email goes here

      // Make an API request to initiate password reset
      const response = await fetch('/api/reset-password-request', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setSuccessMessage('Password reset email sent successfully.');
        setErrorMessage('');
      } else {
        const errorData = await response.json();
        setErrorMessage(errorData.message);
        setSuccessMessage('');
      }
    } catch (error) {
      setErrorMessage('An error occurred.');
      setSuccessMessage('');
    }
  };

  return (
    <div>
      <h2>Forgot Password</h2>
      <div>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={handleEmailChange}
        />
        <button onClick={handleResetPassword}>Reset Password</button>
      </div>
      {successMessage && <p>{successMessage}</p>}
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
}

export default ForgotPassword;

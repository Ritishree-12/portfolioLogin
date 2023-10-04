import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function VerifyEmail() {
  const { token } = useParams();
  const [verificationStatus, setVerificationStatus] = useState('Verifying...');

  useEffect(() => {
    // Make an API request to verify the email using the token
    const verifyEmail = async () => {
      try {
        const response = await fetch(`/api/verify-email/${token}`);
        if (response.ok) {
          setVerificationStatus('Email verified successfully.');
        } else {
          setVerificationStatus('Email verification failed.');
        }
      } catch (error) {
        setVerificationStatus('An error occurred.');
      }
    };

    verifyEmail();
  }, [token]);

  return (
    <div>
      <h2>Email Verification</h2>
      <p>{verificationStatus}</p>
    </div>
  );
}

export default VerifyEmail;

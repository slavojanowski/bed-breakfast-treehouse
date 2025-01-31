import "./css/login-signup.css";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import { useState } from "react";

const LoginPage = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [isAccountCreated, setIsAccountCreated] = useState(false);

  const handleSignupSuccess = () => {
    setIsAccountCreated(true);
    setIsSignup(false);
  };

  const handleLoginRedirect = () => {
    setIsSignup(false);
  };

  return (
    <main className="page login-signup-page">
      <div className="login-signup-container">
        <div className="login-signup-heading">
          {isAccountCreated ? (
            <>
              <h3>Konto zostało utworzone</h3>
              <h4>Teraz możesz się zalogować.</h4>
            </>
          ) : isSignup ? (
            <h3>Utwórz swoje konto</h3>
          ) : (
            <h3>Zaloguj się</h3>
          )}
        </div>
        {isSignup ? (
          <SignupForm
            onSignupSuccess={handleSignupSuccess}
            onLoginRedirect={handleLoginRedirect}
          />
        ) : (
          <LoginForm onSignupRedirect={() => setIsSignup(true)} />
        )}
      </div>
    </main>
  );
};

export default LoginPage;

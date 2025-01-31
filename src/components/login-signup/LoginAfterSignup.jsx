import Login from "./LoginPage";

const LoginAfterSignup = () => {
  return (
    <main className="page login-signup-page">
      <section className="heading">
        <h4>Twoje konto zostało utworzone</h4>
        <h5>Teraz możesz zalogować się do swojego konta.</h5>
      </section>

      <Login />
    </main>
  );
};

export default LoginAfterSignup;

import Login from "./Login";

const LoginAfterSignup = () => {
  return (
    <main className="page login-signup-page">
      <h4>Twoje konto zostało utworzone</h4>
      <h5>Teraz możesz zalogować się do swojego konta.</h5>
      <section className="heading">
        <h4>Twoje konto zostało utworzone</h4>
      </section>
      <br></br>
      <Login />
    </main>
  );
};

export default LoginAfterSignup;

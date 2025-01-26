import "./css/login-signup.css";
import supabase from "../../config/supabaseClient";
import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { FaArrowRight } from "react-icons/fa6";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setmessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setmessage("");

    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (error) {
      setmessage(error.message);
      setEmail("");
      setPassword("");
      return;
    }
    if (data) {
      navigate("/konto-uzytkownika");
      return null;
    }

    setEmail("");
    setPassword("");
  };

  return (
    <main className="page login-signup-page">
      <div className="container">
        <section className="heading">
          <h3>Zaloguj się</h3>
        </section>

        <section className="form">
          {message && <h5>{message}</h5>}
          <form onSubmit={handleSubmit}>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              name="email"
              className="form-control"
              value={email}
              placeholder="E-mail"
              required
            />
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              name="password"
              className="form-control"
              value={password}
              placeholder="Password"
              required
            />
            <button type="submit">Zaloguj się</button>
          </form>
          <h6>
            <span>Nie masz jeszcze konta?</span>{" "}
            <Link to="/rejestracja">
              Zarejestruj się tutaj <FaArrowRight />
            </Link>
          </h6>
        </section>
      </div>
    </main>
  );
};

export default Login;

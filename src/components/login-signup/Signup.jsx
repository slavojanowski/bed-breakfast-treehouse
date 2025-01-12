import "./css/login-signup.css";
import supabase from "../../config/supabaseClient";
import { useState } from "react";
import { Link } from "react-router";
import { FaArrowRight } from "react-icons/fa6";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setmessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setmessage("");

    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
    });

    if (error) {
      setmessage(error.message);
      return;
    }
    if (data) {
      setmessage("Twoje konto zostało utworzone");
    }

    setEmail("");
    setPassword("");
  };

  return (
    <main className="page login-signup-page">
      <section className="heading">
        <h3>Załóż konto</h3>
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
          <button type="submit">Utwórz konto</button>
        </form>
        <h6>
          Masz już konto?{" "}
          <Link to="/logowanie">
            Zaloguj się tutaj <FaArrowRight />
          </Link>
        </h6>
      </section>
    </main>
  );
};

export default Signup;

import "./css/login-signup.css";
import supabase from "../../config/supabaseClient";
import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { FaArrowRight } from "react-icons/fa6";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    // Password validation: 8-20 characters, at least one uppercase, one special character
    const passwordRegex =
      /^(?=.*[A-Z])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,20}$/;

    if (!passwordRegex.test(password)) {
      setMessage(
        "Hasło musi mieć od 8 do 20 znaków, zawierać co najmniej jedną wielką literę i jeden znak specjalny."
      );
      return;
    }

    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
      options: {
        data: {
          display_name: name,
        },
      },
    });

    if (error) {
      setMessage(error.message);
      return;
    }
    if (data) {
      navigate("/zaloguj-sie");
    }

    setEmail("");
    setPassword("");
    setName("");
  };

  return (
    <main className="page login-signup-page">
      <section className="heading">
        <h3>Utwórz konto</h3>
      </section>

      <section className="form">
        <form onSubmit={handleSubmit}>
          <span className="error-message">{message && <h6>{message}</h6>}</span>
          <input
            onChange={(e) => setName(e.target.value.trim())}
            type="text"
            name="name"
            className="form-control"
            value={name}
            placeholder="Your name"
            required
          />

          <input
            onChange={(e) => setEmail(e.target.value.trim())}
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

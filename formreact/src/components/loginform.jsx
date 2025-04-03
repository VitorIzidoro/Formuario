import { useState } from "react";
import "./form.css";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    alert(`Login realizado! Email: ${email}`);
  }
  return (
    <form onSubmit={handleSubmit} className="Box">
      <input
        type="email"
        value={email}
        placeholder="Digite seu email"
        onChange={(event) => setEmail(event.target.value)}
      />

      <input
        type="password"
        minLength="8"
        maxLength="16"
        value={password}
        required
        autoComplete="on"
        onChange={(event) => setPassword(event.target.value)}
        placeholder="Digite sua senha"
      />
      <button type="submit">Entrar</button>
    </form>
  );
}

export default LoginForm;

import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <Link to="/">Haoua Soualmia</Link>
      <nav>
        _a_propos <Link to="/projects">_projets</Link> _contact
      </nav>
    </header>
  );
}

import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <ul>
       {/*  moverme entre rutas */}
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">Acerca</Link></li>
        <li><Link to="/usuario/Domingo">Perfil: Domingo</Link></li>
        <li><Link to="/usuario/Morgado">Perfil: Morgado</Link></li>
      </ul>
    </nav>
  );
}

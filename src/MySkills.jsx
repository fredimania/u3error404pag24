import { useParams } from "react-router-dom";

import DomingoImage from "./assets/imagen1.jpg";
import MorgadoImage from "./assets/imagen2.jpg";

export default function MySkills() {
  const { nombre } = useParams();


  // Avatares para los nombres
  const avatars = {
    Domingo:  DomingoImage,
    Morgado: MorgadoImage,
    default: "https://via.placeholder.com/150/CCCCCC?text=Usuario",
  };

  // Seleccionamos el avatar según el nombre
  const avatar = avatars[nombre.toLowerCase()] || avatars.default;

  return (
    <div>
      <h2>Perfil de: {nombre}</h2>
      <img src={avatar} alt={`Avatar de ${nombre}`} />
      <p>Bienvenido profesor {nombre}Perfil</p>
    </div>
  );
}

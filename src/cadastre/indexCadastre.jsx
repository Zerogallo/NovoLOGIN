import { GiAstronautHelmet } from "react-icons/gi";
import styles from "./stylesCadastre.module.css";
import { PiPlanetDuotone } from "react-icons/pi";

export default function Cadastre() {
  return (
    <>
      <div className={styles.Cadastre}>
        <i>
          <GiAstronautHelmet />
        </i>
        <h1>Cadastre</h1>
        <i>
          <PiPlanetDuotone />
        </i>
        <p>Nome</p>
        <input type="text" />
        <p>Idade</p>
        <input type="data" />
        <p>E-mail</p>

        <input type="email" />
        <p>Senha</p>
        <input type="password" />
      </div>
    </>
  );
}

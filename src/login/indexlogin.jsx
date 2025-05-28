import { GiAstronautHelmet } from "react-icons/gi";
import styles from "./stylesLogin.module.css";
import { PiPlanetDuotone } from "react-icons/pi";
import imgLogin from "../../public/Free-Astronaut.jpg";
import { BsRocketTakeoff } from "react-icons/bs";

export default function Login() {
  return (
    <>
      <div className={styles.login}>
        <div className={styles.caixaText}>
          <i>
            <GiAstronautHelmet />
          </i>
          <span>Conheça novo Planeta</span>
          <i>
            <PiPlanetDuotone />
          </i>
          <p>E site para encontrar novo mundo pela internet</p>

          <img src={imgLogin} alt="astronauta" />
          <button>Cadastre AQUI!</button>
        </div>
        <div className={styles.caixaLogin}>
          <i>
            <GiAstronautHelmet />
          </i>
          <p>Login</p>
          <div className={styles.contentLogin}>
            <p>E-mail</p>

            <input type="email" />
            <p>Senha</p>
            <input type="password" />

            <p>
              <button>
                Decolar{" "}
                <i>
                  <BsRocketTakeoff />
                </i>
              </button>
            </p>

            <p>
              <input type="checkbox" /> Lembrar-me
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

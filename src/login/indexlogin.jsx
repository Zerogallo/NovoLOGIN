import { GiAstronautHelmet } from "react-icons/gi";
import styles from "./stylesLogin.module.css";
import { PiPlanetDuotone } from "react-icons/pi";
import imgLogin from "../../public/Free-Astronaut.jpg";
import { BsRocketTakeoff } from "react-icons/bs";

export default function Login() {
  return (
    <>
      <div className={styles.caixatotal}>
        <div className={styles.login}>
          <div className={styles.caixaText}>
            <div className={styles.caixatitul}>
              <i>
                <GiAstronautHelmet />
              </i>
              <span>Conheça novo Planeta</span>
              <i>
                <PiPlanetDuotone />
              </i>
              <p>E site para encontrar novo mundo pela internet</p>
            </div>

            <img src={imgLogin} alt="astronauta" />
            <button>Cadastre AQUI!</button>
          </div>
          <div className={styles.caixaLogin}>
            <i className={styles.top}>
              <GiAstronautHelmet />
            </i>
            <span>Login</span>
            <div className={styles.contentLogin}>
              <p>E-mail</p>

              <input type="email" />
              <p>Senha</p>
              <input type="password" />

              <p>
                <input type="checkbox" /> Lembrar-me
              </p>
              <div className={styles.caixabutto}>
                <button>
                  Decolar
                  <i>
                    <BsRocketTakeoff />
                  </i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

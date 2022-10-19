/**
 * TODOS arquivos css que sao importados fora dos App, devem ser importados para param "styles", ou qualquer outro nome.
 *
 * Sendo que gera nome de classes únicas, através do nome da classe, ex: header_z3hha233s
 */
import styles from "./Header.module.css";

import iginiteLogo from "../assets/ignite-logo.svg";

export default function Header() {
  return (
    <header className={styles.header}>
      <img src={iginiteLogo} alt="Logotipo do Ignite" />
    </header>
  );
}

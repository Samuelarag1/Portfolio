import styles from "./nav.module.css";
import { Link } from "react-scroll";

const Nav = () => {
  return (
    <div className={styles.navegacion}>
      <nav>
        <Link to={"page-1"} smooth={true} offset={-100} duration={500}>
          Inicio
        </Link>
        <Link to={"page-2"} smooth={true} offset={-99} duration={500}>
          Skills
        </Link>
        <Link to={"page-3"} smooth={true} offset={-100} duration={500}>
          Proyectos
        </Link>
        <Link to={"page-4"} smooth={true} offset={-100} duration={500}>
          Contacto
        </Link>
      </nav>
    </div>
  );
};

export default Nav;

import styles from "./nav.module.css";

const Nav = () => {
  return (
    <div className={styles.navegacion}>
      <nav>
        <a href="#">Inicio</a>
        <a href="#">Skills</a>
        <a href="#">Proyectos</a>
        <a href="#">Contacto</a>
      </nav>
    </div>
  );
};

export default Nav;

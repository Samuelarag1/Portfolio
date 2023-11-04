import styles from "./firstPage.module.css";

const FirstPage = () => {
  return (
    <div className={styles.container} id="page-1">
      <img
        className={styles.imagenPerfil}
        src="yo.jpg"
        alt="img"
        width="300px"
      />
      <div className={styles.header}>
        <h1>Samuel Aragon</h1>
        <h4>Desarrollador Full-Stack</h4>
        <p>
          Tengo 23 años, soy estudiante de Ing. en Computación. Realicé un
          bootcamp FullStack y tambien adquiri conocimientos de manera
          autodidacta. Mi pasión por la tecnologia va mas allá de mis
          conocimientos, estoy en constante aprendizaje y busqueda de nuevos
          objetivos en mi vida.
        </p>
        <div className={styles.icons}>
          <a href="https://github.com/Samuelarag1" target="__blank">
            <img src="github.png" alt="icon-github" />
          </a>
          <a href="https://www.linkedin.com/in/samuelarag1/" target="__blank">
            <img
              width="96px"
              src="linkedin.png"
              alt="icon-linkedin"
              className={styles.iconLink}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default FirstPage;

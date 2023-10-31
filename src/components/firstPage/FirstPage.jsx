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
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum,
          recusandae? Cupiditate iusto molestias repellat sit tempora cumque
          expedita asdasdasd officiis accusamus, ea officia eum, consequuntur
          vel sunt modi, adipisci aliquid?
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

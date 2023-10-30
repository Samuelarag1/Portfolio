import styles from "./firstPage.module.css";

const FirstPage = () => {
  return (
    <div className={styles.container}>
      <img
        className={styles.imagenPerfil}
        src="https://previews.123rf.com/images/pandavector/pandavector1709/pandavector170906212/86095866-persona-%C3%BAnico-icono-de-estilo-de-contorno-persona-ilustraci%C3%B3n-de-stock-de-s%C3%ADmbolo-del-vector.jpg"
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
          vel sunt modi, adipisci aliquid? Lorem ipsum, dolor sit amet
          consectetur adipisicing elit. Nostrum, recusandae? Cupiditate iusto
          molestias repellat sit tempora cumque expedita iste officiis
          accusamus, ea officia eum, consequuntur vel sunt modi, adipisci
          aliquid?
        </p>
      </div>

      <div className={styles.icons}>
        <a href="#">
          <img src="github.png" alt="icon-github" />
        </a>
        <a href="#">
          <img
            width="96px"
            src="linkedin.png"
            alt="icon-linkedin"
            className={styles.iconLink}
          />
        </a>
      </div>
    </div>
  );
};

export default FirstPage;

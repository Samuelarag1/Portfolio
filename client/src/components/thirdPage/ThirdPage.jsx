import styles from "./thirdpage.module.css";
const ThirdPage = () => {
  return (
    <div className={styles.container} id="page-3">
      <h1>Proyectos</h1>
      <p>Espero te gusten mis proyectos!</p>

      <div className={styles.cards}>
        <div className={styles.card} id="card-1">
          <a href="https://github.com/Samuelarag1/Dolar" target="__blank">
            <img src="proyect1.png" width="270px" />
            <h4>Dolar/Euro - ARS</h4>
            <p>
              Llamada a la api de bluelytics para tener el valor del Dolar o
              Euro BLUE al momento
            </p>
            <span>Haz click para ir a su repositorio!</span>
          </a>
        </div>
        <div className={styles.card} id="card-2">
          <a href="https://github.com/Samuelarag1/RickAndMorty" target="__blank">
            <img src="rick&morty.png" width="50px" />
            <h4>Rick and Morty</h4>
            <p>Proyecto FullStack con stack PERN</p>
            <span>Haz click para ir a su repositorio!</span>
          </a>
        </div>
        <div className={styles.card} id="card-3">
          <a href="https://github.com/Samuelarag1/Drivers-PI" target="__blank">
            <img src="f1.png" />
            <h4>Formula 1</h4>
            <p>Proyecto FullStack con stack PERN</p>
            <span>Haz click para ir a su repositorio!</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ThirdPage;

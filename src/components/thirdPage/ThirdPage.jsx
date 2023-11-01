import styles from "./thirdpage.module.css";
const ThirdPage = () => {
  return (
    <div className={styles.container} id="page-3">
      <h1>Proyectos</h1>
      <p>Espero te gusten mis proyectos!</p>

      <div className={styles.cards}>
        <div className={styles.card} id="card-1">
          <h4>Card 1 </h4>
          <img src="proyect1.png" width="270px" />
          <p>
            Este proyecto esta basado en distintas arquitecturas de software
          </p>
        </div>
        <div className={styles.card} id="card-2">
          <h4>Card 2 </h4>
          <img
            src="https://p1.hiclipart.com/preview/238/864/898/alumi-black-black-folder-icon.jpg"
            width="100px"
          />
          <p>
            Este proyecto esta basado en distintas arquitecturas de software
          </p>
        </div>
        <div className={styles.card} id="card-3">
          <h4>Card 3 </h4>
          <img
            src="https://p1.hiclipart.com/preview/238/864/898/alumi-black-black-folder-icon.jpg"
            width="100px"
          />
          <p>
            Este proyecto esta basado en distintas arquitecturas de software
          </p>
        </div>
        <div className={styles.card} id="card-4">
          <h4>Card 4</h4>
          <img
            src="https://p1.hiclipart.com/preview/238/864/898/alumi-black-black-folder-icon.jpg"
            width="100px"
          />
          <p>
            Este proyecto esta basado en distintas arquitecturas de software
          </p>
        </div>
        <div className={styles.card} id="card-5">
          <h4>Card 5</h4>
          <img
            src="https://p1.hiclipart.com/preview/238/864/898/alumi-black-black-folder-icon.jpg"
            width="100px"
          />
          <p>
            Este proyecto esta basado en distintas arquitecturas de software
          </p>
        </div>
        <div className={styles.card} id="card-6">
          <h4>Card 6</h4>
          <img
            src="https://p1.hiclipart.com/preview/238/864/898/alumi-black-black-folder-icon.jpg"
            width="100px"
          />
          <p>
            Este proyecto esta basado en distintas arquitecturas de software
          </p>
        </div>
      </div>
    </div>
  );
};

export default ThirdPage;

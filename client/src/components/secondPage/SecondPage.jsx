import { useState } from "react";
import styles from "./secondpage.module.css";

const SecondPage = () => {
  const [active, setActive] = useState(false);
  const [app, setApp] = useState({
    id: "",
    name: "",
    img: "",
    experience: "",
    caracteristics: "",
  });

  const myApps = [
    {
      id: 1,
      name: "React",
      img: "physics.png",
      experience: "2 años",
      caracteristics: "React-router",
    },
    {
      id: 2,
      name: "Css",
      img: "css-3.png",
      experience: "2 años",
      caracteristics: "",
    },
    {
      id: 3,
      name: "Html",
      img: "html-5.png",
      experience: "3 años",
      caracteristics: "",
    },
    {
      id: 4,
      name: "Sql",
      img: "sql.png",
      experience: "6 meses",
      caracteristics: "postgres",
    },
    {
      id: 5,
      name: "Node",
      img: "nodeJs.png",
      experience: "1 año",
      caracteristics: "Express",
    },
    {
      id: 6,
      name: "Typescript",
      img: "typescript.png",
      experience: "1 año",
      caracteristics: "Uso de modelos, comprension de interfaces.",
    },
  ];

  const handleOnClick = (e) => {
    setActive(true);
    const founded = myApps.find((app) => {
      return app.name === e.target.name;
    });
    setApp(founded);
  };

  const handleOnClose = () => {
    setActive(false);
  };

  return (
    <div className={styles.container}>
      <div id="page-2">
        <h1>Skills</h1>
        <p>Haz click sobre un icono!</p>
      </div>

      <div id="active" className={active ? styles.active : styles.inactive}>
        <div className={styles.active_inner}>
          <button onClick={handleOnClose} className={styles.btnClose}>
            <span>X</span>
          </button>
          <div className={styles.infoAditional}>
            <p>
              Informacion adicional sobre:
              <span className={styles.datos}> {app.name}</span>
            </p>
            <img src={app.img} width="100px" alt="img-apps" />
            {app.experience !== "" ? (
              <p>
                Experiencia:{" "}
                <span className={styles.datos}>{app.experience}</span>
              </p>
            ) : (
              ""
            )}

            {app.caracteristics !== "" ? (
              <p>
                Framework/Librerias:
                <span className={styles.datos}>{app.caracteristics}</span>
              </p>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>

      <div className={styles.skills}>
        <img
          onClick={handleOnClick}
          name="Css"
          src="css-3.png"
          alt="img-css"
          width="100px"
        />
        <img
          onClick={handleOnClick}
          name="React"
          src="physics.png"
          alt="img-react"
          width="100px"
        />
        <img
          onClick={handleOnClick}
          name="Html"
          src="html-5.png"
          alt="img-html"
          width="100px"
        />
        <img
          onClick={handleOnClick}
          name="Sql"
          src="sql.png"
          alt="img-postgres"
          width="100px"
        />
        <img
          onClick={handleOnClick}
          name="Node"
          src="nodeJs.png"
          alt="img-node"
          width="100px"
        />
        <img
          onClick={handleOnClick}
          name="Typescript"
          src="typescript.png"
          alt="img-ts"
          width="100px"
        />
      </div>

      <p>
        Estas son las tecnologias con las que mas familiarizado estoy y mas uso
        les doy, tengo conocimientos en otros lenguajes de programacion pero me
        pareció mejor hacer énfasis en las siguientes.
      </p>
    </div>
  );
};

export default SecondPage;

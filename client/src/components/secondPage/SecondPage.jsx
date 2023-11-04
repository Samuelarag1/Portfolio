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
    improve: "",
  });

  const myApps = [
    {
      id: 1,
      name: "React",
      img: "physics.png",
      experience: "1 año",
      caracteristics: "React-router - and more nqv",
      improve: "Redux - Class Component",
    },
    {
      id: 2,
      name: "Css",
      img: "css-3.png",
      experience: "1 año",
      caracteristics: "",
      improve: "Animations, keyframes",
    },
    {
      id: 3,
      name: "Html",
      img: "html-5.png",
      experience: "2 años",
      caracteristics: "",
      improve: "Nuevas etiquetas - Selectors ",
    },
    {
      id: 4,
      name: "Sql",
      img: "sql.png",
      experience: "3 meses",
      caracteristics: "postgres",
      improve: "Mejor manejo de las dinamicas",
    },
    {
      id: 5,
      name: "Node",
      img: "nodeJs.png",
      experience: "3 meses",
      caracteristics: "Express",
      improve: "",
    },
    {
      id: 6,
      name: "Typescript",
      img: "typescript.png",
      experience: "Aprendiendo..",
      caracteristics: "",
      improve: "",
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
        <button onClick={handleOnClose}>X</button>
        <p>
          Informacion adicional sobre:
          <span className={styles.datos}> {app.name}</span>
        </p>
        <img src={app.img} width="100px" alt="img-apps" />

        {app.experience !== "" ? (
          <p>
            Experiencia: <span className={styles.datos}>{app.experience}</span>
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

        {app.improve !== "" ? (
          <p>
            A mejorar: <span className={styles.datos}>{app.improve}</span>
          </p>
        ) : (
          ""
        )}
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

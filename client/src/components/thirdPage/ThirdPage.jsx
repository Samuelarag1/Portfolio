import projectsData from "../../db.json";
import styles from "./thirdpage.module.css";

console.log(projectsData);
const ThirdPage = () => {
  return (
    <div className={styles.container} id="page-3">
      <h1>Proyectos</h1>
      <p>Espero te gusten mis proyectos!</p>

      <div className={styles.cards}>
        {projectsData.projects.map((projects) => (
          <div className={styles.card} key={projects.id}>
            <a href={projects.repository} target="__blank">
              <img src={projects.image} alt={projects.name} width="270px" />
              <h4>{projects.name}</h4>
              <p>{projects.description}</p>
              <span>Haz click para ir a su repositorio!</span>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ThirdPage;

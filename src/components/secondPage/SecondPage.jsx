import styles from "./secondpage.module.css";

const SecondPage = () => {
  const handleOnClick = (e) => {
    console.log("diste click en " + e.target.id);
  };
  return (
    <div id="page-2" className={styles.container}>
      <h1>Skills</h1>

      <div className="skills-icons">
        <img
          onClick={handleOnClick}
          id="css"
          src="css-3.png"
          alt="img-css"
          width="100px"
        />
        <img
          onClick={handleOnClick}
          id="react"
          src="physics.png"
          alt="img-react"
          width="100px"
        />
        <img
          onClick={handleOnClick}
          id="html"
          src="html-5.png"
          alt="img-html"
          width="100px"
        />
        <img
          onClick={handleOnClick}
          id="postgres"
          src="postgre.png"
          alt="img-postgres"
          width="100px"
        />
        <img
          onClick={handleOnClick}
          id="node"
          src="nodeJs.png"
          alt="img-node"
          width="100px"
        />
        <img
          onClick={handleOnClick}
          id="typescript"
          src="typescript.png"
          alt="img-ts"
          width="100px"
        />
      </div>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas fugiat
        amet reprehenderit voluptatem harum dolor ea sequi, eligendi ad suscipit
        laudantium tempore, excepturi magnam incidunt vero officiis natus earum
        iure. Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem,
        magnam vel culpa voluptate deleniti ipsa commodi provident quisquam
        asperiores, laudantium nihil sit quidem ad fugit excepturi, corporis
        aliquid nisi possimus?
      </p>
    </div>
  );
};

export default SecondPage;

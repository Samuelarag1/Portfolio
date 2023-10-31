import styles from "./fourthpage.module.css";
const FourthPage = () => {
  return (
    <div className={styles.container} id="page-4">
      <div className="form">
        <form>
          <h1>Contacto</h1>
          <p>Nombre</p>
          <input type="text" />

          <p>Mensaje</p>
          <textarea name="mensaje" id="mensaje"></textarea>
        </form>
      </div>
    </div>
  );
};

export default FourthPage;

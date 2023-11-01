import styles from "./fourthpage.module.css";
const FourthPage = () => {
  return (
    <div className={styles.container} id="page-4">
      <h1>Gracias por Visitar mi pagina web personal!</h1>
      <p>
        Si deseas contactarte conmigo. Te dejo un formulario para que envies tu
        propuesta!
      </p>
      <div className={styles.form}>
        <form>
          <h4>Contacto</h4>
          <span>Nombre</span>
          <input type="text" placeholder="Nombre" />

          <span>Email</span>
          <input type="text" placeholder="Email" />
          <span>Mensaje</span>
          <textarea
            name="mensaje"
            id="mensaje"
            placeholder="Escriba un mensaje..."
          ></textarea>
          <hr />
          <button>Enviar</button>
        </form>
      </div>
    </div>
  );
};

export default FourthPage;

import styles from "./fourthpage.module.css";

const FourthPage = () => {
  function enviarCorreo() {
    var destinatario = "samuelaragon616@gmail.com";
    window.location.href =
      "https://mail.google.com/mail/?view=cm&" + "to=" + destinatario;
  }

  return (
    <div className={styles.container} id="page-4">
      <div>
        <h1>Gracias por Visitar mi pagina web personal!</h1>
        <p>
          Si deseas contactarte conmigo. Te dejo un botón que te redirigira a
          Gmail para que envies tu propuesta!
        </p>

        <button onClick={enviarCorreo} target="_blank">
          Enviar un Email!
        </button>
      </div>
    </div>
  );
};
export default FourthPage;

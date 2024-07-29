import styles from "./fourthpage.module.css";

const FourthPage = () => {
  return (
    <div className={styles.container} id="page-4">
      <div>
        <h1>Gracias por Visitar mi pagina web personal!</h1>
        <p>
          Si deseas contactarte conmigo. Te dejo para que envies tu propuesta a
          mi Whatsapp personal!
        </p>
        <div>
          <a href="https://wa.me/3834934797">
            <img src="/whatsapp.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};
export default FourthPage;

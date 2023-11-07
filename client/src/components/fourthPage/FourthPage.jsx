import styles from "./fourthpage.module.css";
import { useState, useEffect } from "react";
import axios from "axios";

const FourthPage = () => {
  const [input, setInput] = useState({
    subject: "",
    email: "",
    text: "",
  });
  const [error, setError] = useState({
    subject: "",
    email: "",
    text: "",
  });

  const handleOnChange = (e) => {
    const { value, name } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
  };
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  useEffect(() => {
    setError((prevError) => ({
      ...prevError,
      subject: input.subject === "" ? "Error en el input Subject" : "",
      email: input.email === "" ? "Error en el input Email" : "",
      text: input.text === "" ? "Error en el input Text" : "",
    }));
  }, [input]);

  const enviarDatos = async () => {
    await axios.post(
      "https://host-contact-form.onrender.com/postMessage",
      input
    );
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (
      error.email ||
      error.subject ||
      error.text ||
      re.test(input.email) === false
    ) {
      window.alert(
        "Debes completar correctamente todos los campos para continuar"
      );
      return;
    }
    enviarDatos();
    window.alert("Enviado!");
    setInput({
      subject: "",
      email: "",
      text: "",
    });
  };

  return (
    <div className={styles.container} id="page-4">
      <h1>Gracias por Visitar mi pagina web personal!</h1>
      <p>
        Si deseas contactarte conmigo. Te dejo un formulario para que envies tu
        propuesta!
      </p>
      <div className={styles.form}>
        <form onSubmit={handleOnSubmit}>
          <h4>Contacto</h4>

          <span>Nombre</span>
          <input
            name="subject"
            onChange={handleOnChange}
            type="text"
            placeholder="Nombre"
            value={input.subject}
            className={error.subject !== "" ? styles.empty : ""}
          />
          {error.subject !== "" ? (
            <h6 className={styles.error}>Ingresa un nombre</h6>
          ) : (
            ""
          )}

          <span>Email</span>
          <input
            value={input.email}
            name="email"
            type="text"
            placeholder="Email"
            onChange={handleOnChange}
            className={error.email !== "" ? styles.empty : ""}
          />
          {re.test(input.email) === false ? (
            <h6 className={styles.error}>Ingresa un email valido</h6>
          ) : (
            ""
          )}

          <span>Mensaje</span>
          <textarea
            onChange={handleOnChange}
            name="text"
            id="mensaje"
            placeholder="Escriba un mensaje..."
            value={input.text}
            className={error.text !== "" ? styles.empty : ""}
          ></textarea>
          {error.text !== "" ? (
            <h6 className={styles.error}>Ingresa un mensaje</h6>
          ) : (
            ""
          )}

          <hr />
          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
  );
};
export default FourthPage;

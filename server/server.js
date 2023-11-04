const nodemailer = require("nodemailer");
require("dotenv").config();

const enviarEmail = async () => {
  const config = {
    host: "smtp.gmail.com",
    port: 587,
    auth: {
      user: process.env.USER_EMAIL,
      pass: process.env.USER_PASSWORD,
    },
  };
  const mensaje = {
    from: "samuelaragon616@gmail.com",
    to: "samuelaragon616@gmail.com",
    subject: "correo de pruebas",
    text: "Y DALE DALE BOOOOOOOOOOOOO",
  };

  const transport = nodemailer.createTransport(config);
  const info = await transport.sendMail(mensaje);
};

require("dotenv").config();
const express = require("express");
const app = express();
const nodemailer = require("nodemailer");
const path = require("path");
const cors = require("cors");

const PORT = 3001;

app.use(express.static(path.join(__dirname, "client", "build")));

app.use(express.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "https://samuel-aragon.vercel.app");
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use(cors(corsOptions));

app.listen(PORT, () => {
  console.log(`Starting server in PORT: ${PORT}`);
});

app.post("/postMessage", async (req, res) => {
  const { subject, email, text } = req.body;

  const config = {
    host: "smtp.gmail.com",
    port: 587,
    auth: {
      user: process.env.USER_EMAIL,
      pass: process.env.USER_PASSWORD,
    },
  };
  const mensaje = {
    subject: subject,
    from: email,
    to: process.env.USER_EMAIL,
    text: text,
    html: `
          <div style="font-family: 'Roboto', sans-serif; color: #333; background-color: #f9f9f9; padding: 20px;">
            <h1 style="color: #007bff; text-align: center; font-size: 24px;">Este es un correo enviado desde el Portfolio!</h1>
              <div style="margin-top: 20px;">
                  <p style="font-size: 16px;"><strong>Nombre:</strong> ${subject}</p>
                  <p style="font-size: 16px;"><strong>Correo de:</strong> ${email}</p>
                  <p style="font-size: 16px;"><strong>Mensaje:</strong> ${text}</p>
              </div>
          </div>`,
    importance: "high",
  };

  const transport = nodemailer.createTransport(config);
  const info = await transport.sendMail(mensaje);

  return res.status(200).send(mensaje);
});

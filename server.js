require("dotenv").config();
const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const { createProxyMiddleware } = require("http-proxy-middleware");
// const sgMail = require("@sendgrid/mail");

const app = express();
// Config
const PORT = process.env.PORT;
const HOST = process.env.HOST;
const API_SERVICE_URL = process.env.ARTISAN_API;

// SendGrid config
// sgMail.setApiKey(process.env.SENDGRID_API_KEY);

app.use(express.static(path.join(__dirname, "build")));

// Proxy endpoints
app.use(
  "/api",
  createProxyMiddleware({
    target: API_SERVICE_URL,
    changeOrigin: true,
    pathRewrite: {
      [`^/api`]: "",
    },
  })
);

// body parser
app.use(bodyParser.urlencoded({ extended: true }));

// app.get("/email", (req, res) => {
//   // Send test email
//   sgMail
//     .send(msg)
//     .then(() => {
//       console.log("Email sent");
//     })
//     .catch((error) => {
//       console.error(error);
//     });
//   res.send("GET request to /email");
// });

// app.post("/email", (req, res) => {
//   let submitMessage = "";

//   res.send(submitMessage);
// });

// Serve react
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build/index.html"));
});

app.listen(PORT, HOST, () => {
  console.log(`Starting Proxy at ${HOST}:${PORT}`);
});

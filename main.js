import express from "express";
import routes from "./routes/routes.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use("/", routes);


app.listen(PORT, () => console.log(`Servidor corriendo en el puerto http://localhost:${PORT}`))
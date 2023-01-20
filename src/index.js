const express = require("express");

const bodyParser = require("body-parser");
const v1WorkoutRouter = require("./v1/routes/clientesRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use("/api/v1/clientes", v1WorkoutRouter);

app.listen(PORT, () => {
  console.log(`API is listening on port ${PORT}`);
});




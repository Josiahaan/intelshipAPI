const express = require('express');
const cors = require("cors");
const app = express();
const port = 3000;
const router = require("./routes");
const errorHandler = require("./middlewares/errorHandler")

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", router)

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
});
const express = require("express");
const app = express();
const routes = require("./routes");

const PORT = process.env.PORT || 8000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

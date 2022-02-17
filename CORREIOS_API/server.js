const express = require("express");
const app = express();
const port = 5000; 

app.use(express.json);
require("./src")(app);

app.listen(port);
const express = require("express")
const cors = require("cors");
require("dotenv/config");
const {mongoDB} = require("./config/dbConfig");
const  router  = require("./routes/personRoutes");

const app = express();

app.use(cors()); 
app.use(express.json());
app.use(router);

const PORT = 8000;
mongoDB();
app.listen(PORT, () => console.log(`server is running on Port ${PORT}`));
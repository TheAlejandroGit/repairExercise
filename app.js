const express = require("express");


//Routers
const {usersRouter}=require("./routes/users.routes")

//utils
const {sequelize}= require("./utils/database")

//Init express app
const app = express();

//Enable incoming JSON data 
app.use(express.json());

//endpoints
app.use("api/v1/users", usersRouter);



//validate credentials
sequelize.authenticate()
  .then(() => console.log("DB authenticated"))
  .catch((err) => console.log(err));

  //sincronizar modelos creadors
  sequelize.sync()
  .then(() => console.log("DB synced"))
  .catch((err) => console.log(err));

// spin up server

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Express app running on port: ${PORT}`);
});

require("dotenv").config()

const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const projectRoutes = require("./routes/projects")
const userRoutes = require("./routes/user")
const aboutRoutes = require("./routes/about")
const cardRoutes = require("./routes/card")

const app = express();

app.use(express.json())
app.use(cors({
  origin: "*"
}))

app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

//routes
app.use("/", userRoutes);
app.use("/", aboutRoutes);
app.use("/", cardRoutes);
app.use("/", projectRoutes);

// connect to mongoose
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    // begin listen for requests
    app.listen(process.env.PORT, () => {
      console.log("listening on port", process.env.PORT);
    })
  })
  .catch((error) => {
    console.log(error);
  })

module.exports = app;
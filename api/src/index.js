require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const multer = require("multer");
const path = require("path");
const shortId = require("shortid");
const moment = require("moment");
const cors = require("cors");

// MongoDB Connection
require("./database/db");

const app = express();

// Setting
app.set("port", process.env.PORT || 3001);

// Setting Image
const storage = multer.diskStorage({
  destination: path.join(__dirname, "public/images/uploads"),
  filename: (req, file, cb, filename) => {
    cb(
      null,
      `${moment().format("YYYYMMDD")}${shortId.generate()}-${path.extname(
        file.originalname
      )}`
    );
  },
});
app.use(multer({ storage }).single("image"));

// Middleware
app.use(cors({ origin: "*" }));
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Router
// app.use('/', require('./routes/page.routes'))
app.use("/api", require("./routes/image.routes"));

// Static file
app.use(express.static(path.join(__dirname, "public")));

// Start server
app.listen(app.get("port"), () => {
  console.log(`Server run on port: ${app.get("port")} - http://localhost:3001`);
});

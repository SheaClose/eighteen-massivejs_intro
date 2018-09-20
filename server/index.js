require("dotenv").config();

const express = require("express"),
  app = express(),
  { json } = require("body-parser"),
  port = process.env.PORT || 3001,
  massive = require("massive"),
  { getBands, postBand, putBand, deleteBand } = require("./bandCtrl");
// console.log(process.env.CONNECTION_STRING);
app.use(json());

massive(process.env.CONNECTION_STRING).then(dbInstance => {
  app.set("db", dbInstance);
  dbInstance.init();
});

app.get("/api/bands", getBands);
app.put("/api/bands/:id", putBand);
app.post("/api/bands", postBand);
app.delete("/api/bands/:id", deleteBand);

app.listen(port, () => console.log(`Listening @ port: ${port}`));

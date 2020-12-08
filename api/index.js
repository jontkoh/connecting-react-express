const express = require('express');

const app = express();

// required middleware for CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  next();
});

// An api endpoint that returns a short list of items
app.get("/api/getList", (req, res) => {
  const list = ["item1", "item2", "item3"];
  res.json(list);
  console.log("sent list of items");
})

app.listen(8000, ()=> {
  console.log("listening on 8000");
})
const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();

app.use(express.static(path.join("..", __dirname, 'client/dist')));
app.use(cors);

app.get("/api/getList", (req, res) => {
  const list = ["item1", "item2", "item3"];
  res.json(list);
  console.log("sent list of items");
})

app.listen(8000, ()=> {
  console.log("listening on 8000");
})
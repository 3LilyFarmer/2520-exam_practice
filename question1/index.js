const express = require("express");
const PORT = process.env.PORT || 8007;
const app = express();
const fs = require("fs").promises;
// Don't worry about these 4 lines below
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.get("/", (req, res) => {
  // fs.readFile("./database.json", "utf8").then((content) => JSON.parse(content)).then((obj) => console.log(obj.users)).catch((err) => console.log(err))

  res.render("createcard");
});
app.get("/people/:id", (req, res) => {
  res.render("people");
});

app.get("/:id", (req, res) => {
  const id = req.params.id;
  fs.readFile("./database.json", "utf8")
    .then((content) => JSON.parse(content))
    .then((obj) => {
      for(var id in obj) {
        if(obj[id] == value) {
          return true;
        }
      }
    })
    .then((user) => res.render("homepage", user))
    .catch((err) => console.log(err))
  
});

app.get("/:id/photos", (req, res) => {
  const id = req.params.id;
});

app.listen(PORT, () => {
  console.log(`Server now is running at http://localhost:${PORT} 🚀`);
});

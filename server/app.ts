import * as express from "express";

interface User {
  id: number;
  name: string;
  password: string;
  dateOfBirth: Date;
  dateOfFirstLogin: Date;
  dateOfNextNotification: Date;
  information: string;
}

let users: User[] = require("../users.json");

const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const port = 5000;

app.get("/", (req, res) => {
  res.send("First Homework");
});

app.get("/users", (req, res) => {
  res.json(users);
});

app.get("/users/:id", (req, res) => {
  const user = users.find(user => user.id === Number(req.params.id));
  res.send(user);
});

app.post("/users/add", (req, res) => {
  const user = {
    id: 1,
    name: req.body.name,
    password: req.body.password,
    dateOfBirth: new Date(req.body.dateOfBirth),
    dateOfFirstLogin: new Date(),
    dateOfNextNotification: new Date(),
    information: req.body.information
  };

  users.push(user);
  res.send(user);
});

app.put("/users/:id", (req, res) => {
  let user = users.find(user => user.id === Number(req.params.id));
  if(user){
     user.name = req.body.name;
  user.password = req.body.password;
  res.send(user);
  }
});

app.delete("/users/:id", (req, res) => {
  users = users.filter(item => item.id !== Number(req.params.id));
  res.send(users);
});

app.listen(port, () => {
  console.log(`Server successfully started on ${port} port`);
});


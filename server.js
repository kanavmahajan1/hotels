const express = require("express");
const app = express();
const db = require("./db"); 
const Person = require("./models/Person");
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello from Express");
});
app.get("/s", (req, res) => {
  res.send("Hello from Chandigarh" );
});
app.post("/persons", async (req, res) => {
  try {
    const person = new Person(req.body);  
    await person.save();
    res.status(201).send(person);
  } catch (error) {
    res.status(400).send(error);
  }
});

app.listen(3000, () => {
  console.log(`Server running on port 3000`);
});


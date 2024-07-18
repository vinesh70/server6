const express = require("express");
const cors = require("cors");
const { MongoClient } = require("mongodb");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/save", (req,res) => {
	const url = "mongodb+srv://vineshryapak1234:4wS86oP5pUlEyem5@cluster0.t5qymbf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
	const client = new MongoClient(url);
	const db = client.db("whatnext24");
	const coll = db.collection("student");
	const document = {"name": req.body.name, "choice": req.body.choice};
	coll.insertOne(document)
	.then(result => res.send(result))
	.catch(err => res.send(err)); 
});

app.listen(6500, () => {console.log("Server listening at 6500");});
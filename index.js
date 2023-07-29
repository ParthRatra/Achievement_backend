const express = require("express");
const app = express();

const Database = require("./config/database");
const dotenv = require("dotenv");

Database.connect();
dotenv.config();

const PORT = process.env.PORT || 4000;
app.use(express.json());

app.get("/", (req, res) => {
	return res.json({
		success:true,
		message:'Your server is up and running....'
	});
});

app.listen(PORT, () => {
	console.log(`App is running at ${PORT}`)
})
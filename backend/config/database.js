const mongoose = require("mongoose");

const connectDatabase = () => {
	mongoose
		.connect("mongodb://127.0.0.1:27017/Malebettastore")
		.then(() => console.log("DB connection successful!"))
		.catch((err) => {
			console.log(err);
		});
};
module.exports = connectDatabase;

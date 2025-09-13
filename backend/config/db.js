const mongoose = require("mongoose");

const connectDB = async () => {
  const uri = process.env.MONGO_URI;

  if (!uri) {
    throw new Error("Dodaj MONGO_URI do .env");
  }

  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Połączono z MongoDB");
  } catch (error) {
    console.error("Błąd połączenia:", error);
    process.exit(1);
  }
};

module.exports = connectDB;

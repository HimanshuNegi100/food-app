const mongoose = require("mongoose");

const mongoURI =
  "mongodb+srv://himanxunegi:H6398590622@cluster0.yrf0ymf.mongodb.net/foodMate?retryWrites=true&w=majority&appName=Cluster0";

const mongoDB = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log("Connected to MongoDB");
    const fetched_data = await mongoose.connection.db.collection(
      "sampleDishes"
    );
    const data = await fetched_data.find({}).toArray();
    console.log(data);
  } catch (err) {
    console.error(err);
  }
};

module.exports = mongoDB;

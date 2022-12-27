import mongoose from "mongoose";

const amazonSchema = mongoose.Schema({
  id: Number,
  title: String,
  price: Number,
  image: String,
  rating: Number,
  type: String,
});

// collection inside the database
export default mongoose.model("amazonProducts", amazonSchema);

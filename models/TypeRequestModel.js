import mongoose from "mongoose";

const Schema = mongoose.Schema;
const TypeRequestSchema = new Schema({
    name: String,
  locationCode: Number,
  problemDescription: Number,
  phone: String,
  status: Number,
  numOfStuckPeople: Number,
  preferenceCode: Number,
  volunteerCode: String
});

const TypeRequestModel = mongoose.model("typeRequests", TypeRequestSchema);
export default TypeRequestModel;
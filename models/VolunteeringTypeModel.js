import mongoose from "mongoose";

const Schema = mongoose.Schema;
const VolunteeringTypeSchema = new Schema({
  code: Number,
  type: String
});

const VolunteeringTypeModel = mongoose.model("volunteeringType", VolunteeringTypeSchema);
export default VolunteeringTypeModel;
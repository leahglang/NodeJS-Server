import mongoose from "mongoose";

const Schema = mongoose.Schema;

const LocationSchema = new Schema({
    code: Number,
    locationName: String
});

const LocationModel = mongoose.model("locations", LocationSchema);

export default LocationModel;


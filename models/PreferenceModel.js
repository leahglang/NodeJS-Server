import mongoose from "mongoose";

const Schema = mongoose.Schema;
const PreferenceSchema = new Schema({
    code: Number,
    preferenceName : String
});

const PreferenceModel = mongoose.model("preferences", PreferenceSchema);
export default PreferenceModel;
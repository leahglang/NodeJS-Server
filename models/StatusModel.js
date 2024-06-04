import mongoose from "mongoose";

const Schema = mongoose.Schema;
const StatusSchema = new Schema({
    code: Number,
    state : String
});

const StatusModel = mongoose.model("statuses", StatusSchema);
export default StatusModel;
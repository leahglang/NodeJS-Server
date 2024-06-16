import mongoose from "mongoose";

const Schema = mongoose.Schema;

const RequestSchema = new Schema({
    _id: Number,
    location : String, 
    description : String,
    importance : String,
    people : Number,
    contactNumber : String,
    status : String,
    volunteerId : String
})
/*, 'helpRequest'*/
const Request = mongoose.model('Request', RequestSchema);


export default Request;
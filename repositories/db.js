import mongoose from 'mongoose';

mongoose.set("strictQuery", false);
const url = 'mongodb+srv://leahgl845:tpY6kvY6VdFvfd1a@leahlang.bwg3yuz.mongodb.net/volunteering';

export default async function connect() {
    try{
        await mongoose.connect('mongodb+srv://leahgl845:tpY6kvY6VdFvfd1a@leahlang.bwg3yuz.mongodb.net/volunteering')
    }
    catch(e){
        console.log(e);
    }
};



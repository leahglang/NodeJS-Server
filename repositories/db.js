import mongoose from 'mongoose';

mongoose.set("strictQuery", false);
// const url = 'mongodb+srv://leahgl845:tpY6kvY6VdFvfd1a@leahlang.bwg3yuz.mongodb.net/Volunteering';

export default async function connect() {
    try{
        await mongoose.connect('mongodb+srv://leahgl845:tpY6kvY6VdFvfd1a@leahlang.bwg3yuz.mongodb.net/Volunteering')
    }
    catch(e){
        console.log(e);
    }
};



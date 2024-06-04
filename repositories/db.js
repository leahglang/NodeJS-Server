import mongoose from 'mongoose';

mongoose.set("strictQuery", false);
// const uri = 'mongodb://priority:27017/Leah_Mini_DB';
<<<<<<< HEAD
const url = 'mongodb+srv://leahgl845:tpY6kvY6VdFvfd1a@leahlang.bwg3yuz.mongodb.net/volunteering';

export default async function connect() {
    // await mongoose.connect('mongodb://priority:27017/?Leah_Mini_DB')
    await mongoose.connect(/*url*/ 'mongodb+srv://leahgl845:tpY6kvY6VdFvfd1a@leahlang.bwg3yuz.mongodb.net/volunteering')
=======

export default async function connect() {
    await mongoose.connect('mongodb://priority:27017/Leah_Mini_DB').catch(console.log(new Error('error')));
    // await mongoose.connect('mongodb+srv://Mini:mini4151@cluster0.r9plqqb.mongodb.net/Leah_Mini')

    // await mongoose.connect(uri)
>>>>>>> 03dd9b1f6ec915921fc8f0ec66f9223095b1f64e

};



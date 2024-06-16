import mongoose from 'mongoose';

mongoose.set("strictQuery", false);
// const url = 'mongodb+srv://leahgl845:tpY6kvY6VdFvfd1a@leahlang.bwg3yuz.mongodb.net/Volunteering';

export default async function connect() {
    try {
        await mongoose.connect(process.env.CONN_STRING)
    }
    catch (e) {
        console.log(e.message);
        throw new Error("unable to connect to mongoDB: ");
    }

    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function () {
        console.log('Connected to MongoDB');
    });
}





const mongoose = require('mongoose');

const mongoURI = 'mongodb+srv://powerpuff_girls:<SzrW04clb1bSnfl8>@medsupply1.0khtcdm.mongodb.net/medSupplyMern?retryWrites=true&w=majority';
const mongoDB = async() => {
    try {
        mongoose.set("strictQuery", false);
        mongoose.connect(mongoURI, () => {
        console.log("MongoDB connected successfully")
    });
    }
    catch(error){
        console.log(error)
        process.exit()
    }
}


module.exports = mongoDB;

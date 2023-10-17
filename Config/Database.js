const mongoose = require('mongoose')
const env = require('./env')
const mongdbURL = env.DATABASE_URI;
const connectDB = async () => {
    try{
        await mongoose.connect(mongdbURL, {
            useNewUrlParser : true,
            useUnifiedTopology : true,
        })
        console.log('Mongodb is connected !')
    }catch(err){
        console.log('Mongodb is not connected !')
    }
}

module.exports = connectDB;



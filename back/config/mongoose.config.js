const mongoose = require('mongoose');
mongoose.set('strictQuery', true)
require('dotenv').config()

module.exports = async () => {
    try {
        await mongoose.connect(`mongodb://${process.env.MONGO_INITDB_ROOT_USERNAME}:${process.env.MONGO_INITDB_ROOT_PASSWORD}@${process.env.MONGO_ADDRESSE}:${process.env.MONGO_PORT}`)
        console.log('Connected to MongoDB')
    } catch (error) {
        console.log('Error connecting to MongoDB', error.message)
    }
}
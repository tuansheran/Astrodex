const mongoose = require('mongoose')


const characterSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please enter character name"]
        },

        galaxy: {
            type: String,
            required: [true, "Please enter character origin"]
        },

        race: {
            type: String,
            required: true
        },

        dangerPoint:{
            type: Number,
            required: true
        },

        description: {
            type: String,
            required: true
        },

        longDescription:{
            type: String,
            required: true
        },
        
        image:{
            type: Buffer
        }
    }
)

const Character = mongoose.model('Character', characterSchema)
module.exports = Character
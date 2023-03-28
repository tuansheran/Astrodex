const express = require('express');
const cors = require('cors');

const { default: mongoose } = require('mongoose');
const app = express();


const Character = require('./models/astroCharacterModel')


mongoose.
connect('mongodb+srv://ashek2019127:sheran2002@astrodex.h0gt5k6.mongodb.net/?retryWrites=true&w=majority').
then(()=>{
    console.log("Connected to db sucsesfully")
}).catch((error)=>{
    console.log(error)
})


app.use(express.json())
app.use(cors())

app.get('/users', ()=>{
    res.send('A list of users')
})

//send characters to frontend
app.get('/character', (req, res) =>{
    Character.find().then((characters) =>{
        res.send(characters)
    })
    .catch((err) => {
        console.error(err);
        res.status(500).send('Error retrieving characters from database');
    });
    
})

//send characters to db
app.post('/character', async(req, res) => {
    try {
        const character = await Character.create(req.body)
        res.status(200).json(character)
        
    } catch (error) {
        console.log(error)
    }   
})



app.listen(4000, ()=>{
    console.log("application listing in port4000")
})
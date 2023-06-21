const express = require('express');
const cors = require('cors');
require('dotenv').config();

const monogURI = process.env.DATABASE_ACESS;
const { default: mongoose } = require('mongoose');
const app = express();

const Character = require('./models/astroCharacterModel')


//conecting to db
mongoose.connect(monogURI).then(()=>{
    console.log("Connected to db sucsesfully")
}).catch((error)=>{
    console.log(error)
})


app.use(express.json())
app.use(cors())


//GET Character
app.get('/character', (req, res) =>{
    Character.find().then((characters) =>{
        res.send(characters)
    })
    .catch((err) => {
        console.error(err);
        res.status(500).send('Error retrieving characters from database');
    });
    
})

//POST Character
app.post('/character', async(req, res) => {
    try {
        const character = await Character.create(req.body);
        res.status(201).json(character);
        
    } catch (error) {
        console.log(error)
    }   
})


//GET Single Character
app.get('/test/:id', async(req, res) =>{

    const name = req.params.id;
    console.log(req.params.id);
    try {
      // Find the user by name in the MongoDB collection
      const character = await Character.findOne({name: name});
  
      if (!character) {
        return res.status(404).json({ message: 'Character not found' });
      }
      res.json(character);

    } catch (err) {
      console.error(err);
      res.status(500).send('Error retrieving user');
    }

})

//DELETE a character 
app.delete('character/delete/:id', async(req, res) =>{
    const name = req.params.id;
    Character.deleteOne({name: name}, (err, result)=>{
        if(err){
            res.status(500).json({error: err})
        }
        else{
            res.status(202).json({success: true}) //202 response accepted
        }
    })

})


app.listen(4000, ()=>{
    console.log("application listing in port4000")
})
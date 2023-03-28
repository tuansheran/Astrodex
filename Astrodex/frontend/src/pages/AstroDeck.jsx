import { useEffect, useState } from "react";
import Astrocard from "../components/Astrocard";
import Appbar from "../components/Appbar"
import {  Grid, Container } from "@mui/material";
import axios from 'axios';
import Footer from "../components/Footer";

const AstroDeck = () => {

    const [characters, setCharacters] = useState([])
    var data
    useEffect(
        ()=>{
            axios.get('http://localhost:4000/character').then((response)=>{
                data = response.data
                setCharacters(response.data)
                // console.log(data)
                console.log(characters)

            }).catch((error) =>{
                console.log(error)
            })
        }, []
    );
    

    return (
        <div>
            <Appbar/>
            <Grid container  spacing={4} marginTop="60px" justifyContent="center" alingItem="center" sx={{width: "100%"}}>
            {characters.map((character) => (             
                <Grid item spacing={4} >
                     <Astrocard name={character.name} description={character.description} />
                </Grid>
               
            ))}
        </Grid>
          

        </div>
        
 
    );
};

export default AstroDeck;
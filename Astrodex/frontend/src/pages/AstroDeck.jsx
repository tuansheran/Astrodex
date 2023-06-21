import { useEffect, useState } from "react";
import Astrocard from "../components/Astrocard";
import Appbar from "../components/Appbar"
import {  Grid } from "@mui/material";
import axios from 'axios';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

const AstroDeck = () => {

    const [characters, setCharacters] = useState([]);

    useEffect(
        ()=>{
            axios.get('http://localhost:4000/character').then((response)=>{
                const data = response.data;
                setCharacters(response.data);
                console.log(data);
                console.log(characters);

            }).catch((error) =>{
                console.log(error)
            })
        }, []
    );
    

    return (
        <div>
            <Appbar/>
            <Grid 
            container  
            spacing={4} 
            marginTop="60px" 
            justifyContent="center" 
            alingItem="center" 
            sx={{width: "100%"}}
            >
            
            {characters.map((character) => (             
                <Grid item spacing={4} >
                     <Astrocard name={character.name} description={character.description} />
                </Grid>
            ))}
        </Grid>
            <Fab
            style={{
                height: "70px",
                width: "70px",
                backgroundColor: "#7EC8E3",
                position: 'fixed',
                bottom: '20px',
                right: '20px',
            }}
            >
                <AddIcon/>
            </Fab>
         
        </div>
        
 
    );
};

export default AstroDeck;
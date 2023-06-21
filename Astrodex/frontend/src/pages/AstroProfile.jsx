import {  Avatar, Box, Stack, Tab, Tabs, Typography } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CommentIcon from '@mui/icons-material/Comment';
import PaymentsIcon from '@mui/icons-material/Payments';
import Appbar from '../components/Appbar';
import { useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const AstroProfile = () => {
    const {id} = useParams();
    const [character, setCharacter] = useState({});

    useEffect(()=>{
            
            axios.get(`http://localhost:4000/test/${id}`).then((response)=>{
                const data = response.data;
                setCharacter(data);
                console.log(character);
                // console.log(data);
            }).catch((err)=>{
                console.log(err);
            })
        },
        []);

    const deleteCharacter = () =>{
        axios.delete(`http://localhost:4000/test/${id}`)
    }

    return (
        <Box>
             <Appbar/>
                <Box
                display="flex" 
                justifyContent="center" 
                mt={15}>

                <Avatar
                sx={{
                    width: "150px",
                    height: "150px",
                }}
                ></Avatar>

             </Box>


             <Box sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                mt: 5
             }}>
                <Stack direction={"row"} spacing={3}>
                    <DeleteIcon sx={{
                        color: "#7EC8E3"
                    }} />
                    <FavoriteIcon sx={{
                        color: "#7EC8E3"
                    }}/>

                    <CommentIcon sx={{
                        color: "#7EC8E3"
                    }}/>

                    <PaymentsIcon sx={{
                        color: "#7EC8E3"
                    }}/>
                </Stack>
             </Box>

             <Box display={"flex"} justifyContent={"center"} sx={{
                width: "100%",
                mt: 3

             }}>
                <Typography variant="h1" color={"white"}>
                    {character.name}
                </Typography>
             </Box>
               

             <Box  display="flex" justifyContent={"center"} sx={{
                width: "100%"
             }}>
                <Box display={"flex"} justifyContent={"center"} mt={15} sx={{
                    backgroundColor: "#FFFFFF",
                    width: "90%",
                    height: "50%",
                    borderRadius: 10
                }}>
                    <Typography>
                        {character.description}  
                    </Typography>
                </Box>

             </Box>
             

        </Box>
           
    );
};

export default AstroProfile;
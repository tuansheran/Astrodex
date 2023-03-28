import { Card, CardMedia, CardContent, CardActions, Button, Typography } from '@mui/material';
import AstroCreature from '../assets/testAstroCreature.jpg'
import { useState } from 'react';


const Astrocard = (props) => {
    
    const [alienName, setAlienName] = useState('')
    const [alienImage, setAlienImage] = useState('')
    const [alienDescription, setAlienDescription] = useState('')
    
    return (
        <Card
            sx={{width: 350, height: 350}}
        >
            <CardMedia
            sx={{height: 200}}
            image={AstroCreature}
            >

            </CardMedia>

            <CardContent >
                <Typography gutterBottom variant="h5">
                    {props.name}
                </Typography>
                <Typography variant="body2">
                    {props.description}
                </Typography>
             </CardContent>

             <CardActions>
                <Button size="small">View More</Button>
             </CardActions>

        </Card>
    );
};

export default Astrocard;
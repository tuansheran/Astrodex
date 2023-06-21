import { Card, CardMedia, CardContent, CardActions, Button, Typography } from '@mui/material';
import AstroCreature from '../assets/testAstroCreature.jpg'
import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';

const theme = createTheme({
    palette: {
      mode: 'dark',
    },
  });


const Astrocard = (props) => {
    
    return (
        <ThemeProvider theme={theme}>
        
        <Card
            sx={{
            width: 350, 
            height: 350
            }}>
            <CardMedia
                sx={{height: 200}}
                image={AstroCreature}>

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
                <Link to={`/astroprofile/${props.name}`}>
                    <Button size="small">View More</Button>
                </Link>
             </CardActions>
        </Card>
    </ThemeProvider>
    );
};

export default Astrocard;
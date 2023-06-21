import { AppBar, Toolbar, Stack, Typography, Button } from '@mui/material';

const Appbar = () => {
    return (
        <AppBar 
        sx={{
            bgcolor: "#001540",
            
        }}
        >
            <Toolbar>
                <Stack direction={"row"} flexGrow={1}>
                    <Typography>ASTRODEX</Typography>
                </Stack>
                <Stack direction={"row"} justifyContent={"end"} flexDirection="row">
                    <Typography 
                    sx={{
                        m:3, 
                        color:"secondary"
                    }}>ASTRO-DECK
                    </Typography>

                    <Typography 
                    sx={{
                        m:3
                    }}> ABOUT US
                    </Typography>

                    <Typography 
                    sx={{
                        m:3
                        }}>DONATE
                    </Typography>
                </Stack>

            </Toolbar>
        </AppBar>
    );
};

export default Appbar;
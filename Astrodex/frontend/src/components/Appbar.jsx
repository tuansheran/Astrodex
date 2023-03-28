import { AppBar, Toolbar, Stack, Typography, Button } from '@mui/material';

const Appbar = () => {
    return (
        <AppBar 
        sx={{
            bgcolor: "#242423",
            borderRadius: 1
        }}
        >
            <Toolbar>
                <Stack direction={"row"} flexGrow={1}>
                    <Typography>LOGO-NAME</Typography>
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
                    }}> ASTRO-HOME
                    </Typography>

                    <Typography 
                    sx={{
                        m:3
                        }}>PROFILE
                    </Typography>
                </Stack>

            </Toolbar>
        </AppBar>
    );
};

export default Appbar;
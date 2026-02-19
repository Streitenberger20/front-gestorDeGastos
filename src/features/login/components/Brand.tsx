import { Box, Divider, Typography, } from "@mui/material";

export function Brand() {
    return (

        <>

            <Box
                sx={{
                    mx: "40%",
                    minWidth: "20%",
                    p: 4,
                }}>

                < Box
                    component="img"
                    src="logo-empresa.png"
                    alt="Logo"
                    sx={{
                        width: {
                            xs: 180, sm: 240, md: 320
                        }, // tamaños por breakpoint
                        maxWidth: "100%",
                        height: "auto",
                        display: "block",
                        mx: "auto",
                        my: 4
                    }}
                />

                <Typography
                    sx={{
                        fontWeight: 600,
                        fontSize: {
                            xs: 15, sm: 20, md: 25
                        },
                        textAlign: "center",
                        color: "#dd0404"
                    }}>
                    Iniciar Sesion
                </Typography>

                <Divider />

            </Box>


        </>


    )
}


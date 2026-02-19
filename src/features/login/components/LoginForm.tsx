import { Box, Button, Grid } from "@mui/material";
import { LoginInput } from "./LoginInput";
import type { LoginRequest } from "../types/LoginRequest";
import { useState } from "react";



export function LoginForm() {

    const [loginData, setLoginData] = useState<LoginRequest>({
        username: "",
        password: ""
    });


    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const fieldName = e.target.name;
        const fieldValue = e.target.value;

        setLoginData(prev => ({
            ...prev,
            [fieldName]: fieldValue
        }))
    }

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        console.log(loginData);

    }

    return (
        <>
            <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{
                    bgcolor: "#ffffff",
                    mx: "40%",
                    minWidth: "20%",
                    p: 4,
                    borderRadius: 2,
                    boxShadow: 3
                }}>
                <Grid container spacing={2} direction="column" >

                    <LoginInput
                        label="Usuario"
                        type="text"
                        name="username"
                        value={loginData.username}
                        onChange={handleChange}
                    ></LoginInput>

                    <LoginInput
                        label="Contraseña"
                        type="password"
                        name="password"
                        value={loginData.password}
                        onChange={handleChange} />

                    <Button
                        variant="contained"
                        color="primary"
                        type="submit">
                        Iniciar Sesion
                    </Button>

                </Grid>
            </Box>
        </>


    )



}
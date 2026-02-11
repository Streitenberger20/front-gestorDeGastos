import { TextField } from "@mui/material";
import type { LoginInputProps } from "../types/LoginInputProps";




export function LoginInput(props: LoginInputProps) {

    const { label, type, name,value, onChange } = props;


    return (
        <TextField
            label={label}
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            variant="outlined"
            sx={{
                /* Texto */
                '& .MuiInputBase-input': {
                    color: '#ffffff',
                },

                /* Label */
                '& .MuiInputLabel-root.Mui-focused, & .MuiInputLabel-root ': {
                    color: '#dd0404',
                },

                /* Borde */
                '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                        borderColor: '#6a0303',
                    },
                    '&:hover fieldset, &.Mui-focused fieldset': {
                        borderColor: '#dd0404',
                    }
                },
            }}
        />
    )
}

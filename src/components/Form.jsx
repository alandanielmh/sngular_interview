import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Function from '../Images/Function.png'
import TextField from '@mui/material/TextField';
import Button  from '@mui/material/Button';
import { useUpdate } from '../hooks/useUpdate';
import { useState } from 'react';
import { Result } from './Result';

export const Form = ({formtoApp}) => {
    const { inputNumber, calculate } = useUpdate('')
    const [getNumber, SetNumber] = useState('')

     return (
        <>
            <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justifyContent="center"
                style={{ minHeight: '100vh' }}
            >
                <Stack spacing={4} direction="column">
                    <h1>Calcular la serie dada a continuación</h1>
                    <img src={Function} alt='Function'></img>
                    <h2>En caso de que n - 2 no sea primo se multiplicara la expresion por cero y regresara un cero</h2>
                    <TextField  onChange={(e) => { SetNumber(e.target.value) }} value={getNumber} label="Insertar un Número (n)" variant="filled" />
                    <Button  onClick={(e) => { calculate(getNumber) }} variant="contained">Calcula Fórmula</Button>
                    <Result num={inputNumber}/>
                </Stack>
            </Grid>
        </>
    )
}


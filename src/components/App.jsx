import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import { UseUpdate } from '../hooks/UseUpdate';
import Function from '../Images/Function.png'

export const App = () => {

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
                    <h2>En caso de introducir un número no primo se multiplicara la expresion por cero y regresara un cero</h2>
                    <UseUpdate/>
                </Stack>
            </Grid>
        </>
  )
}


import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import { UseUpdate } from '../hooks/useUpdate';
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
                    <UseUpdate/>
                </Stack>
            </Grid>
        </>
  )
}


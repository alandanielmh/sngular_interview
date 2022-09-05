
import Grid from '@mui/material/Grid';

export const  Result = ({num}) => {
    
  return (
    <>
            <Grid
                container
                direction="column"
                alignItems="center"
                justifyContent="center"
            >
                <h1>{`El resultado es: ${ num }`}</h1>
            </Grid>
        </>
  )
}


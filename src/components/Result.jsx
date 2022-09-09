import Grid from "@mui/material/Grid";
import { useSerieContext } from "./SerieProvider";

export const Result = () => {
   const { result } = useSerieContext();

  return (
    <>
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <h1>El resultado es: {result}</h1>
      </Grid>
    </>
  );
};

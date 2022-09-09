import { Form } from "./Form";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import Function from "../Images/Function.png";
import { Result } from "./Result";
import { useUpdate } from "../hooks/useUpdate";

export const SerieComponent = () => {
  const { calculate, number, result, setNumber } = useUpdate();
  return (
    <>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: "100vh" }}
      >
        <Stack spacing={4} direction="column">
          <h1>Calcular la serie dada a continuación</h1>
          <img src={Function} alt="Function"></img>
          <h2>
            En caso de que n - 2 no sea primo se multiplicara la expresion por
            cero y regresara un cero
          </h2>
          <Form calculate={calculate}  number={number} setNumber={setNumber}/>
        </Stack>
        <Result result={result} />
      </Grid>
    </>
  );
};

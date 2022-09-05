import { useState } from "react"
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { serie } from "../helpers/functions";

export const UseUpdate = () => {
    const [inputNumber , setInputNumber] = useState('');
    const [outputNumber, setOutputNumber]= useState('');

    const calcular = () => {

        setOutputNumber(serie(inputNumber))
    }

    return (
        <>
            <TextField  onChange={(e) => { setInputNumber(e.target.value) }} value={inputNumber} label="Insertar un Número (n)" variant="filled" />
            <Button role="boton" onClick={calcular} variant="contained">Calcula Fórmula</Button>
            <h1 data-testid="resp-waited">El resultado es: {outputNumber}</h1>
        </>
      );
}




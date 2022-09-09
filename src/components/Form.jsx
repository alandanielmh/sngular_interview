import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useSerieContext } from "./SerieProvider";

export const Form = () => {
  const { calculate, number, setNumber } = useSerieContext();

  return (
    <>
      <TextField
        value={number}
        onChange={({ target: { value } }) => setNumber(value)}
        label="Insertar un Número (n)"
        variant="filled"
        type="text"
      />
      <Button onClick={() => calculate()} variant="contained">
        Calcula Fórmula
      </Button>
    </>
  );
};

// export const Form = ({number,setNumber,calculate}) => {

//   const onInputChange = ({ target: { value }}) =>{
//     setNumber(value);
//   }

//   return (
//     <>
//       <TextField
//         value={number}
//         onChange={onInputChange}
//         label="Insertar un Número (n)"
//         variant="filled"
//         type="text"
//       />
//       <Button onClick={() => calculate()} variant="contained">
//         Calcula Fórmula
//       </Button>
//     </>
//   );
// };

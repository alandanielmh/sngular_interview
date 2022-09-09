import { useState } from "react";
import { serie } from "../helpers/functions";

export const useUpdate = () => {
  const [number, setNumber] = useState("");
  const [result, setResult] = useState("");

  const calculate = () => {
    setResult(serie(number));
  };

  return {
    calculate,
    number,
    result,
    setNumber,
  };
};

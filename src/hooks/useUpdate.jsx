import { useState } from "react"
import { serie } from "../helpers/functions";

export const useUpdate = () => {
    const [inputNumber , setInputNumber] = useState('');

    const calculate = (num) => {
        setInputNumber(serie(num))
    }
    
    return {
        inputNumber,
        calculate
    }
}




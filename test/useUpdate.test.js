import { serie } from "../src/helpers/functions"

describe('Unitest From 0 to 9 of the function ', () => { 

    test('should work with 0', () => { 

        
        const inputvalue = 0
        //fireEvent.click( screen.getByText('Calcula Fórmula'), {target: {value: inputvalue}})
        const result = serie(inputvalue)
        expect(typeof result).toBe('number')
        expect(result).toBe(0)
     })

     test('should work with 1', () => { 

        
        const inputvalue = 1
        //fireEvent.click( screen.getByText('Calcula Fórmula'), {target: {value: inputvalue}})
        const result = serie(inputvalue)
        expect(typeof result).toBe('number')
        expect(result).toBe(0)
     })

     test('should work with 2', () => { 

        
        const inputvalue = 2
        //fireEvent.click( screen.getByText('Calcula Fórmula'), {target: {value: inputvalue}})
        const result = serie(inputvalue)
        expect(typeof result).toBe('number')
        expect(result).toBe(0)
     })

     test('should work with 3', () => { 

        
        const inputvalue = 3
        //fireEvent.click( screen.getByText('Calcula Fórmula'), {target: {value: inputvalue}})
        const result = serie(inputvalue)
        expect(typeof result).toBe('number')
        expect(result).toBe(0)
     })

     test('should work with 4', () => { 

        
        const inputvalue = 4
        //fireEvent.click( screen.getByText('Calcula Fórmula'), {target: {value: inputvalue}})
        const result = serie(inputvalue)
        expect(typeof result).toBe('number')
        expect(result).toBe(504)
     })

     test('should work with 5', () => { 

        
        const inputvalue = 5
        //fireEvent.click( screen.getByText('Calcula Fórmula'), {target: {value: inputvalue}})
        const result = serie(inputvalue)
        expect(typeof result).toBe('number')
        expect(result).toBe(2268)
     })

     test('should work with 6', () => { 

        
        const inputvalue = 6
        //fireEvent.click( screen.getByText('Calcula Fórmula'), {target: {value: inputvalue}})
        const result = serie(inputvalue)
        expect(typeof result).toBe('number')
        expect(result).toBe(0)
     })

     test('should work with 7', () => { 

        
        const inputvalue = 7
        //fireEvent.click( screen.getByText('Calcula Fórmula'), {target: {value: inputvalue}})
        const result = serie(inputvalue)
        expect(typeof result).toBe('number')
        expect(result).toBe(25200)
     })

     test('should work with 8', () => { 

        
        const inputvalue = 8
        //fireEvent.click( screen.getByText('Calcula Fórmula'), {target: {value: inputvalue}})
        const result = serie(inputvalue)
        expect(typeof result).toBe('number')
        expect(result).toBe(0)
     })

     test('should work with 9', () => { 

        
        const inputvalue = 9
        //fireEvent.click( screen.getByText('Calcula Fórmula'), {target: {value: inputvalue}})
        const result = serie(inputvalue)
        expect(typeof result).toBe('number')
        expect(result).toBe(172872)
     })

     


 })
 
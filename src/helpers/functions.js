export const getFibonacci = (num) => {

    const map = new Map()

    const dp = (x) => {
        if (x <= 1) return x;

        if (!map.has(x)) {
            map.set(x, dp(x - 1) + dp(x - 2))
        }

        return map.get(x)
    }

    return dp(num);
}


export const getPrimo = (num) => {

    if (num <= 1) return 0;
    for (let i = 2; i <= num - 1; i++)
        if (num % i === 0) return 0;
    return num;
}


export const getTriangular  = (num) => {

    return ((num*(num+1))/2);
}


export const serie = (numero) => {

    const primo = 2*(getPrimo(numero-2));
    const triangular = 3*(getTriangular(numero-2));
    const fibonacci = 7*(getFibonacci(numero-1));
    return  Math.abs(primo * triangular * fibonacci);
}
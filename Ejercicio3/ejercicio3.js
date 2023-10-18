let elementos = [4,"dos",8,"tres",5,9,1,"cero"];


for (let i = 0; i < elementos.length; i++) {
    
    if (typeof elementos[i] === "number") {
        console.log(`El numero es: ${elementos[i]}`);
    }
    
}

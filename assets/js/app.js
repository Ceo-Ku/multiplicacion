function app(){
    let userNumber = parseInt(prompt('¿Qué número desea factorizar?', 0));
    if (userNumber > 20 || userNumber < 1 || isNaN(userNumber)){
        console.log('Número NO válido')
        return 0
    }
    for (let index = 1; index <= userNumber; index++) {
        console.log(`${index} x ${userNumber} = ${index * userNumber}`)
        // console.log(index + ' x ' + userNumber + ' = ' + index * userNumber)
    }
    
    let resultado = 1
    for (let i = 1; i <= userNumber; i++) {
        resultado *= i;
        console.log(`Factorial de ${i} = ${resultado}`);
    }   
}
app()



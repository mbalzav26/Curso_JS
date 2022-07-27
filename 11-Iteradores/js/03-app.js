// El Ejercicio Fizz Buzz

// multiplos de 3 = Fizz
// multiplos de 5 = Buzz
// multiplos de 3 y 5 = FizzBuzz

for(i = 1; i<= 100; i++){
    if(i % 3 === 0 && i % 5 === 0){
        console.log('FizzBuzz');
    }else if(i % 3 === 0){
        console.log('fizz');
    }else if(i % 5 === 0){
        console.log('buzz');
    }
}
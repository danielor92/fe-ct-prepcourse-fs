// * Las funciones callback son un tipo de funciones que se pasan por parámetro a otras funciones

// * Los callbacks son muy útiles en el mundo de la programación, nos aseguran que una función no se va a ejecutar antes de que se complete una tarea, 
// * sino que se ejecutará justo después de que la tarea se haya completado

var returnUser = function (){
    return 'Daniel'
}

var returnHi = function (){
    return 'Hi'
}

var hi = function (cb1, cb2) {
  return cb2() + ' ' + cb1()
}

var resultado = hi(returnUser, returnHi)

console.log(resultado)

var returnWord = function(comida){
    return 'Hoy quiero comer: ' + comida
}

var hablar = function (comida, cb){
    return cb(comida)
}

var fraseFinal = hablar('Pizza', returnWord)
console.log(fraseFinal);
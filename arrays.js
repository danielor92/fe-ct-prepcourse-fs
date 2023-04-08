var listaDeCompras = []
listaDeCompras[3] = 'tomates'
listaDeCompras[1] = 'lechuga'

console.log(listaDeCompras)

var elementoDelArray = listaDeCompras[1]
console.log(elementoDelArray)

/*

1 El método push() añade uno o más elementos al final de un arreglo, y devuelve la nueva longitud del array.

2 El método pop() elimina y devuelve el último elemento de un arreglo.

3 El método unshift() agrega uno o más elementos al inicio de un arreglo, y devuelve la nueva longitud del array.

4 El método shift() elimina y devuelve el primer elemento de un arreglo.

*/

//var colores = ['amarillo', 'azul']

//Adiciona una elemento al final del array
//colores.push('rojo')

//Adiciona un elemento en la primera posicion del arreglo
//colores.unshift('verde')

//Elimina el elemento en la ultima posicion del arreglo
//colores.pop()

//Elimina el elemento en la primera posicion del arreglo
//colores.shift()

/*
    //El metodo 'includes' busca el elemento que se le dice entre los parentesis y devuelve un boleano ya sea falso o verdadero.

    var pintores = ['Picasso', 'Velazquez', 'Van Gogh', 'Dali']
    var incluyeElemento = pintores.includes('Monet')
    console.log(incluyeElemento)
*/

/*
    //Este metodo 'every' valida todos los elementos del array por medio de una funcion de flecha la cual se encarga de trabajar con un parametro inicial llamado num el cual sera quien aplique la condicion en este caso pregunta si todos los elementos dentro del array son mayores a 5.

    var numeros = [10,6,8,9]
    var cumple = numeros.every(num => {
        return num > 5
    })
    console.log(cumple)

*/

/*
    // el metodo 'Split' nos permite separar un string y volverlo un arreglo donde cada letra es un elemento que hace parte del array, con esto podemos modificar palabras mal ingresadas o funcionalidades de quitar ciertos caracteres de nuestros strings.

    var palabra = 'Daniey'
    var palabraSeparada = palabra.split('')
    palabraSeparada.pop()
    palabraSeparada.push('l')
    //console.log(palabraSeparada)

*/


/*

    // el metodo 'join' nos permite volver a juntar nuestro array y volverlo un string.

     var palabraArreglada = palabraSeparada.join('')
    console.log(palabraArreglada)

*/
    var numeros = [1,2,3,4]
/*
    // el metodo 'forEach' es capaz de recorrer todo el arreglo en busca de ciertos elementos o todos dandonos opciones para poder buscar, validar, quitar incluso poner si se cumplen ciertas condiciones este metodo la mayoria de las veces es acompaniado de una funcion de flechas la cual se le indica el parametro que se va a buscar y la condicion como se muestra acontinuacion

    
    numeros.forEach(num => console.log(num))
    numeros.forEach(num => {
        if(num === 2) {
            console.log(num)
        }
    })
*/

/*

    // el metodo 'map' realiza una copia del arreglo original y realiza cambios sobre el arreglo si quisieramos restarle 1 a todos los elementos de un arreglo bastaria con llamar la funcion map y por medio de una funcion de flechas restarlo en lo que se retorna, tambien podriamos agregar condiciones si se cumplen para hacerlo, como se muestra acontinuacion

    var masUno = numeros.map((num) => {
        if(num > 0 ){
            return num = num - 1 
        }
    })
    console.log(masUno)

*/


/* 

- Métodos varios

    1 El método includes() determina si un arreglo incluye o contiene un elemento específico. Devuelve true o false en cada caso.

    2 El método every() determina si todos los elementos en un arreglo satisfacen una misma condición.

    3 El método split() convierte un string en un arreglo, donde cada elemento contendrá un sub-string, dependiendo del parámetro divisor que indiquemos.

    4 El método join() convierte un arreglo en un string, uniendo todos los elementos de este en una misma cadena.

- Métodos de recorrido

    1 El método forEach() nos permite recorrer un arreglo, realizando alguna acción en para cada elemento.

    2 El método map() también nos permite recorrer un arreglo y realizar una acción por cada elemento. La diferencia es que este método devuelve un nuevo arreglo los elementos modificados.

    - Encontrar el índice de un elemento del Array

        frutas.push('Fresa')
        // ["Manzana", "Banana", "Fresa"]
        let pos = frutas.indexOf('Banana') // (pos) es la posición para abreviar
        // 1

    - Eliminar un único elemento mediante su posición

        Ejemplo:
            Eliminamos "Banana" del array pasándole dos parámetros: la posición del primer elemento que se elimina y el número de elementos que queremos eliminar. De esta forma, .splice(pos, 1) empieza en la posición que nos indica el valor de la variable pos y elimina 1 elemento. En este caso, como pos vale 1, elimina un elemento comenzando en la posición 1 del array, es decir "Banana".

            let elementoEliminado = frutas.splice(pos, 1)
            // ["Manzana", "Fresa"]

    - Copiar un Array

        let vegetales = ["Repollo", "Zanahoria"]
        let copiaArray = vegetales.slice();
        // ["Repollo", "Zanahoria"]; ==> Copiado en "copiaArray"


    *- Bucles en arrays -*

        - BUCLE FOR
            var arr = [1,2,3,4,5]
            var letras = ['a', 'e', 'b', 'i', 'p']
            for(let i = 0; i < letras.length; i++) {
                //console.log(arr[i])
                if(letras[i] === 'p'){
                    console.log('el elemento '+i+' hace referencia a la letra '+ letras[i])
                }
            }
        - BUCLE WHILE
            var arr = []
            while (arr.length < 5){
                arr.push('BOOM!!')
            }
            console.log(arr)
*/
var arr = []

while (arr.length < 5){
    arr.push('BOOM!!')
}

console.log(arr)
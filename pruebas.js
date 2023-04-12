

function incrementarPorUno(array) {
    // El arreglo recibido por parámetro contiene números.
    // Retornar un arreglo con los elementos incrementados en +1.
    // Tu código:  
    let masUno = array.map(num => {
        return num + 1
    });
    return masUno
 }
//incrementarPorUno([10, 10, 16, 12])

function dePalabrasAFrase(palabras) {
    // El argumento "palabras" es un arreglo de strings.
    // Retornar un string donde todas las palabras estén concatenadas
    // con un espacio entre cada palabra.
    // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
    // Tu código:
    return palabras.join(' ')
 }
// dePalabrasAFrase(['Hello', 'World!'])

function arrayContiene(array, elemento) {
    // Verifica si el elemento existe dentro del arreglo recibido.
    // Retornar true si está, o false si no está.
    // Tu código:

    array.forEach(num => console.log(num))
    array.forEach(ele => {
       return ele === elemento       
    });

 }
//arrayContiene([97, 100, 80, 55, 72, 94], 'Hola')

function agregarNumeros(arrayOfNums) {
    // El parámetro "arrayOfNums" debe ser un arreglo de números.
    // Suma todos los elementos y retorna el resultado.
    // Tu código:
    let sum = 0
    for(let i = 0; i<arrayOfNums.length; i++){
       sum += arrayOfNums[i]
    }
    return sum
 }
// agregarNumeros([1,2,3,5])

function promedioResultadosTest(resultadosTest) {
    // El parámetro "resultadosTest" es un arreglo de números.
    // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
    // Tu código:
 
    let prom = 0
    for(let i = 0; i<resultadosTest.length; i++){
       prom += resultadosTest[i]
    }
    return prom/(resultadosTest.length)
 }
 //promedioResultadosTest([1,2,3,4,5,6])

function numeroMasGrande(arrayOfNums) {
    // El parámetro "arrayOfNums" es un arreglo de números.
    // Retornar el número más grande.
    // Tu código:

    let numMay = arrayOfNums[0]

    for(let i = 0; i < arrayOfNums.length; i++){
        if(arrayOfNums[i]>numMay){
            numMay = arrayOfNums[i]
        }
    }
    return numMay
 }
 //numeroMasGrande([1,21,3,4,5,40])

function multiplicarArgumentos() {
    // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
    // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
    // [PISTA]: "arguments" es un arreglo.
    // Tu código:
    var arreglo = arguments
    if(arguments.length > 1){
        if(arreglo.length>0){           
                if(arreglo.length > 1){
                    var num = 1
                        for(var i = 0; i<arreglo.length; i++ ){
                            num *= arreglo[i]
                        }
                        return num
                }else if(arguments[0].length==1){
                    return arguments[0]
            }
        }else{
            return 0
        }
    }else if(arguments.length == 1){
        return arguments[0]
    }else
        return 0
 }
//multiplicarArgumentos(3,3,3,3)

function cuentoElementos(array) {
    // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
    // Tu código:
       let cont=0
       for(let i = 0;i<array.length;i++){
          if(array[i]>18){
             cont++
          }
       }
       if(cont>0){
          return cont
       }
 }
//cuentoElementos([1,15,17,19,20,0])

function diaDeLaSemana(numeroDeDia) {
    // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
    // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
    // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
    // Tu código:
    switch(numeroDeDia){
 
       case 1:
          console.log('Es fin de semana')
          break;
       case 7:
          console.log('Es fin de semana')
          break;
       default:
          console.log('Es dia laboral')
          break;
    }
 
 }
//diaDeLaSemana(2)

function empiezaConNueve(num) {
    // Esta función recibe por parámetro un número.
    // Debe retornar true si el entero inicia con 9 y false en otro caso.
    // Tu código:
    var vars = num.toString()
    var arrSep = vars.split('')
    //console.log(arrSep)
    if(arrSep[0]==9){
       return true
    }else
       return false
}
//empiezaConNueve(9100)


function todosIguales(array) {
    // Si todos los elementos del arreglo son iguales, retornar true.
    // Caso contrario retornar false.
    // Tu código:
    var cumple = array.every(num => {    
        return array[0] == num
    })
    //console.log(cumple)
}
//todosIguales([23, 230, 230, 230])
//[230, 230, 230, 230]

function mesesDelAño(array) {
   // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
   // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
   // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
   // Tu código:
   var ene, mar, nov = false
   var arr = []
   if(array.length>=3){
      for(let i=0;i<array.length; i++){
         if(array[i] === 'Enero'){
            ene = true
            arr.push('Enero')
         }else if(array[i] === 'Marzo'){
            mar = true
            arr.push('Marzo')
         }else if(array[i] === 'Noviembre'){
            nov = true
            arr.push('Noviembre')
         }
      }
      if(arr.length>=3 && ene == true && mar == true && nov == true){
         console.log(arr)
      }else
         return 'No se encontraron los meses pedidos'
   }else
   return 'No se encontraron los meses pedidos'
}
var ok = [
   'Marzo',
   'Diciembre',
   'Abril',
   'Junio',
   'Julio',
   'Noviembre',
   'Enero',
   'Mayo',
   'Febrero',
];
//var notOk = ['Marzo', 'Diciembre', 'Julio', 'Noviembre'];
//mesesDelAño(ok)

function tablaDelSeis() {
   // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
   // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
   // Tu código:
   var arr = []
   for(let i= 0; i<11; i++){
      var op = i * 6
      arr.push(op)
   }
   return arr
}
//tablaDelSeis()

function mayorACien(array) {
   // La función recibe un arreglo con enteros entre 0 y 200.
   // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
   // Tu código:
   var mayores = []
   for(let i = 0; i<array.length; i++){
      if(array[i]>100){
         mayores.push(array[i])
      }
   }
   return mayores
}
var mayor = [100, 4, 56, 78, 200, 120, 7, 160, 148, 22]
//mayorACien(mayor)

function breakStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un arreglo y retornarlo.
   // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
   // la ejecución y retornar el string: "Se interrumpió la ejecución".
   // [PISTA]: utiliza el statement 'break'.
   // Tu código:

   var arr = []
   for(let i = 0; i<10; i++){
      num = num + 2
      arr.push(num)
      if(num==i){
         return 'Se interrumpió la ejecución'
         break;
      }  
   }
   return arr
}
//breakStatement(-4)

function continueStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un array y retornarlo.
   // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
   // se continua con la siguiente iteración.
   // [PISTA]: utiliza el statement 'continue'.
   // Tu código:

   var arr = []
   for(let i = 0; i<10; i++){
      if(i==5){
         continue;
      }else{
         num = num + 2
         arr.push(num) 
      }
   }
   return arr
}
//continueStatement(50)



// ! HOMEWORK OBJETOS

function multiplicarNumeroDesconocidoPorCinco(objetoMisterioso) {
   // El parámetro "objetoMisterioso" posee una propiedad con el nombre "numeroMisterioso".
   // Debes multiplicar este número por 5 y retornar el resultado.
   // Tu código:
   return objetoMisterioso.numeroMisterioso*5 
}

const objMis = {numeroMisterioso: -5,}

//multiplicarNumeroDesconocidoPorCinco(objMis)


function eliminarPropiedad(objeto, propiedad) {
   // El parámetro "propiedad" es una propiedad del objeto que recibes.
   // Debes eliminarla del objeto y retornarlo finalmente.
   // Tu código:

   delete objeto[propiedad]
   console.log(objeto); 
}

const obje = {
   nombre: 'Daniel',
   temas: 'NA',
   amigos: ['Franco', 'Miguel', 'Javier'],
}

//eliminarPropiedad(obje, 'temas')

function tieneEmail(objetoUsuario) {
   // Verifica si el "objetoUsuario", en su propiedad "email", posee un valor definido.
   // En ese caso retornar true. Caso contrario, false.
   // Tu código:

   if(objetoUsuario.hasOwnProperty('email') && objetoUsuario.email != null){
      console.log(true); 
   }else
      console.log(false);   
}

//tieneEmail(obje)

function verificarPassword(objetoUsuario, password) {
   // Verifica si la propiedad "password" del "objetoUsuario" coincide con el parámetro "password".
   // En ese caso retornar true. Caso contrario, false.
   // Tu código:

   if(objetoUsuario['password'] == password){
      console.log(true);
   }else
      console.log(false); 
}

//verificarPassword(obje, 'Siu')

function agregarAmigo(objetoUsuario, nuevoAmigo) {
   // El parámetro "objetoUsuario" tiene una propiedad llamada "amigos" igual a un arreglo.
   // Debes agregar el "nuevoAmigo" al final de este arreglo.
   // Retornar el objeto.
   // Tu código:

   objetoUsuario['amigos'].push(nuevoAmigo)
   console.log(objetoUsuario);

}

//agregarAmigo(obje, 'Luisa')

const users = [
   { esPremium: false },
   { esPremium: false },
   { esPremium: false },
   { esPremium: false },
   { esPremium: false },
];

function pasarUsuarioAPremium(objetoMuchosUsuarios) {
   // El parámetro "objetoMuchosUsuarios" es un arreglo de objetos (usuarios).
   // Cada usuario tiene una propiedad llamada "esPremium".
   // Define esta propiedad de todos los usuarios como true.
   // Retornar el arreglo.
   // Tu código:

   for (let i = 0; i < objetoMuchosUsuarios.length; i++) {
      objetoMuchosUsuarios[i].esPremium = true
   }
   console.log(objetoMuchosUsuarios);

}
//pasarUsuarioAPremium(users)
var suma = 0
function sumarLikesDeUsuario(objetoUsuario) {
   // El parámetro "objetoUsuario" tiene una propiedad llamada "posts" que es un arreglo.
   // Este arreglo contiene objetos (post).
   // Cada post posee una propiedad llamada "likes". Esta propiedad es un número.
   // Debes sumar los likes de todos los post y retornar el resultado.
   // Tu código:
   
   
   //console.log(objetoUsuario.posts);
      for (var i in objetoUsuario.posts) {
         
         suma += objetoUsuario.posts[i].likes
      }
      console.log(suma);
   }

   const user = {
      usernombre: 'Jhon Doe',
      password: 'JavaScript es genial!',
      posts: [
         {
            id: '1',
            title: 'Aventuras en JS!',
            likes: 10,
         },
         {
            id: '2',
            title: 'Soy Henry!',
            likes: 150,
         },
         {
            id: '3',
            title: 'Qué es un JavaScript?',
            likes: 0,
         },
         {
            id: '4',
            title: 'JS Objects for Dummies',
            likes: 0,
         },
         {
            id: '5',
            title: 'Educación online',
            likes: 99,
         },
      ],
   }
//sumarLikesDeUsuario(user)
//console.log(this.suma);

function agregarMetodoCalculoDescuento(objetoProducto) {
   // Agrega una propiedad al "objetoProducto" con el nombre "calcularPrecioDescuento".+
   // Esta propiedad debe ser una función que multiplique el precio del producto por el porcentajeDeDescuento. +
   // El "objetoProducto" posee una propiedad "precio" y una propiedad "porcentajeDeDescuento".
   // Luego debes restar del precio total del producto ese valor de descuento.
   // Retornar el precio final.
   // Ejemplo:
   // Precio ---> 10
   // PorcentajeDeDescuento ---> 0.2
   // Precio final ---> 8
   // Tu código:
   var mul = 0
   objetoProducto['calcularPrecioDescuento'] = function (precio, porcentajeDeDescuento){
      mul = this.objetoProducto[precio] * this.objetoProducto[porcentajeDeDescuento]
      objetoProducto.precio = objetoProducto.precio - mul;
      console.log(this.objetoProducto.precio); 
   }

   //objetoProducto.calcularPrecioDescuento(this.objetoProducto.precio, this.objetoProducto.porcentajeDeDescuento)
}
   const storeItem = {
      precio: 80,
      porcentajeDeDescuento: 0.1,
   };

   const storeItem2 = {
      precio: 5,
      porcentajeDeDescuento: 0.5,
   };
   

   function agregarMetodoCalculoDescuento1(objetoProducto) {
      // Agrega una propiedad al "objetoProducto" con el nombre "calcularPrecioDescuento".+
      // Esta propiedad debe ser una función que multiplique el precio del producto por el porcentajeDeDescuento. +
      // El "objetoProducto" posee una propiedad "precio" y una propiedad "porcentajeDeDescuento".
      // Luego debes restar del precio total del producto ese valor de descuento.
      // Retornar el precio final.
      // Ejemplo:
      // Precio ---> 10
      // PorcentajeDeDescuento ---> 0.2
      // Precio final ---> 8
      // Tu código:
      objetoProducto.calcularPrecioDescuento = function (){
         return (this.precio = this.precio - (this.precio - this.porcentajeDeDescuento))
      }
         return objetoProducto
   }
   //agregarMetodoCalculoDescuento1(storeItem2)

   function agregarStringInvertida() {
      // Agrega un método al prototipo de "String" que devuelva la misma cadena de caracteres, pero invertida.
      // El método debe llamarse "reverse".
      // [PISTA]: necesitarás utilizar el objeto "this".
   
      String.prototype.reverse = function (){
         let dat = this.split('').reverse().join('')
         console.log(this);
         console.log(dat);
      }   
   }

   //mayuscula('daniel')

   function mayuscula(nombre) {
      // Esta función recibe un nombre (string).
      // Debe devolver el mismo nombre, pero con la primera letra en mayúscula.
      // [Ejemplo]: "mario" ----> "Mario".
      // Tu código:
      
      var nuevoNombre = function() {
         var names = nombre.charAt(0).toUpperCase() + nombre.slice(1)      
         return names
      }
       return nuevoNombre
   }

   mayuscula('Daniel')


   function operacionMatematica(num1, num2, cb) {
      // En este ejercicio recibirás dos números y un callback.
      // El callback realiza una operación matemática, por lo que necesita de los dos números.
      // Retorna el resultado del callback pasándole como parámetros los números.
      // Tu código:

      return cb(num1,num2)
   }
   
   
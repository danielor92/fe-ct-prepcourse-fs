     
var deportes = {
    conBalon: ['Football','Basketball', 'Rugby'],
    sinBalon:['Boxeo', 'Surf', 'Trekking'],
}


console.log(deportes.conBalon[1])

var persona =  {nombre: 'Lucas', edad: 26, estudios: {esProgramador: true}}

//Acceder a una propiedad con Dot-Notation
console.log(persona.edad)

persona.nombre = 'Daniel'
console.log(persona)
persona.edad = 30
console.log(persona)


//Creamos el objeto
var autos = {}
//Agregar propiedades a un objeto en este caso es un array
autos.marcas = ['Ford', 'Audi', 'Ferrari']
//Borrar propiedades de un objeto.
delete autos.marcas
console.log(autos)

//creamos el objeto con una function y accedemos a ella y a su resultado despues cuando sea conveniente.
var misFunciones = {
    saludar: function (){
        console.log('hola')        
},}

//Llamado de la funcion dentro del objeto.
misFunciones.saludar()

var atuendos = { manos: ['Guantes', 'Anillos'], pies: ['Zapatos','Soquetes']}

//acceder a la propiedad
console.log(atuendos.pies)

atuendos['piernas'] = ['Bermudas','Pantalones']

console.log(atuendos)

var comidas = {}
var diferenciaNotaciones = function(propUno, propDos){
    //comidas.propUno = ['Frutas', 'Vegetales']  //Error adicionar estas propiedades por Dot Notation es un error ya que toma como literal el nombre de la propiedas despues del punto
    comidas[propUno] = ['Frutas', 'Vegetales']
    comidas[propDos] = ['Hamburguesas', 'Papas Fritas'] //Funciona los corchetes 'Aislan' por asi decirlo el parametro que llega por medio del argumento funcionando asi con normalidad
}

diferenciaNotaciones('saludables', 'noSaludables')
console.log(comidas)

/* This code is demonstrating two methods of objects in JavaScript. The first method, hasOwnProperty(),
allows us to specify a property name and check if it exists within an object, returning true or
false. The second method, Object.keys(), returns an array of all the properties within an object in
the order they were stored. */

/*
Métodos de objetos

1 El método hasOwnProperty() nos permitirá especificar un nombre, y verificar si este existe como una propiedad dentro de un objeto. En cada caso devolverá true o false.

2 El método Object.keys() devuelve todas las propiedades de un objeto guardadas en orden dentro de un arreglo
*/
// ! We create the object libro with it properties.
var libro = { autor: 'Borges', genero: 'Policial', anhio: 1990}
// ! this method help us searching on a specific property of the object, it gonna return True if exist and false if not exist.
var tienePropiedad = libro.hasOwnProperty('nombre')
// ! Return false if the property doenst exist on Object libro.
console.log(tienePropiedad)


//! create a variable with the method Object.keys(Object)
var todasLasPropiedades = Object.keys(libro)
//! console.log of this var will return us all the properties of the object Libro
console.log(todasLasPropiedades);

//! create a variable with a Object.
var mundo = {continentes: 7, paises: 195, oceanos: 5}

// ? the difference on the loop 'For' and 'For In' is that 'For' is just used to loop on Arrays and For In is used just for loop on Objects.


for (var prop in mundo) {
    console.log('Esta es la propiedad: ' + prop)
    console.log('Este es el valor: ' + mundo[prop])
}


// ? We create here a Object with some properties one of this is info that use a function that calls a console.log with a propety of the Object but we need to use the method 'This' it help us to guide the JS compiler to the right property creating a CONTEXT 

var mascotas = {
    animal: 'Perro',
    raza: 'Paticortico',
    amistoso:  true,
    duenhio: 'Daniel Ospina y Jennifer',
    info: function (){
        console.log('Mi perro es un ' + this.raza)
    },
}

mascotas.info();
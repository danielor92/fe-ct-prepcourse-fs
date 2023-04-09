// ? Class function Mode
/*
function Auto(puertas, color, marca, año, ruedas) {
  this.puertas = puertas
  this.color = color
  this.marca = marca
  this.año = año
  this.ruedas = ruedas

  this.informacion = function (){
    console.log('Este es un auto de Color: '+this.color+', Marca: '+this.marca)
  }
}
*/

//var miPrimerAuto = new Auto(2,'Rojo','Ferrari',2018, 4)

//miPrimerAuto.informacion()

// console.log(miPrimerAuto)
// console.log(miPrimerAuto.marca)

// ? Constructor Class Mode

class Auto {
    constructor(puertas, color, marca, año, ruedas) {
        this.puertas = puertas
        this.color = color
        this.marca  = marca
        this.año = año
        this.ruedas = ruedas      
    }
    informacion(){
        console.log('La marca es: '+this.marca)
    }
}

miSegundoAuto = new Auto(4, 'Coral', 'Chevrolet', '2008', 4 )

miSegundoAuto.informacion()


class Football {
    constructor(jugador){
        this.jugador = jugador
    }

    obtenerNombre(){
        console.log('Nombre de Jugador: '+this.jugador);
    }
}

var argentina = new Football('Messi')
var brasil =  new Football('Pele')


argentina.obtenerNombre()
brasil.obtenerNombre()




// * We Create here a prototype extended of the Global Class 'Array' we are adding at this prototype a new method wich gonna help us doing a operation on another arrays that we use that method
// * This is a form to heredate the methods creating a prototype of a existence class like Array.

Array.prototype.mayoresQueTres = function(){
    var arrayUpdated = []

    for (let i = 0; i < this.length; i++) {
      if(this[i] > 3){
        arrayUpdated.push(false)
      }else {
        arrayUpdated.push(this[i])
      }
      
    }

    return arrayUpdated
}

var arreglo = [1,2,3,4,5,6]
var nuevoArreglo = arreglo.mayoresQueTres()

console.log(nuevoArreglo)

class LatinoAmerica {
    constructor() {
        this.paises = []
    }
}

Latinoamerica.prototype.addCountry = function (pais){
    this.paises.push(pais)
}

var continent = new Latinoamerica()
continent.addCountry('Mexico')
console.log(continent);

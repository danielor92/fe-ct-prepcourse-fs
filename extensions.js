class Persona {
    constructor(nombre, edad){
        this.nombre = nombre
        this.edad = edad
    }

    saludar(){
        console.log('Hola, mi nombre es '+this.nombre+'. Tengo '+ this.edad+' Anhios');
    }
}

class Programador extends Persona{
    constructor(nombre, edad, anhiosDeExperiencia) {
        super(nombre, edad)
        this.anhiosDeExperiencia = anhiosDeExperiencia
    }


    coding(){
        console.log('My name is: '+this.nombre+', I am '+this.edad+' years old, i code since '+this.anhiosDeExperiencia+' years ago ');
    }
}


var daniel = new Persona('Daniel',30)
daniel.saludar()

var jennifer = new Programador('Jennifer',35,2)
jennifer.coding()
jennifer.saludar()
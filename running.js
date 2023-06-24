// var numeros = [1,2,3,4]

// var masUno = numeros.map((num) => {
//     if(num > 0 ){
//         return num = num - 1
//     }
// })
// console.log(masUno)

//Expected: [ 0, 1, 2, 3 ]

num = 99958;

function empiezaConNueve(num) {
	//     Esta función recibe por parámetro un número.
	//      Debe retornar true si el entero inicia con 9 y false en otro caso.
	//      Tu código:
	var vars = num.toString().split("");
	for (var i = 0; i < vars.length; i++) {
		if (vars[i] == 9) {
			return true;
		}
		return false;
	}
}

// function empiezaConNueve(num) {
//     // Esta función recibe por parámetro un número.
//     // Debe retornar true si el entero inicia con 9 y false en otro caso.
//     // Tu código:
//     var vars = num.toString().split('')

//     //console.log(arrSep)
//     if(arrSep[0]==9){
//        console.log(arrSep[0])
//        //return true
//     }else{
//        return false
//     }
//  }

var objeto = { x: 1, y: 2 };

function deObjetoAarray(objeto) {
	// Recibes un objeto. Tendrás que crear un arreglo de arreglos.
	// Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
	// Estos elementos debe ser cada par clave:valor del objeto recibido.
	// [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
	// Tu código:
	var arr = [];

	let values = Object.values(objeto);
	let keys = Object.keys(objeto);

	for (let i = 0; i < keys.length; i++) {
		arreg = [keys[i], values[i]];
		arr.push(arreg);
	}

	return arr;
}

deObjetoAarray(objeto);

function contarLetras(array) {
	let letrasContadas = {};

	for (let i = 0; i < array.length; i++) {
		const letra = array[i];
		if (letrasContadas[letra]) {
			letrasContadas[letra]++;
		} else {
			letrasContadas[letra] = 1;
		}
	}
	return letrasContadas;
}

// Ejemplo de uso
const miArray = ["a", "b", "c", "a", "d", "a", "b", "c", "c"];
const resultado = contarLetras(miArray);
console.log(resultado);


function capToFront(string) {
	// Recibes un string con algunas letras en mayúscula y otras en minúscula.
	// Debes enviar todas las letras en mayúscula al comienzo del string.
	// Retornar el string.
	// [EJEMPLO]: soyHENRY ---> HENRYsoy
	// Tu código:
    string = 'DfgD';
	var palArr = string.split('');
	var pEle = palArr[0];
	var ind = palArr.indexOf(pEle);

    const nuevoArr = palArr.map((let) => {
        if(let === let.toUpperCase()){
            
            return undefined;
        }
    }).filter((let) => let != null)


	// for (let i = 0; i < palArr.length; i++) {
	// 	var ele = palArr[i];
	// 	if (ele === ele.toUpperCase()) {
	// 		if (i == ind) {
	// 			continue;
	// 		} else {
    //         var eleMov = ele;
	// 			palArr.splice(i,1)
    //         palArr.
	// 		}
	// 	} 
	// }
}
var str = "nielDA";
capToFront(str);
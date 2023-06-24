/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

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

function numberOfCharacters(string) {
	// La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
	// letras del string, y su valor es la cantidad de veces que se repite en el string.
	// Las letras deben estar en orden alfabético.
	// [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
	// Tu código:

	var arr = string.split("");
	var objeto = {};

	for (let i = 0; i < arr.length; i++) {
		var letraActual = arr[i];
		if (objeto[letraActual]) {
			objeto[letraActual]++;
		} else objeto[letraActual] = 1;
	}
	return objeto;
}

function capToFront(string) {
	// Recibes un string con algunas letras en mayúscula y otras en minúscula.
	// Debes enviar todas las letras en mayúscula al comienzo del string.
	// Retornar el string.
	// [EJEMPLO]: soyHENRY ---> HENRYsoy
	// Tu código:
	const caracteres = string.split('');
	caracteres.sort((a, b) => {
	const esMayusculaA = a === a.toUpperCase();
	const esMayusculaB = b === b.toUpperCase();
    if (esMayusculaA && !esMayusculaB) {
      return -1; // a se coloca antes que b
    } else if (!esMayusculaA && esMayusculaB) {
      return 1; // b se coloca antes que a
    } else {
      return 0; // no se realiza ningún cambio en la posición
    }
  });

   return caracteres.join('');
}

function asAmirror(frase) {
	// Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
	// La diferencia es que cada palabra estará escrita al inverso.
	// [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
	// Tu código:
   const palabras = frase.split(' ');
   const palabrasInvertidas = palabras.map(palabra => {
    return palabra.split('').reverse().join('');
   });

  return palabrasInvertidas.join(' ');
}

function capicua(numero) {
	// Si el número que recibes es capicúa debes retornar el string: "Es capicua".
	// Caso contrario: "No es capicua".
	// Tu código:
   const numeroString = numero.toString();
   const numeroInvertido = numeroString.split('').reverse().join('');

  if (numeroString === numeroInvertido) {
    return "Es capicua";
  } else {
    return "No es capicua";
  }
}

function deleteAbc(string) {
	// Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
	// Retorna el string sin estas letras.
	// Tu código:
   const resultado = string.replace(/[abc]/gi, '');
   return resultado;
}

function sortArray(arrayOfStrings) {
	// Recibes un arreglo de strings.
	// Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
	// de la longitud de cada string.
	// [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
	// Tu código:\


   // function compare(a, b) {
   //    if(a.length < b.length){
   //       return -1;
   //    }
   //    if(b.length < a.length){
   //       return 1;
   //    }
   //    return 0;
   // }

   // console.log(nueArr)
   
   // function compare(a, b) {
   //    if (a es menor que b según criterio de ordenamiento) {
   //      return -1;
   //    }
   //    if (a es mayor que b según criterio de ordenamiento) {
   //      return 1;
   //    }
   //  ?a debe ser igual b
   //    return 0;
   //  }
   nuevArr = arrayOfStrings.sort(function(a,b){
      if(a.length < b.length){
            return -1;
       }
      if(b.length < a.length){
            return 1;
      }
            return 0;
      });

      return nuevArr
}

function buscoInterseccion(array1, array2) {
	// Recibes dos arreglos de números.
	// Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
	// [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
	// Si no tienen elementos en común, retornar un arreglo vacío.
	// [PISTA]: los arreglos no necesariamente tienen la misma longitud.
	// Tu código:
	var nueArr = [];

	for (let i = 0; i < array1.length; i++) {
		for (let j = 0; j < array2.length; j++) {
			if(array1[i] == array2[j]){
				nueArr.push(array1[i]);
			}
		}
	}
	return nueArr;	
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
	deObjetoAarray,
	numberOfCharacters,
	capToFront,
	asAmirror,
	capicua,
	deleteAbc,
	sortArray,
	buscoInterseccion,
};

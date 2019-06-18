/*1. La primera serán dos valores de entrada el primero será un número(mayor o igual a cero)
 y números enteros separados por comas(por ejemplo 1,3,8,11,20).
  El objetivo será hacer N rotaciones a la izquierda del arreglo dado, por ejemplo:

Primera entrada 2

Segunda entrada : 1,2,3,4,5


El resultado deberá ser:

4,5,1,2,3


Explicación:

Arreglo inicial: [1,2,3,4,5]

Primera iteración: [5,1,2,3,4]

Segunda iteración: [4,5,1,2,3]*/

const rotar = (n, array) => {
  for (let i = 0; i < n; i++) {
    array.unshift(array.pop());
  }
  return array;
};

console.log(rotar(4, [5, 6, 7, 8, 9, 10]));

/*2. La  segunda serán dos string y la respuesta si los dos strings son anagramas, si no fueran anagramas cuantos caracteres se tendrían que eliminar para ser un anagrama.

Ejemplo:
primera entrada: CBEAD
segunda entrada: FDA
Resultado:
No es un anagrama y se deben eliminar 4 caracteres para que sea un anagrama

Explicación:
De la primera cadena se tiene que eliminar C,B,E
De la segunda cadena se tiene que eliminar F para que puedan ser anagramas.*/

const isAnagram = (str1, str2) => {
  let i = 0;
  str1 = str1.split("").sort();
  str2 = str2.split("").sort();

  if (str1.join("") === str2.join("")) {
    return `es anagrama: ${true}`;
  }

  str1.forEach(item => (!str2.includes(item) ? i++ : ""));

  str2.forEach(item => (!str1.includes(item) ? i++ : ""));

  return `no es anagrama necesitas quitar ${i} letras`;
};

//console.log(isAnagram('cbead','fda'))
//console.log(isAnagram('rkqodlw','world'))
//console.log(isAnagram('xyhshshshjdkkz','xyz'))
//console.log(isAnagram('riesgo', 'sergio'))

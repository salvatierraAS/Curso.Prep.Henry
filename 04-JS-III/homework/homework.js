// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  var rpta = null;
  if ( array && array.length > 0)
    rpta = array[0];
  return rpta;  
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  var rpta = null;
  if ( array && array.length > 0)
    rpta = array[array.length - 1];
  return rpta;  
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  var rpta = 0;
  if ( array && array.length > 0)
    rpta = array.length;
  return rpta;  
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  if ( array && array.length > 0){
    for(let i=0; i < array.length; i++){
      array[i]=array[i]+1;
    }
  }
  return array;
}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  if ( array)
    array.push(elemento);
  return array;
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  if ( array)
    array.unshift(elemento);
  return array;
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  var rpta="";
  if (palabras && palabras.length > 0){
    for(let i=0; i <palabras.length; i++){
      if (rpta === "")
        rpta=palabras[i];
      else
        rpta=rpta + " " + palabras[i];
    }
  }
  return rpta;
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  var rpta=false;
  if (array && array.length > 0){
    for(let i=0; i <array.length; i++){
      if (array[i] === elemento)
      {
        rpta=true;
        break;
      }
    }
  }
  return rpta;
}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  var rpta=0;
  if (numeros && numeros.length > 0){
    for(let i=0; i <numeros.length; i++){
      rpta+=numeros[i];
    }
  }
  return rpta;
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  var rpta=0;
  if (resultadosTest && resultadosTest.length > 0){
    for(let i=0; i <resultadosTest.length; i++){
      rpta+=resultadosTest[i];
    }
  }
  rpta = rpta/resultadosTest.length;
  return rpta;
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  var rpta=null;
  if (numeros && numeros.length > 0){
    for(let i=0; i <numeros.length; i++){
      if (numeros[i] > rpta)
        rpta = numeros[i];
    }
  }
  return rpta;
}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  var rpta=0;
  if (arguments && arguments.length > 0){
    rpta=1;
    for(let i=0; i < arguments.length; i++){
        rpta = rpta * arguments[i];
    }
  }
  return rpta;
}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  var rpta=0;
  if (arreglo && arreglo.length > 0){
    for(let i=0; i < arreglo.length; i++){
        if (arreglo[i] > 18)
          rpta++;
    }
  }
  return rpta;
}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
  const atipoDeDia = ['F','L','L','L','L','L','F'];
  const sFINDESEMANA= 'Es fin de semana';
  const sDIALABORAL= 'Es dia Laboral';
  var rpta ='';
  if (atipoDeDia[numeroDeDia-1]==='F'){
    rpta=sFINDESEMANA;
  }
  else{
    rpta=sDIALABORAL;
  }
  return rpta;
} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  const numero = n.toString();
  var rpta = false;
  if  (numero.substr(0,1) === '9'){
    rpta = true;
  }
  return rpta;
}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
  var rpta=true;
  var ultimo = null;
  if (arreglo && arreglo.length > 0){
    ultimo = arreglo[0];
    for(let i=1; i < arreglo.length; i++){
        if (ultimo === arreglo[i]){
          ultimo = arreglo[i];
        }
        else{
          rpta = false;
          break;
        }
    }
  }
  return rpta;
  
} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  var rpta = "";
  var mesesEncontrados = [];
  const mesesBuscar=["Enero", "Marzo" , "Noviembre"];
  for(let i=0; i < array.length; i++){
    if (mesesBuscar.find( x => x === array[i]))
      mesesEncontrados.push(array[i]);
  }
  if (mesesEncontrados.length < mesesBuscar.length)
    rpta="No se encontraron los meses pedidos";
  else
    rpta=mesesEncontrados;
  return rpta;
}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  var rpta = [];
  const iLIMITE=100;
  for(let i=0; i < array.length; i++){
    if ((array[i]) > iLIMITE )
      rpta.push(array[i]);
  }
  return rpta;
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  var rpta=[];
  var valor=null;
  for(let i=0; i < 10; i++){
      valor = numero + 2*(i+1);
      if (valor === (i+1)){
        rpta = "Se interrumpió la ejecución";
        break;
      }
      rpta.push(valor);
  }
  return rpta;
}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  var rpta=[];
  var valor=numero;
  for(let i= 0; i < 10; i++){
      if (i===4){
        continue;
      }
      valor = valor + 2;
      rpta.push(valor);
  } 
  return rpta;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};

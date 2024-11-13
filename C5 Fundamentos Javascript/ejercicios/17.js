function esPositivo(num) {
  // La función recibe un argumento llamado num el cual es un numero entero.
  // Retorna como resultado un string que indica si el número es positivo o negativo.
  // Por ejemplo: 
  // Si el número es positivo ---> "Es positivo". 1
  // Si el número es negativo ---> "Es negativo". -1
  // Si el número es 0, devuelve false. 0
  // Tu código:
  if(Math.sign(num)===1){
    rta="Es positivo";
  }else if(Math.sign(num)===-1){
    rta="Es Negativo";
  }else{
    rta= false;
  }
  return rta;
}

module.exports = esPositivo;
const truncate = (str, max, len) => {
    return str.length > max ? str.substring(0, len) + " ..." : str;
    /*el primer argumento es el título de la cadena, 
      el segundo argumento es la longitud máxima que debe verificar, 
      el tercer argumento es la longitud de la cadena que desea mostrar.*/
}

export default truncate


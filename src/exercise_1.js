
function productosBaratos(prods) {
  let result = [];
  if(!prods.length) return result;

  for(let i = 0; i < prods.length; i++) {
    const product = prods[i];
    if(product.precio >= 5 && product.precio <= 10){
      result.push(product.nombre);
    }
  }

  return result;
}



// const productosBaratos = (prods) => {
//   return prods
//     .filter((product) => product.precio >= 5 && product.precio <= 10)
//     .map((prod) => prod.nombre);
// };


module.exports = {
  productosBaratos,
};

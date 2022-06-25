const carrito = [
    {
    id: 198752,
    name: "Tinta DJ27 Color",
    price: 52.95,
    count: 3,
    premium: true
    },
    {
    id: 75621,
    name: "Impresora ticketera PRO-201",
    price: 32.75,
    count: 2,
    premium: true
    },
    {
    id: 54657,
    name: "Caja de rollos de papel para ticketera",
    price: 5.95,
    count: 3,
    premium: false
    },
    {
    id: 3143,
    name: "Caja de folios DIN-A4 80gr",
    price: 9.95,
    count: 2,
    premium: false
    }
   ];

//    Mostrar el carrito de la compra.


//    for(i = 0; i < carrito.length; i++){
//     imprimir(carrito[i])
//    };
// function imprimir(carrito){
//     console.log(".......................Producto con el id " + carrito.id);
//     console.log(carrito.name);
//     console.log(carrito.price);
//     console.log(carrito.count);
//     console.log(carrito.premium);
    
//}

// Eliminar el producto con id 54657 del carrito de la compra

// console.log("......Nueva lista");

// var indice;

// for(i = 0; i < carrito.length; i++){
//     if(carrito[i].id == 54657)
//     indice = i;
// }
// carrito.splice(indice, 1);

// for(producto of carrito){
//     imprimir(producto);

//}
// Calcular el total del carrito de la compra (el coste de una línea es precio * cantidad).


// let total = 0;

// for (product of carrito){
//     total += product.price * product.count;
// };

// console.log("El total del carrito de compra son:  " + total + "€");

// Filtrar por los productos que sean prime.


// var productsPrime =[];
// var prime;

// for (product of carrito){
//     if (product.premium === true) {
//         prime = product;
//     productsPrime.push(prime);

//     }
    
// }
// console.log(productsPrime);


// Aplicar un descuento del 5% si la compra es mayor de 100 €.

//  let total = 0;

// function getDiscount() { 
// for (product of carrito){
//     total += product.price * product.count;
// };

// if (total > 100) {
//     total = total - (total * 0.05)
// } else {
//     total = total;
//    }
// };
// getDiscount();
//  console.log(total);
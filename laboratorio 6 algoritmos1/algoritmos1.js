// Constantes.
const REGULAR_TYPE = 21;
const LOWER_TYPE = 4;
const EXEMPT_TYPE = 0;

// Entrada.

const products = [
{
description: "Goma de borrar",
price: 0.25,
tax: LOWER_TYPE,
stock: 2,
units: 0,
},
{
description: "Lápiz H2",
price: 0.4,
tax: LOWER_TYPE,
stock: 5,
units: 0,
},
{
description: "Cinta rotular",
price: 9.3,
tax: REGULAR_TYPE,
stock: 2,
units: 0,
},
{
description: "Papelera plástico",
price: 2.75,
tax: REGULAR_TYPE,
stock: 5,
units: 0,
},
{
description: "Escuadra",
price: 8.4,
tax: REGULAR_TYPE,
stock: 3,
units: 0,
},
{
description: "Pizarra blanca",
price: 5.95,
tax: REGULAR_TYPE,
stock: 2,
units: 0,
},
{
description: "Afilador",
price: 1.2,
tax: LOWER_TYPE,
stock: 10,
units: 0,
},
{
description: "Libro ABC",
price: 19,
tax: EXEMPT_TYPE,
stock: 2,
units: 0,
},
];

 
      var container = document.getElementById("product-list");

   
var createProduct = product => {
   var description = document.createElement("h5");
    description.innerText = product.description;
    container.appendChild(description);

    var price = document.createElement("span");
    price.innerText = "precio por unidad " + product.price + "€/ud" + " ";
    container.appendChild(price);

    var tax = document.createElement("p");
    tax.innerText = " Iva = " + product.tax + "% ";
    container.appendChild(tax);

    var input = document.createElement("input");
    container.appendChild(input);
    input.setAttribute("type", "number");
    //input.setAttribute("value", 0);
    input.addEventListener("change", event => product.units = event.target.valueAsNumber);
}
    var showProducts = productList => {
      for (var product of productList) {
        createProduct(product);
      }};

showProducts(products);


    
// // calculamos el precio total de un producto, será el precio unitario * unidades .


function totalPrice() {
  let total = 0;
  for (var product of products){
   total += product.price * product.units;
  } console.log(total)
  return total;
};

var handleButtonClick = () => console.log(totalPrice()); 
  document.getElementById("button").addEventListener("click", handleButtonClick);

//    let lowerTax;
//    let regularTax;
//    let exemptTax;

//   function calcTax() {
//  for (item of products){

//     if(item.tax == "LOWER_TYPE") {
//           lowerTax += total * 0.04;
  
//         } else if(item.tax == "REGULAR_TYPE") {
//          regularTax += total * 0,21;
  
//         } else {
//           exemptTax += total * 1;
//         }
//       console.log(lowerTax + regularTax + exemptTax)
//     } return lowerTax + regularTax + exemptTax;
//   };
  

// // function totalPrice(){
// //   var precio = unitsPrice();
// //   var iva = calcTax();
// //   var precioConIva = precio + iva;
// //};

// //  var handleButtonClick = () => console.log(calcTax());
// //  document.getElementById("button").addEventListener("click", handleButtonClick);




//calculamos el precio total del producto, el iva y el total con iva

// var tax = 0;

// function calc() { //funcion principal

//   var productPrice = () => { //funcion subtotal

// for (var product of products) {
   
//    var price = products.units * products.price;

//     for (var index = 0; index < products.length; index++) {
    
//         function subtotal(){
//           var subtot = subtot + price; // sumamos los precios 
//     }}
//         }  
//   } 
//   var calcTax = () => { //CALCULA IVA  ((precio x cantidad) x iva)/100
//     for (var product of products) {
   
//   if (products.tax === "LOWER_TYPE") {
//     tax = tax + (product.price * product.units) * 0.04;
//   } else if (product.tax === "REGULAR_TYPE") {
//     tax = tax + (product.price * product.units) * 0,21;
//   } else {
//     tax = tax + (product.price * product.units);
//   }
  
//   }
//   for (var index = 0; index < products.length; index++) {
// var totalConIva = () => {
//     (productPrice + tax);

// }}}}







// //HACEMOS QUE EL BOTON CALCULE EL SUBTOTAL

// var handleButtonClick = () => document.getElementById("subtotal").value = subtotal(); //aqui iria una funcion de calculo de total, subtotal, iva;
// document.getElementById("button").addEventListener("click", handleButtonClick);


// //Estoy enganchando al boton las funcion de total, subtota, iva a cada input correspondiente

// var handleButtonClick = () => document.getElementById("impuestos").value = calcTax();
// document.getElementById("button").addEventListener("click", handleButtonClick);

// // var handleButtonClick = () => document.getElementById("total").value 
// // document.getElementById("button").addEventListener("click", handleButtonClick);
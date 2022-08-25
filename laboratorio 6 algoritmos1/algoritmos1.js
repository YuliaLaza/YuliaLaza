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
    input.setAttribute("value", 0);
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
  } //console.log(total)
  return total;
};

function tax() {
  let taxPaid = 0;
  for (var product of products){
    taxPaid += (product.price * product.units) * product.tax/100; 
  } //console.log(tax)
  return taxPaid;
};

function total() {
var totPr = totalPrice();
var iva = tax()
var totalPay = totPr + iva;
return totalPay;
};


var handleButtonClick = () => document.getElementById("subtotal").value = totalPrice(); 
  document.getElementById("button").addEventListener("click", handleButtonClick);
 
  var handleButtonClick = () => document.getElementById("impuestos").value = tax(); 
  document.getElementById("button").addEventListener("click", handleButtonClick);

  var handleButtonClick = () => document.getElementById("total").value = total(); 
  document.getElementById("button").addEventListener("click", handleButtonClick);



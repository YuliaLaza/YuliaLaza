

var roomStandart = 100;
var roomJuniorSuite = 120;
var roomSuite = 150;
var spa = 20;
var parking = 10;
var individual = 0.75;
var doble = 1;
var triple = 0.25;

var nights = () => parseInt(document.getElementById("nights").value); //cantidad de noches
var room = () => document.getElementById("room").value; //habitacion standart, junior suite o suite
var typeroom = () => document.getElementById("typeroom").value // habbitacion doble, individual o triple
var parkingNights = () => parseInt(document.getElementById("parking").value) // numero de noches de parking

// calculamos el precio de la reserva del tipo de la habitacion elegida por noches 

function priceNights(roomStandart, roomJuniorSuite, roomSuite, nights) {
    if(room == "standart") {
        return roomStandart * nights;
    }else if(room == "juniorsuite") {
        return roomJuniorSuite * nights;
    }else {
        return roomSuite * nights
    }
};
priceNights();

// al ese total le sumamos si quiere el spa o no 


function spaYesOrNo (nights, spa, priceNights) {
    if(document.getElementById("spa").checked){
return (nights * spa) + priceNights;
    } else {
        return priceNights;
    }
};
spaYesOrNo();
//calculamos el descuento o al reves, segun tipo habitacion 

function discountOrNot (triple, individual, typeroom, spaYesOrNo){
    if(typeroom == "individual") {
return spaYesOrNo * individual;
    }else if( typeroom == "triple") {
        return (spaYesOrNo * triple) + spaYesOrNo;
    }else {
        return spaYesOrNo * 1;
    }
}

discountOrNot();
// le sumamos el parking

var parkingYesOrNo = () => parkingNights > 0? (parkingNights * parking) + discountOrNot : discountOrNot;
 

// esto lo hago sin saber muy bien el porque, un poco para probar, pero no creo que haya que juntarlas asi, pero me parece que falta algo que las una a todas las funcciones
function totalReserved(){
    priceNights();
    spaYesOrNo();
    discountOrNot();

}

var handleBottonClick = () => console.log(totalReserved());
document.getElementById("total").addEventListener("click", handleBottonClick);




//AQUI los INTENTOs ANTERIORes que sn casi iguales.

// function priceNight(nights) {
//     if(document.getElementById("room").value == "standart"){
//       return roomStandart * nights;
//     }else if(document.getElementById("room").value == "suite"){
//        return roomSuite * nights;
//     }else {
//         return roomSuite * nights;
//     }
// }
// priceNight();


// function priceNightSpaYesOrNo(nights, spa, priceNight) {
//     if(document.getElementById("spa").checked){
//         return priceNight + (spa * nights);
//     }else {
//         return priceNight * nights;
//     } 
    
// };
// priceNightSpaYesOrNo();

// function finalPriceTypeRoom(individual, triple) {
//         if(document.getElementById("typeroom").value === "individual"){
//     return priceNightSpaYesOrNo * individual;
//         }else if(document.getElementById("typeroom").value === "triple"){
//            return (priceNightSpaYesOrNo * triple) + priceNightSpaYesOrNo;
//         } else {
//             return priceNightSpaYesOrNo * 1;
//         } 
//     }
    
//     finalPriceTypeRoom();

//     var parkingNights = () => parseInt(document.getElementById("parking").value); //cantidad de noches de parking

//  var roomPriceWithParkingSpa = () => (parkingNights() * parking) + finalPriceTypeRoom; 



// var handleboton = () => alert(fina());
// document.getElementById("total").addEventListener("click", handleboton);




//  //..............................................................................................
// // 5 noches
// // habitacion estandar
// // spa
// //uso individual
// // 2 noches de parking

// // 100 + 20 = 120, 120* 0,75 = 90, 90*5= 450, 450 + 10 + 10= 470



// // var reserva = {
// //     standart: 100,
// //     juniorSuite: 120,
// //     suite: 150,
// //     spa: 20,
// //     parking: 10,
// //     individual: 0.75,
// //     triple: 0.25
// //     };
// // console.log(reserva);

// // var nights = () => parseInt(document.getElementById("nights").value); // cantidad de noches que se  reserva


// // //Calculamos el precio total de la reserva de la habitacion 
// // //en funcion del tipo de la habitacion y la cantidad de noches

// // var tipo = () => document.getElementById("room").value;

// // function priceNight(nights) {
// // if(tipo == "standart") {
// //     reserva.standart * nights;
// // }else if(tipo == "juniorsuite") {
// //     reserva.juniorSuite * nights;
// // } else {
// //     reserva.suite * nights;
// // } 
// // return priceNight;
// // };
// // priceNight()//;//precio de la estancia (tipo de habitacion y numero noches)

// // //Calculamos el precio de la habitacion si se escoge o no usar el spa

// // function priceNightSpaYesOrNo(nights) {
// //     if(document.getElementById("spa").checked){
// //         priceNight + (reserva.spa * nights);
// //     }else {
// //         priceNight * nights;
// //     } 
// //     return priceNightSpaYesOrNo;
// // };

// // priceNightSpaYesOrNo(); // precio total con o sin spa


// // //calculamos la reduccion o aumento en funcion del tipo de habitacion

// function finalPriceTypeRoom() {
//     if(document.getElementsByName("typeroom").value === "individual"){
// priceNightSpaYesOrNo * reserva.individual;
//     }else if (document.getElementById("typeroom").value === "triple"){
//         (priceNightSpaYesOrNo * reserva.triple) + priceNightSpaYesOrNo;
//     } else {
//         priceNightSpaYesOrNo * 1;
//     } return finalPriceTypeRoom;
// }

// finalPriceTypeRoom();


// // precio con parking

// var parking = () => parseInt(document.getElementById("parking").value); //cantidad de noches de parking

// var roomPriceWithParkingSpa = () => (parking * reserva.parking) + finalPriceTypeRoom; 

// roomPriceWithParkingSpa();


// var handleboton = () => roomPriceWithParkingSpa();
// document.getElementById("total").addEventListener("click", handleboton);

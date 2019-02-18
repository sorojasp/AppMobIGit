let probe=3;
let valueDollarCanadian=0;
setTimeout(()=>{
console.log("Hola");
probe=6;
},2000)

console.log(probe)

setTimeout(()=>{
console.log(probe)
},3000)

let getCanadianDollarPrice =()=>{  //aplicar Async, await

 $.get( "https://api.exchangeratesapi.io/latest", function( data ) {
   console.log(data.rates.CAD)
   document.getElementById("liTry").innerHTML=data.rates.CAD;
   valueDollarCanadian=data.rates.CAD + 1;
   console.log(`*el valor del dolar canadiense** + 1=${valueDollarCanadian}`)
   

});

}

console.log(`el valor del dolar canadiense + 1=${valueDollarCanadian}`)


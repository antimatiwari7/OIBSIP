let celsius= document.getElementById("celsius");
let fahrenhite= document.getElementById("fahrenheit");
console.log(celsius,cahrenheit)

function celToFar(){
    let output=( parseFloat(Celsius.value) * 9/5)+32;
    fahrenheit.value=parseFloat(output.toFixed(2));
    console.log(output);
}
function farTocel(){
    let output=( parseFloat(fahrenheit.value)-32)* 5/9;
    celsius.value=parseFloat(output.toFixed(2));
    console.log(output);

}
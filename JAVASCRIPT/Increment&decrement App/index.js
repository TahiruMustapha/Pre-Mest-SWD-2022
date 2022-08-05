let btn1 = document.getElementById("increase");
let btn2 = document.getElementById("decrease");
let display = document.getElementById("display");
  var count = 0;
btn1.addEventListener("click", ()=>{
    
   var increment = document.getElementById("display");
   increment.value = count;
   count++;
   display.textContent= count;
})
btn2.addEventListener("click", ()=>{
    var decrement = document.getElementById("display");
    decrement.value = count;
    count--;
    display.textContent = count;
})


















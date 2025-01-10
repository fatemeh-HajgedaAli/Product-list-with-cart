let $=document
let cartBtn=$.querySelectorAll('.cartBtn')
let cartaddRemove=$.querySelectorAll('.cartaddRemove')

//add food to cart by click on it ...
cartBtn.forEach(function(button){
let count=0;
button.addEventListener('click' , function(){
    count++
console.log(`cartBtn: ${count}`)
});
});
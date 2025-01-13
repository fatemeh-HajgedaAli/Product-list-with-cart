let $=document

let cartaddRemove=$.querySelectorAll('.cartaddRemove')
//make arry for save items :

/*
const cart=[
    {id:1,name:'Waffel',price:5.55},
    {id:2,name:'CremeBrulee',price:5.00},
    {id:3,name:'Macaron',price:1.00},
    {id:4,name:'Tiramisu',price:3.05},
    {id:5,name:'Baklava',price:4.32},
    {id:6,name:'Pie',price:5.02},
    {id:7,name:'Cake',price:5.00},
    {id:8,name:'Brownie',price:5.22},
    {id:9,name:'Panna',price:5.3},
]*/
let cart=[]
let cartBtn=$.querySelectorAll('.cartBtn');// selected all button.
let count=0;

cartBtn.forEach(function(button){
button.addEventListener('click' , function(){
toggleCart(button);// فراخوانی تابع مدیریت سبد خرید
});
});

function toggleCart(button){
const foodId=button.dataset.id;// gives food's id.
const foodName=button.dataset.name;//gives food's name.



const isInCart=cart.some((item)=>item.name ===foodName)//searching that food is in cart or not?
const cartaddRemove=button.nextElementSibling;
if(isInCart){
cart=cart.filter((item)=>item.name !==foodName);//remove food that is in cart.
cartaddRemove.style.display='none'

}else{
cartaddRemove.style.display='block'
cart.push({ id: foodId, name: foodName });//if food is not in the cart add it.

}
updateCartCount();

} 
function updateCartCount(){

const itemNumber=$.getElementsByClassName('.itemNumber');
itemNumber.innerHTML=cart.length;//it should show the number of foods that selected.

}

/*first try*/

let basket_content = [];

function visibilityChange(id){ 
    if(!document.getElementById(id).classList.value.includes("d-none")){
        document.getElementById(id).classList.add("d-none");
        document.getElementById(`${id}_btn`).src = ('./img/plus.png');
    }else{
        document.getElementById(id).classList.remove("d-none");
        document.getElementById(`${id}_btn`).src = ('./img/x.png');
    }
    
}

function showtest(){
    console.log(dish.name);
    document.getElementById('dishes').innerHTML += single_dish_template();
}
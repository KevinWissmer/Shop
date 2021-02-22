/*first try*/

let basket_content = [];
let current_dish = -1;
let current_dish_price = 0;

function visibilityChange(id) {
    if (!document.getElementById(id).classList.value.includes("d-none")) {
        document.getElementById(id).classList.add("d-none");
        document.getElementById(`${id}_btn`).src = ('./img/plus.png');
    } else {
        document.getElementById(id).classList.remove("d-none");
        document.getElementById(`${id}_btn`).src = ('./img/x.png');
    }
}


function open_dish(id) {
    if (current_dish != -1) {
        reset_old_dish(`bottom_dish_${current_dish}`);
    }
    if (current_dish != parseInt(id.slice(12))) {
        visibilityChange(id);
        current_dish = parseInt(id.slice(12));
    } else {
        current_dish = -1;
    }
    refresh_dish_price(current_dish)
}

function refresh_dish_price(id) {

    if (id != -1) {
        current_dish_price = dishes[id].basic_price;



    } else { current_dish_price = 0; }
}

function get_addons_price(id) {
    let addon_list = dishes[id].addons;
    let addon_price = 0;
    for (let i = 0; i < addon_list.length; i++) {
        if (document.getElementById(`addons_checkbox_${dishname}_${i}`).checked) {
            
        }
    }
}




function reset_old_dish(id) {
    visibilityChange(id);
}

















function change_dish_amount(id, sort) {
    current_amount = document.getElementById(`amount_order_${id}`).innerHTML;
    current_value = parseFloat(document.getElementById(`btn_order_${id}`).innerHTML);
    current_value = current_value / current_amount;
    if (sort == 'minus' && current_amount > 1) {
        current_amount = current_amount - 1;
    }
    if (sort == 'plus') {
        current_amount = current_amount + 1;
    }
    document.getElementById(`amount_order_${id}`).value = current_amount
    document.getElementById(`btn_order_${id}`).innerHTML = `${current_amount * current_value}`;
}



function onload_restaurant_page(dish_list) {
    document.getElementById('dishes').innerHTML = '';

    for (let index = 0; index < dish_list.length; index++) {
        document.getElementById('dishes').innerHTML += single_dish_template(dish_list, index);

    }

}

function currency_to_float(currency){
    let float_num = parseFloat(currency.replace(",","."));
    return float_num ;
}

function float_to_currency(float_num){
    float_num = (float_num.toFixed(2)).toString();
    let currency = `${float_num.replace(".",",")}€`;
    return currency ;
}
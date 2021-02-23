/*first try*/

let basket=[];

/* basket_content is used to save current selection of a single dish, this gets saved in basket array when finnished */
let basket_content = {
    'name': '',
    'addons': '',
    'amount': '',
    'single_price': ''};
let basket_empty = {
    'name': '',
    'addons': '',
    'amount': '',
    'single_price': ''};
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
        reset_old_dish(current_dish);
    }
    if (current_dish != parseInt(id.slice(12))) {
        visibilityChange(id);
        current_dish = parseInt(id.slice(12));
    } else {
        current_dish = -1;
    }
    refresh_dish_price();
}

function refresh_dish_price() {
    let current_dish_price = 0;
    if (current_dish != -1) {
        current_dish_price = currency_to_float(dishes[current_dish].basic_price) + get_addons_price(current_dish);
        let multi = document.getElementById(`amount_order_${current_dish}`).innerHTML;
        basket_content.single_price = `${float_to_currency(current_dish_price)}`;
        basket_content.name = dishes[current_dish].name;
        basket_content.amount = multi;
        current_dish_price = current_dish_price * multi;
        document.getElementById(`btn_order_${current_dish}`).innerHTML = `${float_to_currency(current_dish_price)}`;
    } else { current_dish_price = 0; }

}

function get_addons_price(id) {
    let addon_list = dishes[id].addons;
    let addon_price = 0;
    basket_content.addons = '';
    for (let i = 0; i < addon_list.length; i++) {
        if (document.getElementById(`addons_checkbox_${dishes[id].name}_${i}`).checked) {
            addon_price = addon_price + currency_to_float(addon_list[i].price);
            basket_content.addons += ', ' + addon_list[i].name;
        }
    }
    return addon_price;
}




function reset_old_dish(id) {
    visibilityChange(`bottom_dish_${id}`);
    for (let i = 0; i < dishes[id].addons.length; i++) {
        if (document.getElementById(`addons_checkbox_${dishes[id].name}_${i}`).checked) {
            document.getElementById(`addons_checkbox_${dishes[id].name}_${i}`).checked = false;
        }
    }
    basket_content = basket_empty;
}




function change_dish_amount(id, sort) {
    current_amount = document.getElementById(`amount_order_${id}`).innerHTML;
    if (sort == 'minus' && current_amount > 1) {
        current_amount = current_amount - 1;
    }
    if (sort == 'plus') {
        current_amount = Number(current_amount) + 1;
    }
    document.getElementById(`amount_order_${id}`).innerHTML = current_amount;
    refresh_dish_price();
}



function onload_restaurant_page(dish_list) {
    document.getElementById('dishes').innerHTML = '';

    for (let index = 0; index < dish_list.length; index++) {
        document.getElementById('dishes').innerHTML += single_dish_template(dish_list, index);
    }
}

function currency_to_float(currency) {
    let float_num = parseFloat(currency.replace(",", "."));
    return float_num;
}

function float_to_currency(float_num) {
    float_num = (float_num.toFixed(2)).toString();
    let currency = `${float_num.replace(".", ",")}€`;
    return currency;
}

function add_to_basket() {
    basket.push(basket_content);
    basket_content = basket_empty;
    if (current_dish != -1) {
        reset_old_dish(current_dish);
    }
}
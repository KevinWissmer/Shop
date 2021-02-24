/*first try*/

let basket = [];
let dishes=[];
let restaurant={};
/* basket_content is used to save current selection of a single dish, this gets saved in basket array when finnished */
let basket_content = {
    'name': '',
    'addons': '',
    'amount': '',
    'single_price': ''
};
let basket_empty = {
    'name': '',
    'addons': '',
    'amount': '',
    'single_price': ''
};
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
    basket_content.addons = basket_content.addons.substring(2);
    return addon_price;
}

function pack_basket_content_object(id) {

    let basket_content_pack = {};
    basket_content_pack.addons = basket_content.addons;
    basket_content_pack.single_price = basket_content.single_price;
    basket_content_pack.name = basket_content.name;
    basket_content_pack.amount = basket_content.amount;
    return basket_content_pack;
}




function reset_old_dish(id) {
    visibilityChange(`bottom_dish_${id}`);
    for (let i = 0; i < dishes[id].addons.length; i++) {
        if (document.getElementById(`addons_checkbox_${dishes[id].name}_${i}`).checked) {
            document.getElementById(`addons_checkbox_${dishes[id].name}_${i}`).checked = false;
        }
    }
    document.getElementById(`amount_order_${id}`).innerHTML = 1;
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



function onload_restaurant_page() {
    let r_id = new URLSearchParams(window.location.search).get('R_ID');
    restaurant = db[r_id][0];
    dishes = db[r_id][1];
    console.log(db[r_id][1]);

    document.getElementById('dishes').innerHTML = '';
    set_restaurant_information();
    for (let i = 0; i < dishes.length; i++) {
        document.getElementById('dishes').innerHTML += single_dish_template(dishes, i);
    }
    refresh_basket();
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
    basket.push(pack_basket_content_object(current_dish));

    console.log(pack_basket_content_object(current_dish));
    basket_content = basket_empty;
    if (current_dish != -1) {
        reset_old_dish(current_dish);
        current_dish = -1;
    }

    refresh_basket();
}

/** visibility true or false */
function d_none_change_to(id, visibility) {
    if (visibility) {
        if (document.getElementById(id).classList.value.includes("d-none")) {
            document.getElementById(id).classList.remove("d-none");
            document.getElementById(id).classList.add("d-flex");
        }
    } else {
        if (!document.getElementById(id).classList.value.includes("d-none")) {
            document.getElementById(id).classList.remove("d-flex");
            document.getElementById(id).classList.add("d-none");
        }
    }

}

function refresh_basket() {
    document.getElementById('basket_content').innerHTML = '';
    if (basket.length == 0) {
        d_none_change_to('basket_placeholder', true);
    } else {
        d_none_change_to('basket_placeholder', false);
    }
    for (let i = 0; i < basket.length; i++) {
        document.getElementById('basket_content').innerHTML += single_basket_element_template(i);
    }
    refresh_total();
}


function change_basket_amount(id, sort) {
    current_amount = basket[id].amount;
    if (sort == 'minus' && current_amount > 1) {
        current_amount = current_amount - 1;
    }
    if (sort == 'plus') {
        current_amount = Number(current_amount) + 1;
    }
    basket[id].amount = current_amount;
    refresh_basket();
}


function delete_basket_element(id) {
    basket.splice(id, 1);
    refresh_basket();
}

function refresh_total() {
    let subtotal_price = 0;
    for (let i = 0; i < basket.length; i++) {
        subtotal_price = subtotal_price + (basket[i].amount * currency_to_float(basket[i].single_price));
    }
    document.getElementById('subtotal_price').innerHTML = float_to_currency(subtotal_price);
    document.getElementById('delivery_costs').innerHTML = restaurant.delivery_costs;
    document.getElementById('total_price').innerHTML = float_to_currency(subtotal_price + currency_to_float(restaurant.delivery_costs));
    refresh_lower_basket(subtotal_price);
}

function set_restaurant_information() {
    document.getElementById('restaurant_name').innerHTML = restaurant.name;
    document.getElementById('rating_bg').style.width = `${restaurant.rating.rating_value}%`;
    document.getElementById('rating_number').innerHTML = `(${restaurant.rating.rating_number} Bewertungen)`;
}

function heart_status_change() {
    if (document.getElementById('heart_img').dataset.status == 'grey') {
        document.getElementById('heart_img').src = "img/heart.png";
        document.getElementById('heart_img').dataset.status = 'not_grey';
    } else {
        document.getElementById('heart_img').src = "img/heart_grey.png";
        document.getElementById('heart_img').dataset.status = 'grey';
    }
}

function refresh_lower_basket(subtotal_price) {
    refresh_missing_money(subtotal_price);
    if (subtotal_price >= currency_to_float(restaurant.min_price)) {
        document.getElementById('order_text').innerHTML = `Du hast den Mindestbestellwert von ${restaurant.min_price} erreicht und kannst jetzt fortfahren`;
        set_order_btn('active');
    } else {
        document.getElementById('order_text').innerHTML = `Leider kannst Du noch nicht bestellen. Euro Pizza liefert erst ab einem Mindestbestellwert von
        ${restaurant.min_price} (exkl. Lieferkosten).`;
        set_order_btn('inactive');
    }
}

function set_order_btn(status) {
    if (status == 'inactive') {
        document.getElementById('order_btn').disabled = true;
        document.getElementById('order_btn').classList = 'btn btn-secondary btn-lg bold';
    }
    if(status == 'active'){
        document.getElementById('order_btn').disabled = false;
        document.getElementById('order_btn').classList = 'btn btn-primary btn-lg bold';
    }
}

function refresh_missing_money(subtotal_price){
    if (subtotal_price >= currency_to_float(restaurant.min_price)) {
        d_none_change_to('missing_money_box', false);
    } else {
        document.getElementById('missing_money').innerHTML = `${float_to_currency(-1 * (subtotal_price - currency_to_float(restaurant.min_price)))}`; 
        d_none_change_to('missing_money_box', true);
    }
}

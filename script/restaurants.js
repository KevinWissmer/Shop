let current_restaurants_ids = [];
/* min_price, delivery_costs, rating     (-1 = nothing) */
let filter = [-1, -1, -1];

function load_restaurants() {
    document.getElementById('restaurants_content_box').innerHTML = `<div class="pl-2 "><h4 class="font_size_restaurant d-flex flex-row cb_65">Wir konnten&nbsp; <p id="restaurants_amount" class="ftc_orange">${db.length}</p>&nbsp; Restaurants für Sie finden!</h4></div>`;
    if (current_restaurants_ids.length == 0) {
        for (let i = 0; i < db.length; i++) {
            document.getElementById('restaurants_content_box').innerHTML += restaurants_single_element(i);
        }
    } else {
        for (let i = 0; i < current_restaurants_ids.length; i++) {
            document.getElementById('restaurants_content_box').innerHTML += restaurants_single_element(current_restaurants_ids[i]);
            document.getElementById('restaurants_amount').innerHTML = current_restaurants_ids.length;
        }
    }
}

function redirect_to_restaurant(id) {
    window.location.href = `restaurant.html?R_ID=${id}`;
}

function filter_update(name, value) {
    switch (name) {
        case "min_price":
            filter[0] = value;
            break;
        case "delivery_costs":
            filter[1] = value;
            break;
        case "rating":
            filter[2] = value;
            break;
    }
    current_id_update();
}

function current_id_update() {
    current_restaurants_ids = [];
    for (let i = 0; i < db.length; i++) {
        if (filter_single_restaurant(i)) {
            current_restaurants_ids.push(i);
        }
    }
    search_input_filter();
}

function search_input_filter() {
    let search = document.getElementById('search_input').value;
    search = search.toLowerCase();
    tmp_ids = [];
    for (let i = 0; i < current_restaurants_ids.length; i++) {
        if (db[current_restaurants_ids[i]][0].name.toLowerCase().includes(search)) {
            tmp_ids.push(current_restaurants_ids[i]);
        }
    }
    current_restaurants_ids = tmp_ids;
    load_filtered_restaurants();
}

function load_filtered_restaurants() {
    if (current_restaurants_ids.length == 0) {
        no_restaurants();
    } else {
        load_restaurants();
    }
}

function filter_single_restaurant(id) {
    let permission = true;
    let tmp = [currency_to_float(db[id][0].min_price), currency_to_float(db[id][0].delivery_costs), -db[id][0].rating.rating_value];

    for (let i = 0; i < tmp.length; i++) {

        if (filter[i] != -1) {
            if (tmp[i] > filter[i]) {
                permission = false;
            }
        }
    }
    return permission;
}

function no_restaurants() {
    document.getElementById('restaurants_content_box').innerHTML = sorry_template();
}

function show_hide_filter_menu() {
    if (document.getElementById('filter_box').classList.value.includes("l_0")) {
        if (document.getElementById('filter_box_btn').classList.value.includes("l_290")) {
            document.getElementById('filter_box').classList.remove("l_0");
            document.getElementById('filter_box_btn').classList.remove("l_290");
            document.getElementById('filter_box_img').src='img/arrow_r.png';
        }
    } else {
        document.getElementById('filter_box').classList.add("l_0");
        document.getElementById('filter_box_btn').classList.add("l_290");
        document.getElementById('filter_box_img').src='img/arrow_l.png';
    }
}
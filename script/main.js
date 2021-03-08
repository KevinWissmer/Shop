/*first try*/

let basket = [];
let dishes = [];
let restaurant = {};
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

function get_cat_img_path(category){
    for (let i = 0; i < category_img.length; i++) {
        if(category_img[i].name == category){
            return category_img[i].img_path;
        }        
    }
}

function visibilityChange(id) {
    if (!document.getElementById(id).classList.value.includes("d-none")) {
        document.getElementById(id).classList.add("d-none");
        document.getElementById(`${id}_btn`).src = ('./img/plus.png');
    } else {
        document.getElementById(id).classList.remove("d-none");
        document.getElementById(`${id}_btn`).src = ('./img/x.png');
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



function alert_not_included(){
    alert('not included');
}

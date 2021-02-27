/* 
for all HTML generating code
*/



/* 
single dish
*/

function single_searchbar_template(category_list,index){
    return `<a class="link_pure pr-3 " href="#category_${index}">${category_list[index]}</a>`;
}

function single_category_template(category_list, index) {
    return `
    <div id="category_${index}" class="mb-4 cb_bg_5">
        <div style="height: 128px;"> Bild fehlt </div>
        <div class="p-3 border-top headline_medium bold">${category_list[index]}</div>
    </div>
`;
}

function searchbar_template() {

}

function single_dish_template(dish_list, index) {
    return `
    <div id="dish_${index}" class="mb-4">
        ${single_dish_template_top(dish_list, index)}
        ${single_dish_template_bottom(dish_list, index)}
    </div>`;
}



function single_dish_template_top(dish_list, index) {
    return `
        <div onclick="open_dish('bottom_dish_${index}')"
            class="border p-3 d-flex flex-row justify-content-between dish_hover">
            <div d-flex flex-column justify-content-between>
                <div class="headline_medium bold pb-1">${dish_list[index].name}</div>
                <div class="pb-3">${dish_list[index].description}</div>
                <div class="italic pb-3">${dish_list[index].addon_description}</div>
                <div class="ftc_orange bold headline_medium">${dish_list[index].basic_price}</div>
            </div>

            <div class="bold position-relative border d-flex align-content-center justify-content-center "
                style="padding: 0.7rem!important; height:40px; width:40px; top:-17px; right:-17px;">
                <img id="bottom_dish_${index}_btn" src="./img/plus.png" alt="">
            </div>

        </div>`;
}

function single_dish_template_bottom(dish_list, index) {
    return `
    <div id="bottom_dish_${index}" class="d-none p-3 cb_bg_5" style="width: 100%; ">
            <div>
                <div class="pl-5 pr-5 ">
                    

                    ${addons_list_template(dish_list[index])}
                    
                    <div class="d-flex flex-row justify-content-between align-items-center pt-3 pb-3">
                        <div class="border d-flex flex-row justify-content-between "
                            style="height: 36px; width: 128px;">
                            <div class="d-flex justify-content-center p-2" style="  width: 30%;">
                                <img onclick="change_dish_amount(${index},'minus')" src="./img/minus_grey.png" alt="">
                            </div>
                            <div id="amount_order_${index}" class="d-flex justify-content-center align-items-center bold"
                                style="color: #007bff; font-size: large;  width: 30%;">1</div>
                            <div class="d-flex justify-content-center p-2" style="  width: 30%;">
                                <img onclick="change_dish_amount(${index},'plus')" src="./img/plus_grey.png" alt="">
                            </div>
                        </div>
                        <button id="btn_order_${index}" onclick="add_to_basket()" class="btn btn-primary  bold" style="width:60%;"
                            ></button>
                    </div>
                </div>

            </div>
        </div>`;
}


function addons_list_template(list) {
    let list_template = '';
    for (let i = 0; i < list.addon_categories.length; i++) {
        list_template = list_template + addons_list_category_template(list.addons, list.addon_categories[i], list.name);
    }

    return list_template;
}


function addons_list_category_template(list, category, dishname) {
    let list_category_template = `<div class="pt-2 pb-1">${category.description}</div>`;

    for (let i = 0; i < list.length; i++) {
        if (list[i].category == category.name) {
            list_category_template = list_category_template + `
            <div id="${i}" class="d-flex flex-row justify-content-between pb-1">
                <div class="form-check">
                    <input onclick="refresh_dish_price()" class="form-check-input" type="checkbox" value="" id="addons_checkbox_${dishname}_${i}">
                    <label class="form-check-label" for="flexCheckDefault">
                    ${list[i].name} (+${list[i].price})
                    </label>
                    
                </div>

                <div style="font-size: small; color: blue;">
                    Produktinfo
                </div>
            </div> 
            `;

        }
    }

    return list_category_template;
}




/* 
basket
*/


function single_basket_element_template(id) {
    return `<div class="d-flex flex-row justify-content-between basket_box p-3" >
            <div id="basket_amount_${id}" class="fs_xsmall pt-1">${basket[id].amount}x</div>
            <div class="d-flex flex-column fs_small"  style="width: 90%;">
                <div class="d-flex flex-row justify-content-between ">
                    <div class="pr-3">${basket[id].name}</div>
                    <div class="d-flex flex-row justify-content-between" style="width: 50%;">                                         
                        <div >
                            <img onclick="change_basket_amount(${id},'minus')" class="border rounded p-1" src="./img/minus_grey.png" alt="" style="width: 20px; height: 20px;">
                            <img onclick="change_basket_amount(${id},'plus')" class="border rounded p-1" src="./img/plus_grey.png" alt="" style="width: 20px; height: 20px;">
                        </div>
                        <div id="basket_price_${id}">${float_to_currency(basket[id].amount * currency_to_float(basket[id].single_price))}</div>
                        <div><img onclick="delete_basket_element(${id})" src="./img/delete-32_blue.png" alt="" style="width: 16px; height: 16px;"></div>
                    </div>
                </div>
                <div class="fs_small cb_65 pt-2">${basket[id].addons}</div>
            </div>
        </div>`;
}

function basket_template(){
    return `<div class="p-3 border text-center cb_65" style="height:60px;"> <b>Warenkorb</b>
    </div>
    <div  class="d-flex flex-column justify-content-center align-items-center pt-5 ">
        <div id="basket_placeholder" class="d-flex flex-column justify-content-center align-items-center">
            <img src="./img/basket.png" style="height: 55px; width: 55px;" alt="">
            <div class="text-center pb-5 cb_55"  >
            Wähle leckere Gerichte aus der Karte und bestelle Dein Menü.
            </div>
        </div>
        <div id="basket_content">

        </div>
        <div id="basket_price" class="pt-3 pb-3 border-top border-bottom " style="width:90%;">
            <div class="d-flex flex-row justify-content-between pt-2 cb_65">
                <div>Zwischensume</div>
                <div id="subtotal_price">0,00€</div>
            </div>
            <div class="d-flex flex-row justify-content-between pt-2 cb_65">
                <div>Lieferkosten</div>
                <div id="delivery_costs">0,00€</div>
            </div>
            <div class="d-flex flex-row justify-content-between bold pt-2">
                <div>Gesamt</div>
                <div id="total_price">0,00€</div>
            </div>
            <div id="missing_money_box" class="d-flex flex-row justify-content-between bold pt-2">
                <div class="c_green">Benötigter Betrag, um den Mindestbestellwert zu erreichen</div>
                <div id="missing_money" class="c_green"></div>
            </div>
        </div>
        <div id="order_text" class="text-center p-3 cb_55" style="font-size: small; ">
            
        </div>
        <button id="order_btn" class="btn btn-secondary btn-lg bold"  style="height: 64px; width:90%;"
            disabled>Bestellen</button>
    </div>`;
}

function restaurants_single_element(id){
    return `<div onclick="redirect_to_restaurant(${id})" class="restaurants_box border m-2 d-flex flex-row">
    <div class="p-3 restaurants_box_logo border-right d-flex flex-column justify-content-center align-items-center">
        <div><img class="restaurants_logo" src="${db[id][0].logo_path}" alt=""></div>
        <div class="position-relative mt-2 " style="height: 16px; width: 76px;">
            <img class="rating_front " src="./img/5star_240x48.png" alt="">
            <div id="rating_bg" class="rating_bg" style=" width: ${db[id][0].rating.rating_value}% !important;"></div>
            <div class="rating_bg2"></div>
        </div>
    </div>
    <div class="p-2 d-flex flex-column justify-content-between">
        <div class=" d-flex flex-column">
            <div class="bold fs_larger">${db[id][0].name}</div>
            <div class="fs_small cb_65">fehlt noch in datenbank</div>
        </div>
        <div class="fs_small cb_65">delivery cost time und minimum.....coming soon</div>
    </div>

</div>`;
}
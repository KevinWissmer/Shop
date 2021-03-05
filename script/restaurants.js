let current_restuarants_ids = [];

function load_restaurants(){
    document.getElementById('restaurants_content_box').innerHTML='';
    if(current_restuarants_ids.length == 0){
        for (let i = 0; i < db.length; i++) {
            document.getElementById('restaurants_content_box').innerHTML += restaurants_single_element(i);
        }
    }else{
        for (let i = 0; i < current_restuarants_ids.length; i++) {
            document.getElementById('restaurants_content_box').innerHTML += restaurants_single_element(current_restuarants_ids[i]);
        }
    }
}

function redirect_to_restaurant(id){
    console.log(id);
    window.location.href=`restaurant.html?R_ID=${id}`;
}
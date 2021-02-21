/* 
for all HTML generating code
*/

/* 
basket
*/




/* 
single dish
*/

function single_dish_template(){
    return `
    <div onclick="visibilityChange('bottom_dish_1')"
                    class="border p-3 d-flex flex-row justify-content-between dish_hover">
                    <div d-flex flex-column justify-content-between>
                        <div class="headline_medium bold pb-1"> Pizza Salami</div>
                        <div class="pb-3">Salami und Teig</div>
                        <div class="italic pb-3">Wahl aus: mit Ananas, mit Artischocken, mit Champignons, mit Ei, mit
                            Gewürzen, scharf, mit Gorgonzola und mehr.</div>
                        <div class="ftc_orange bold headline_medium">9,99€</div>
                    </div>

                    <div class="bold position-relative border d-flex align-content-center justify-content-center "
                        style="padding: 0.7rem!important; height:40px; width:40px; top:-17px; right:-17px;">
                        <img id="bottom_dish_1_btn" src="./img/plus.png" alt="">
                    </div>

                </div>
                <div id="bottom_dish_1" class=" p-3" style="  width: 100%; background-color: rgba(0, 0, 0,0.05);">
                    <div>
                        <div class="pl-5 pr-5 ">
                            <div class="pt-2 pb-1">
                                Ihre Extras:
                            </div>
                            <div class="d-flex flex-row justify-content-between pb-1">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                                    <label class="form-check-label" for="flexCheckDefault">
                                        mit Annanas (+1.00€)
                                    </label>
                                </div>
        
                                <div style="font-size: small; color: blue;">
                                    Produktinfo
                                </div>
                            </div>
                            <div >
                                mehr anzeigen
                            </div>
                            <div class="d-flex flex-row justify-content-between align-items-center pt-3 pb-3">
                                <div class="border d-flex flex-row justify-content-between " style="height: 36px; width: 128px; background-color: white;">
                                    <div class="d-flex justify-content-center p-2" style="  width: 30%;">
                                        <img src="./img/minus_grey.png" alt="">
                                    </div>
                                    <div class="d-flex justify-content-center align-items-center bold" style="color: #007bff; font-size: large;  width: 30%;">
                                        1
                                    </div>
                                    <div class="d-flex justify-content-center p-2" style="  width: 30%;">
                                        <img src="./img/plus_grey.png" alt="">
                                    </div>
                                </div>
                                <button class="btn btn-primary  bold" style="width:60%;" onclick="showtest()" >9,99€</button>
                            </div>
                        </div>
                        
                    </div>
                </div>
    `;
}



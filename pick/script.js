const domain = 'http://35.225.243.133/'

$(document).ready(function () {
    $.ajax({
        url: 'http://35.225.243.133/api/categories/',
        method: 'GET',
        success: function (response) {
            for (let category of response) {
                let category_pack = document.createElement('div');
                category_pack.classList.add('category_pack');
                document.querySelector('.parent-of-left-menu').appendChild(category_pack);
                let category_svg = document.createElement('a');
                category_svg.classList.add('active', 'a-classes');
                category_svg.innerHTML = ` <svg  xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 18 18">
            <g data-name="Layer 2">
                <g data-name="Layer 3">
                    <path data-name="Path 16"
                        d="M10.235 3.966a2.943 2.943 0 00-1.38-2.122c-.528-.243-.485-.618-.338-.854s.41-.231.832.164a5 5 0 011.368 2.87z"
                        fill="currentColor" stroke="currentColor" stroke-miterlimit="10"
                        stroke-width=".416"></path>
                    <path data-name="Path 17"
                        d="M6.514 7.976a4.757 4.757 0 109.513 0c0-2.627-1.5-4.976-4.757-4.73-2.619.197-4.767 1.656-4.756 4.73z"
                        fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                        stroke-width="1.387"></path>
                    <path data-name="Path 18"
                        d="M6.514 7.976a4.757 4.757 0 109.513 0c0-2.627-1.5-4.976-4.757-4.73-2.619.197-4.767 1.656-4.756 4.73z"
                        fill="currentColor"></path>
                    <path data-name="Path 19"
                        d="M14.731 5.045s1.506 1.544.714 2.993c-.287.526-1.2.192-1.234-.485s.25-1.27-.236-2.05c-.349-.566.26-.878.756-.458z"
                        fill="#fff"></path>
                    <path data-name="Path 20"
                        d="M10.834 3.413s1.161-4.315 6.469-2.048c0 0-2.459 4.074-6.469 2.048z"
                        stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                        stroke-width="1.387"></path>
                    <path data-name="Path 21"
                        d="M10.834 3.413s1.161-4.315 6.469-2.048c0 0-2.459 4.074-6.469 2.048z"
                        fill="#fff">
                    </path>
                    <path data-name="Path 22"
                        d="M10.516 4.513a10.193 10.193 0 015.63-2.863c-2.736-.521-6.018 1.748-6.018 1.748s.289.864.388 1.115z"
                        fill="currentColor" stroke="currentColor" stroke-linecap="round"
                        stroke-linejoin="round" stroke-width=".035"></path>
                    <path data-name="Path 23"
                        d="M10.895 9.896h0c-.268-.877-1.969-1.65-4.234-1.72a5.286 5.286 0 00-4.515 1.858 2 2 0 00-.551 1.308h0a4.934 4.934 0 004.768 4.426c3.133.223 3.786-.96 4.225-1.9a6.363 6.363 0 00.307-3.972z"
                        fill="#fff" stroke="#fff" stroke-linecap="round" stroke-linejoin="round"
                        stroke-width="3.19"></path>
                    <path data-name="Path 24"
                        d="M10.895 9.896h0c-.268-.877-1.969-1.65-4.234-1.72a5.286 5.286 0 00-4.515 1.858 2 2 0 00-.551 1.308h0a4.934 4.934 0 004.768 4.426c3.133.223 3.786-.96 4.225-1.9a6.363 6.363 0 00.307-3.972z"
                        fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                        stroke-width="1.387"></path>
                    <path data-name="Path 25"
                        d="M10.895 9.896h0c-.268-.877-1.969-1.65-4.234-1.72a5.286 5.286 0 00-4.515 1.858 2 2 0 00-.551 1.308h0a4.934 4.934 0 004.768 4.426c3.133.223 3.786-.96 4.225-1.9a6.363 6.363 0 00.307-3.972z"
                        fill="#fff" stroke="currentColor" stroke-miterlimit="10" stroke-width=".069">
                    </path>
                    <path data-name="Path 26"
                        d="M10.895 9.896c-.268-.877-1.969-1.65-4.234-1.72a5.286 5.286 0 00-4.515 1.858 2 2 0 00-.551 1.308 4.934 4.934 0 004.768 4.426c3.133.223 3.786-.96 4.225-1.9a6.363 6.363 0 00.307-3.972z"
                        fill="currentColor"></path>
                    <path data-name="Path 27"
                        d="M1.595 11.342a4.375 4.375 0 00.128.684 2.664 2.664 0 00.3.335c1.067 1.028 4.409 1.723 7.173 1 .883-.23 1.522-1.3.526-1.851-.139-.076-.243-.184-.208-.277s.089-.106.269-.1a1.2 1.2 0 001.232-.735 4.126 4.126 0 00-.121-.509c-.272-.876-1.974-1.644-4.239-1.715a5.286 5.286 0 00-4.515 1.858 2.024 2.024 0 00-.545 1.31z"
                        fill="#fff"></path>
                    <path data-name="Path 28"
                        d="M1.921 9.984a1.569 1.569 0 00.1 2.377c1.066 1.028 4.409 1.723 7.173 1 .883-.23 1.522-1.3.526-1.851-.139-.076-.243-.184-.208-.277s.089-.106.269-.1a1.183 1.183 0 001.259-.823 1.321 1.321 0 00-.785-1.413"
                        fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                        stroke-width=".416"></path>
                    <path data-name="Path 29"
                        d="M8.013 10.78c-.018.471-.87.791-1.9.752s-1.856-.423-1.837-.9.87-.963 1.9-.924 1.855.605 1.837 1.072z"
                        fill="currentColor" stroke="currentColor" stroke-linecap="round"
                        stroke-linejoin="round" stroke-width=".555"></path>
                    <path data-name="Path 30"
                        d="M9.722 12.123a2.411 2.411 0 01.467 2.08 2.759 2.759 0 01-1.5 2.427"
                        fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round"
                        stroke-width=".555">
                    </path>
                </g>
            </g>
        </svg>`
                let category_name = document.createElement('span');
                category_name.classList.add('category_name');
                category_pack.appendChild(category_svg);
                category_pack.appendChild(category_name);
                category_name.innerText = category.title;
                let category_id = category.id;
                category_pack.setAttribute('category_id', category_id);

                $(category_pack).click(function () {
                    filterByCategory(category_id);

                });


            }
        },
        error: function (error_response) {

        }

    })

    function filterByCategory(category_id) {
        $.ajax({
            url: 'http://35.225.243.133/api/products/',
            method: 'GET',
            success: function (response) {
                document.querySelector('.parent_of_all_cards').innerHTML = '';
                for (let product of response) {
                    if (typeof category_id !== 'undefined') {
                        if (category_id === product.category.id) {
                            addingProducts(product);
                        }
                    } else {
                        addingProducts(product);
                    }
                }
            }
        })
    }

    function addingProducts(product) {
        let card_of_product = document.createElement('div');
        // card_of_product.setAttribute('product_id', product.id)
        let product_id = product.id;
        document.querySelector('.parent_of_all_cards').appendChild(card_of_product);
        card_of_product.classList.add('col-6', 'col-md-3', 'mt-4')
        let product_div = document.createElement('div');
        product_div.setAttribute('product_id', product.id);
        product_div.classList.add('card');
        product_div.setAttribute('card_title', product.title);
        card_of_product.appendChild(product_div);
        let product_img = document.createElement('img');
        product_img.classList.add('cards_imgs');
        product_img.setAttribute('src', product.main_image);
        product_div.appendChild(product_img);
        let product_name = document.createElement('p');
        product_div.appendChild(product_name);
        product_name.classList.add('product_name');

        product_div.addEventListener('click', function (event) {
            addOnClick(event, this);
        })

        let name_span = document.createElement('span');
        let unit_count_span = document.createElement('span');
        let unit_name_span = document.createElement('span');
        let unit_count_together = document.createElement('span');
        unit_name_span.classList.add('product-unit');

        name_span.innerText = product.title;
        unit_count_span.innerText = product.amount_by_unit;
        unit_name_span.innerText = product.unit;
        product_name.appendChild(name_span);
        product_name.appendChild(unit_count_together);
        unit_count_together.appendChild(unit_count_span);
        unit_count_together.appendChild(unit_name_span);
        name_span.classList.add('name_span');
        unit_count_span.classList.add('unit_count_span');
        let price_div = document.createElement('div');
        price_div.classList.add('price', 'd-flex', 'justify-content-between', 'align-items-center', 'mt-4', 'ml-4', 'mr-4')
        product_div.appendChild(price_div);
        let price_number_div = document.createElement('div');
        let price_button_div = document.createElement('div');
        price_number_div.classList.add('price-number');
        price_button_div.classList.add('price-button');
        price_div.appendChild(price_number_div);
        price_div.appendChild(price_button_div);
        let price_number_count = document.createElement('span');
        let price_number_symbol = document.createElement('span');
        price_number_count.classList.add('fix-price');
        price_number_count.innerText = product.price;
        price_number_symbol.innerText = `$`;
        price_number_div.appendChild(price_number_count);
        price_number_div.appendChild(price_number_symbol);
        let price_button_svg = document.createElement('span');
        price_button_svg.classList.add('btn', 'add_to_cart');
        price_button_div.appendChild(price_button_svg);
        price_button_svg.innerHTML = `<svg xmlns="
    http://www.w3.org/2000/svg" width="14.4" height="12"
                viewBox="0 0 14.4 12">
                <g data-name="Group 120"
                    transform="translate(-288 -413.89)">
                    <path data-name="Path 154" fill="currentColor"
                        d="M298.7,418.289l-2.906-4.148a.835.835,0,0,0-.528-.251.607.607,0,0,0-.529.251l-2.905,4.148h-3.17a.609.609,0,0,0-.661.625v.191l1.651,5.84a1.336,1.336,0,0,0,1.255.945h8.588a1.261,1.261,0,0,0,1.254-.945l1.651-5.84v-.191a.609.609,0,0,0-.661-.625Zm-5.419,0,1.984-2.767,1.98,2.767Zm1.984,5.024a1.258,1.258,0,1,1,1.319-1.258,1.3,1.3,0,0,1-1.319,1.258Zm0,0">
                    </path>
                </g>
            </svg>Cart`


    }

    filterByCategory();

    document.querySelector('#form-id-1').addEventListener('submit', function (event) {
        event.preventDefault();
        let formData = new Object();
        document.querySelectorAll('#form-id-1 input').forEach((input) => {
            formData[input.getAttribute('name')] = input.value;
        });
        document.querySelectorAll('#form-id-1 small').forEach((small_tag) => {
            small_tag.innerHTML = '';
        })
        $.ajax({
            url: `${domain}accounts/api/login/`,
            data: formData,
            method: 'POST',
            success: function (response) {

                localStorage.setItem('token', response.token);
                window.location = 'products.html';


            },
            error: function (error_response) {
                let error_messages = error_response.responseJSON;
                if (error_messages.hasOwnProperty('non_field_errors')) {
                    document.querySelector('#non_field_errors').innerText = error_messages['non_field_errors'];
                }
                for (let message_name in error_messages) {
                    let input = document.querySelector(`[name="${message_name}"`);
                    if (input) {
                        let small_tag = input.parentElement.querySelector('small');
                        small_tag.innerText = error_messages[message_name];
                    }
                }
            }

        })
    })
    document.querySelector('#form-id-2').addEventListener('submit', function (event) {
        event.preventDefault();
        let form_data = $('#form-id-2').serializeArray();
        document.querySelectorAll('#form-id-2 small').forEach((small_tag) => {
            small_tag.innerHTML = '';
        })
        $.ajax({
            url: `${domain}accounts/api/register/`,
            data: form_data,
            method: 'POST',
            success: function (response) {
                document.querySelector('#form-id-2').classList.remove('d-block');
                document.querySelector('.login_modal').classList.remove('d-none');
            },
            error: function (error_response) {
                let error_messages = error_response.responseJSON;
                for (let message_name in error_messages) {
                    let input = document.querySelector(`#form-id-2 [name="${message_name}"`);
                    let small_tag = input.parentElement.querySelector('small');
                    small_tag.innerText = error_messages[message_name];

                }
            }
        })
    })

})

document.querySelector('.modal_sign_up_btn').addEventListener('click', function (event) {
    event.preventDefault();
    document.querySelector('.login_modal').classList.add('d-none');
    document.querySelector('#form-id-2').classList.add('d-block');
})
document.querySelector('.modal_login_btn').addEventListener('click', function (event) {
    event.preventDefault();
    document.querySelector('#form-id-2').classList.remove('d-block');
    document.querySelector('.login_modal').classList.remove('d-none');
})

function creatingBacketProduct(product_name,counter,card_image,prices_num,product_unit,sum) {
    let card_products = document.querySelector('#card_products');
    let card_div_1 = document.createElement('div');
    card_products.appendChild(card_div_1);
    card_div_1.classList.add('card_div_1', 'card');
    card_div_1.setAttribute('card_title', product_name);
    card_div_1.setAttribute('card_title1', product_name);
    let card_div_2 = document.createElement('div');
    card_div_2.classList.add('card_div_2', 'row', 'no-glutters');
    card_div_1.appendChild(card_div_2);
    let card_div_3 = document.createElement('div');
    card_div_2.appendChild(card_div_3);
    card_div_3.classList.add('card_div_3', 'col-md-12', 'd-flex', 'w-100');


    // -----------------------------------
    let card_div_4 = document.createElement('div');
    card_div_3.appendChild(card_div_4);
    card_div_4.classList.add('card_div_4', 'col-md-8', 'd-flex', 'justify-content-around');
    let div_4_child = document.createElement('div');
    div_4_child.classList.add('counters-class');
    let div_4_child_2 = document.createElement('span');
    div_4_child_2.classList.add('plus-btn');
    div_4_child_2.innerText = "+";
    let div_4_child_3 = document.createElement('span');
    div_4_child_3.classList.add('products-count');
    div_4_child_3.innerText = `${counter}`;
    let div_4_child_4 = document.createElement('span');
    div_4_child_4.classList.add('minus-btn');
    div_4_child_4.innerText = "-";
    card_div_4.appendChild(div_4_child);
    div_4_child.appendChild(div_4_child_2);
    div_4_child.appendChild(div_4_child_3);
    div_4_child.appendChild(div_4_child_4);
    let div_4_child_img = document.createElement('img');
    div_4_child_img.classList.add('card-img');
    div_4_child_img.setAttribute('src', card_image);
    card_div_4.appendChild(div_4_child_img);


    // ----------------------------------------------
    let div_center = document.createElement('div');
    card_div_4.appendChild(div_center);
    let h_6 = document.createElement('h6');
    h_6.classList.add('card-title');
    h_6.innerHTML = `${product_name}`;
    div_center.appendChild(h_6);
    let center_div_p1 = document.createElement('p');
    center_div_p1.classList.add('card-text');
    center_div_p1.innerText = `$${prices_num}`;
    div_center.appendChild(center_div_p1);
    let center_div_p2 = document.createElement('p');
    center_div_p2.classList.add('center_div_p2');
    div_center.appendChild(center_div_p2);
    // center_div_p2.innerText = `X ${product_unit}`;
    let center_div_p2_span = document.createElement('span');
    center_div_p2_span.classList.add('prd-unit');
    center_div_p2_span.innerText = counter;
    center_div_p2.appendChild(center_div_p2_span);
    let center_div_p2_span2 = document.createElement('span');
    center_div_p2_span2.classList.add("center_div_p2_span2");
    center_div_p2.appendChild(center_div_p2_span2)
    center_div_p2_span2.innerText = `X ${product_unit}`;


    // ---------------------------------

    let end_div = document.createElement('div');
    card_div_3.appendChild(end_div);
    end_div.classList.add("col-md-4", "d-flex", "align-items-center", "justify-content-center");
    let end_div_div = document.createElement('div');
    end_div.appendChild(end_div_div);
    end_div_div.classList.add("card-body", "d-flex", "align-items-center", "justify-content-center", "p-0");
    let end_div_div_p = document.createElement('p');
    end_div_div_p.classList.add("d-flex", "justify-content-between");
    end_div_div.appendChild(end_div_div_p);
    let end_div_div_span = document.createElement('span');
    end_div_div_p.appendChild(end_div_div_span);
    end_div_div_span.classList.add('end_div_div_span');
    end_div_div_span.innerText = "$";
    let end_div_div_span_2 = document.createElement('span');
    end_div_div_p.appendChild(end_div_div_span_2);
    end_div_div_span_2.classList.add('sum');
    end_div_div_span_2.innerText = `${sum}`;
    let last_span = document.createElement('span');
    last_span.classList.add('product-x');
    last_span.innerHTML = '<svg style="color:#bfbfbf" xmlns="http://www.w3.org/2000/svg" width="10.003" height="10" viewBox="0 0 10.003 10"><path data-name="_ionicons_svg_ios-close (5)" d="M166.686,165.55l3.573-3.573a.837.837,0,0,0-1.184-1.184l-3.573,3.573-3.573-3.573a.837.837,0,1,0-1.184,1.184l3.573,3.573-3.573,3.573a.837.837,0,0,0,1.184,1.184l3.573-3.573,3.573,3.573a.837.837,0,0,0,1.184-1.184Z" transform="translate(-160.5 -160.55)" fill="currentColor"></path></svg>';
    end_div_div_p.appendChild(last_span);
}


var data = [];
if (localStorage.getItem('product_array')) {
    data = localStorage.getItem('product_array');
    let get_array = JSON.parse(data);
    for (let every_product of get_array) {
        var prd_id = every_product.prd_id;
        $.ajax({
            url: `http://35.225.243.133/api/products/${prd_id}/`,
            method: 'GET',
            success: function (response) {
                let sum = parseInt(response.price)*parseInt(every_product.prd_count);
                creatingBacketProduct(response.title,every_product.prd_count,response.main_image,response.price,response.amount_by_unit,sum);
            }
        })
    }
}




// var cards = document.getElementsByClassName('card');

// for (var i = 0; i < cards.length; i++) {
//     cards[i].addEventListener('click', function (event) {
function addOnClick(e, x) {
    var clicked_element = e.target;
    if (clicked_element.closest('.add_to_cart') != null) {
        var card_parent = x.closest('.card');

        var parent_of_cart = card_parent.querySelector('.price-button');

        var fixed_price = card_parent.querySelector('.price-number').textContent.replace('$', '');

        var big_parent = parent_of_cart.parentElement;

        var all_parent = big_parent.parentElement;
        var card_image = all_parent.children[0].getAttribute('src');

        document.getElementById('nop').classList.add('d-none');


        var product_price = big_parent.querySelector('.fix-price').textContent;
        var prices_num = parseInt(product_price);

        var product_name = all_parent.querySelector('.name_span').textContent;
        var product_unit = all_parent.querySelector('.unit_count_span').textContent;
        var counter = 1;
        var sum = 1 * prices_num;
        sum = sum.toFixed(2);


        var cart_element = all_parent.querySelector('.price-button')

        if (!cart_element.classList.contains('parent-of-cart')) {

            let card_products = document.querySelector('#card_products');
            let card_div_1 = document.createElement('div');

            card_products.appendChild(card_div_1);
            card_div_1.classList.add('card_div_1', 'card');
            card_div_1.setAttribute('card_title', product_name);
            card_div_1.setAttribute('card_title1', product_name);
            let card_div_2 = document.createElement('div');
            card_div_2.classList.add('card_div_2', 'row', 'no-glutters');
            card_div_1.appendChild(card_div_2);
            let card_div_3 = document.createElement('div');
            card_div_2.appendChild(card_div_3);
            card_div_3.classList.add('card_div_3', 'col-md-12', 'd-flex', 'w-100');


            // -----------------------------------
            let card_div_4 = document.createElement('div');
            card_div_3.appendChild(card_div_4);
            card_div_4.classList.add('card_div_4', 'col-md-8', 'd-flex', 'justify-content-around');
            let div_4_child = document.createElement('div');
            div_4_child.classList.add('counters-class');
            let div_4_child_2 = document.createElement('span');
            div_4_child_2.classList.add('plus-btn');
            div_4_child_2.innerText = "+";
            let div_4_child_3 = document.createElement('span');
            div_4_child_3.classList.add('products-count');
            div_4_child_3.innerText = `${counter}`;
            let div_4_child_4 = document.createElement('span');
            div_4_child_4.classList.add('minus-btn');
            div_4_child_4.innerText = "-";
            card_div_4.appendChild(div_4_child);
            div_4_child.appendChild(div_4_child_2);
            div_4_child.appendChild(div_4_child_3);
            div_4_child.appendChild(div_4_child_4);
            let div_4_child_img = document.createElement('img');
            div_4_child_img.classList.add('card-img');
            div_4_child_img.setAttribute('src', card_image);
            card_div_4.appendChild(div_4_child_img);


            // ----------------------------------------------
            let div_center = document.createElement('div');
            card_div_4.appendChild(div_center);
            let h_6 = document.createElement('h6');
            h_6.classList.add('card-title');
            h_6.innerHTML = `${product_name}`;
            div_center.appendChild(h_6);
            let center_div_p1 = document.createElement('p');
            center_div_p1.classList.add('card-text');
            center_div_p1.innerText = `$${prices_num}`;
            div_center.appendChild(center_div_p1);
            let center_div_p2 = document.createElement('p');
            center_div_p2.classList.add('center_div_p2');
            div_center.appendChild(center_div_p2);
            // center_div_p2.innerText = `X ${product_unit}`;
            let center_div_p2_span = document.createElement('span');
            center_div_p2_span.classList.add('prd-unit');
            center_div_p2_span.innerText = counter;
            center_div_p2.appendChild(center_div_p2_span);
            let center_div_p2_span2 = document.createElement('span');
            center_div_p2_span2.classList.add("center_div_p2_span2");
            center_div_p2.appendChild(center_div_p2_span2)
            center_div_p2_span2.innerText = `X ${product_unit}`;


            // ---------------------------------

            let end_div = document.createElement('div');
            card_div_3.appendChild(end_div);
            end_div.classList.add("col-md-4", "d-flex", "align-items-center", "justify-content-center");
            let end_div_div = document.createElement('div');
            end_div.appendChild(end_div_div);
            end_div_div.classList.add("card-body", "d-flex", "align-items-center", "justify-content-center", "p-0");
            let end_div_div_p = document.createElement('p');
            end_div_div_p.classList.add("d-flex", "justify-content-between");
            end_div_div.appendChild(end_div_div_p);
            let end_div_div_span = document.createElement('span');
            end_div_div_p.appendChild(end_div_div_span);
            end_div_div_span.classList.add('end_div_div_span');
            end_div_div_span.innerText = "$";
            let end_div_div_span_2 = document.createElement('span');
            end_div_div_p.appendChild(end_div_div_span_2);
            end_div_div_span_2.classList.add('sum');
            end_div_div_span_2.innerText = `${sum}`;
            let last_span = document.createElement('span');
            last_span.classList.add('product-x');
            last_span.innerHTML = '<svg style="color:#bfbfbf" xmlns="http://www.w3.org/2000/svg" width="10.003" height="10" viewBox="0 0 10.003 10"><path data-name="_ionicons_svg_ios-close (5)" d="M166.686,165.55l3.573-3.573a.837.837,0,0,0-1.184-1.184l-3.573,3.573-3.573-3.573a.837.837,0,1,0-1.184,1.184l3.573,3.573-3.573,3.573a.837.837,0,0,0,1.184,1.184l3.573-3.573,3.573,3.573a.837.837,0,0,0,1.184-1.184Z" transform="translate(-160.5 -160.55)" fill="currentColor"></path></svg>';
            end_div_div_p.appendChild(last_span);
            saveStorage();

            last_span.addEventListener('click', function (event) {
                removeItem();
            })

            function removeItem() {
                let parent = document.querySelectorAll(`[card_title="${product_name}"]`);
                let minus_sum = parent[0].querySelector('.sum').textContent;
                parent[0].remove();

                let summary = document.querySelector('.price-sums').textContent;
                summary = parseInt(summary) - parseInt(minus_sum);
                document.querySelectorAll('.price-sums').forEach(element =>
                    element.innerText = summary);
                leng = document.querySelector('#card_products').children.length;
                document.querySelectorAll('.item-count').forEach(element =>
                    element.innerHTML = leng);
                    saveStorage();
            }

            function addItem(x) {
                let parent = document.querySelectorAll(`[card_title="${product_name}"]`);
                all_sum_plus = parseInt(document.querySelector('.price-sums').textContent);
                all_sum_plus = parseInt(all_sum_plus) + parseInt(prices_num);
                counter++;
                parent.forEach((element) => {
                    element.querySelectorAll('.products-count').forEach((element) => {
                        element.innerHTML = counter;
                    })
                })

                card_div_1.querySelector('.prd-unit').innerHTML = counter;
                prod_sum = counter * prices_num;
                prod_sum = prod_sum.toFixed(2);
                card_div_1.querySelector('.sum').innerHTML = prod_sum;
                document.querySelectorAll('.price-sums').forEach(element =>
                    element.innerHTML = all_sum_plus);
                saveStorage();
            }


            let prod_sum = 1 * parseInt(prices_num);
            let all_sum_plus = 0;
            all_sum_plus = all_sum_plus + prod_sum;
            all_sum_plus = parseInt(document.querySelector('.price-sums').textContent);
            div_4_child_2.addEventListener('click', function (event) {
                addItem(this);

            })


            function minusItem(x) {
                let parent = document.querySelectorAll(`[card_title="${product_name}"]`);
                all_sum_plus = parseInt(document.querySelector('.price-sums').textContent);
                all_sum_plus = parseInt(all_sum_plus) - parseInt(prices_num);
                counter = parseInt(parent[0].querySelector('.products-count').textContent);
                counter--;
                if (counter == 0) {
                    removeItem();
                }
                parent.forEach((element) => {
                    element.querySelectorAll('.products-count').forEach((element) => {
                        element.innerHTML = counter;
                    })
                })
                card_div_1.querySelector('.products-count').innerHTML = counter;
                card_div_1.querySelector('.prd-unit').innerHTML = counter;
                prod_sum = counter * prices_num;
                prod_sum = prod_sum.toFixed(2);
                card_div_1.querySelector('.sum').innerHTML = prod_sum;
                document.querySelectorAll('.price-sums').forEach(element =>
                    element.innerHTML = all_sum_plus);
                saveStorage();


            }

            function saveStorage() {
                let parent = document.querySelectorAll(`[card_title="${product_name}"]`);
                let product_id = parent[1].getAttribute('product_id');
                let count_of_products = parseInt(parent[0].querySelector('.products-count').textContent);
                var saveData = {
                    "prd_name": product_name,
                    "prd_count": count_of_products,
                    "prd_id": product_id,
                }
                if (data.length != 0) {
                    let find_product = false;
                    for (let i = 0; i < data.length; i++) {
                        if (data[i]['prd_id'] === saveData['prd_id']) {
                            data[i]['prd_count'] = saveData['prd_count'];
                            localStorage.setItem('product_array', JSON.stringify(data));
                            find_product = true;
                            break;
                        }
                    }
                    if (!find_product) {
                        data.push(saveData);
                        localStorage.setItem('product_array', JSON.stringify(data));
                    }
                } else {
                    data.push(saveData);
                    localStorage.setItem('product_array', JSON.stringify(data));
                }
            }
            


            div_4_child_4.addEventListener('click', function (event) {
                minusItem(this);
            })

            var leng = document.querySelector('#card_products').children.length;


            var clone_card_parent = card_parent.querySelector('.price')
            var es = Array.from(clone_card_parent.querySelectorAll('.clone_card'))


            cart_element.innerHTML = "";
            let clone_of_minus = div_4_child_4.cloneNode(true);
            let clone_of_plus = div_4_child_2.cloneNode(true);
            let clone_of_count = div_4_child_3.cloneNode(true);
            parent_of_cart.appendChild(clone_of_minus);
            parent_of_cart.appendChild(clone_of_count);
            parent_of_cart.appendChild(clone_of_plus);
            parent_of_cart.classList.add('parent-of-cart', 'add_to_cart');

            clone_of_minus.addEventListener('click', function () {
                minusItem(this);

            })
            clone_of_plus.addEventListener('click', function () {
                addItem(this);

            })

            // }
            // document.querySelector('.btn-card-inModal').addEventListener('click', function(){

            //         let btnInModal = document.querySelector('.btn-card-inModal');
            //         btnInModal.classList.add('d-none');


            // });

        }

        // document.querySelectorAll('.item-count').forEach(element =>
        //     element.innerHTML = leng);

        leng = document.querySelector('#card_products').children;
        document.querySelectorAll('.item-count').forEach(element =>
            element.innerHTML = leng.length);

        totalSum = 0;
        Array.from(leng).forEach(element => {
            let sum = element.querySelector('.sum').textContent
            totalSum += parseInt(sum)
            document.querySelectorAll('.price-sums').forEach(element =>
                element.innerHTML = totalSum);
        });
    } else {
        document.getElementsByClassName('card-modal-btn')[0].click();
        let card_img = x.querySelector('.cards_imgs').getAttribute('src');
        document.querySelector('.modal-main-img').setAttribute('src', card_img);
        document.querySelectorAll('.thumb_img').forEach(element =>
            element.setAttribute('src', card_img));
        let product_name = x.querySelector('.name_span').textContent;
        document.querySelector('.product-title').innerText = product_name;
        let prdct_unit = x.querySelector('.product-unit').textContent;
        document.querySelector('.unit-place').innerText = prdct_unit;
        let prdct_price = x.querySelector('.price-number').textContent;
        document.querySelector('.price-place').innerText = prdct_price;

    }

}


//     })

// }
document.querySelector('.hamburger').addEventListener('click', function () {
    document.querySelector('.extra-menu').classList.toggle('show');
})








const domain = 'http://35.225.243.133'

$(document).ready(function () {
   
    

    document.querySelector('.download_product_img').addEventListener('click', function () {
        document.querySelector('.drag_file').click();
    })

    $.ajax({
        url: `${domain}/api/categories/`,
        method: 'GET',
        success: function (response) {
            let selected = document.querySelector('select[name ="category"]');
            for (let category_data of response) {
                let option = document.createElement('option');
                option.classList.add('category_option');
                option.value = category_data.id;
                option.innerText = category_data.title;
                selected.appendChild(option)
            }
        }
    })
    document.querySelector('#product_form_creating').addEventListener('submit', function (event) {
        event.preventDefault();
        // let form_data = $('#product_form_creating').serializeArray();
        var formData = new FormData(this);
        document.querySelectorAll('#product_form_creating small').forEach((small_tag) => {
            small_tag.innerHTML = '';
        })
        if (localStorage.getItem('token')) {
            $.ajax({
                url: `${domain}/api/products/`,
                method: 'POST',
                // data: form_data,
                cash: false,
                data: formData,
                contentType: false,
                processData: false,
                headers: {
                    'Authorization': `Token ${localStorage.getItem('token')}`,
                },
                success: function (response) {
                    addingProducts(response);
                },
                error: function (error_response) {

                    if (error_response.status == 401) {
                        window.location('pick.html');
                    }
                }
            })
        }
        else {
            window.location('pick.html');
        }


    });
    function addingProducts(product) {
        let card_of_product = document.createElement('div');
        card_of_product.setAttribute('product_id', product.id)
        let product_id = product.id;
        document.querySelector('.parent_of_all_cards').appendChild(card_of_product);
        card_of_product.classList.add('col-6', 'col-md-3', 'mt-4')
        let product_div = document.createElement('div');
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
            // addOnClick(event, this);
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
    if (localStorage.getItem('token')) {
        $.ajax({
            url: `${domain}/api/own-products/`,
            method: 'GET',
            headers: {
                'Authorization': `Token ${localStorage.getItem('token')}`,
            },
            success: function (response) {
                
                for(products of response){
                addingProducts(products);
                var card = document.getElementsByClassName('card');
                for (var i = 0; i < card.length; i++) {
                   card[i].addEventListener('click', function () {

                        let selected = document.querySelector('select[name ="category"]');
                    // let option = document.querySelector('.category_option');
                    // option.innerText = products.category.title;
                    // selected.selected = true;
                    
                        let selected_category_id= products.category.id;
                        console.log(selected_category_id);
                        let selected_option = selected.querySelector(`option[value='${selected_category_id}'`);
                        selected_option.selected = true;
                        
                       
                        var img = this.querySelector('.cards_imgs').getAttribute('src');
                        var product_name = this.querySelector('.name_span').innerHTML;
                        var product_unit = this.querySelector('.unit_count_span').innerHTML;
                        var product_price = this.querySelector('.fix-price').innerHTML;
                        // var category_type = document.querySelector('.')

                        document.querySelector('.right-bar').classList.toggle('show2');
                    
                        document.getElementById('card_products').innerHTML = `<img style="width:60px; height:60px; border:1px solid gray; padding: 10px;margin-top:10px;" src="${img}">`
                        document.getElementById('name-input').value = `${product_name}`
                        document.getElementById('unit-input').value = `${product_unit}`
                        document.getElementById('price-input').value = `${product_price}`
            
                    });
                }
            }
        }
        })
    }
    document.querySelector('.picture-buttons-logout').addEventListener('click',function(event){
        event.preventDefault();
        localStorage.removeItem("token");
        window.location='pick.html';
    })
});
// Add the coffee to local storage with key "coffee"
const url = 'https://masai-mock-api.herokuapp.com/coffee/menu' 


async function getapi() {
    try {
        let res = await fetch(url)

        let data = await res.json();
        
        console.log(data.menu);
        appendData(data.menu.data)
    }catch (err){
        console.log(err);
    }
}

getapi()

let cart = JSON.parse(localStorage.getItem('coffee')) || [];
let coffee_count = document.querySelector('#coffee_count');
coffee_count.innerText = cart.length;

function appendData(product) {
    product.map((el,index,arr) => {
        let div = document.createElement('div');

        let title = document.createElement('p');
        title.innerText = el.title;

        let image = document.createElement('img')
        image.src = el.image;

        let price = document.createElement('p')
        price.innerText = `Price- ${el.price}`;
        
        let div1 = document.createElement('div');
        div1.append(title,price)
        div1.setAttribute('id' ,'div1')

        let button = document.createElement('button');
        button.innerText = 'Add to Basket';
        button.setAttribute('id', 'add_to_bucket');
        button.addEventListener('click', function(){
            cart.push(el);
            coffee_count.innerText = cart.length;
            localStorage.setItem('coffee', JSON.stringify(cart));
        })

        div.append(image,div1,button);
        document.querySelector('#menu').append(div);
    })
}

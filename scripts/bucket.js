// On clicking remove button the item should be removed from DOM as well as localstorage.

let data = JSON.parse(localStorage.getItem('coffee')) || [];
// console.log(coffee_product);
let total = document.getElementById('total-count')
total.innerText = showTotal()
append(data)

function append(arr) {

    arr.map((el,index,array) => {

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

        let btn = document.createElement('button');
        btn.innerText = 'Remove';
        btn.addEventListener('click', () => {
            myfun(index)
        })

        div.append(image,div1,btn);
        document.getElementById('bucket').append(div);
    })

}

append()

function myfun(index){
    data.splice(index,1);
    localStorage.setItem('coffee',JSON.stringify(data));
    append(data);
    total.innerText = showTotal();
    
}


function showTotal() {
    let tt = data.reduce((acc,el,index,array) =>{
        return acc + el.price
    },0)
    return tt;
}

function goCheckout() {
    window.location.href = 'checkout.html';
}
function changeImg (el) {
     let main = document.getElementById('inner-no-2');
     let imgMain = document.createElement('img');
     imgMain.src = el.src;
     main.innerHTML = null;
     main.append(imgMain);
     el.style.border = '1px solid black';
}

var cart = JSON.parse(localStorage.getItem('cart'));
if (cart == null) {cart = [];}
else {cart = JSON.parse(localStorage.getItem('cart'));};
var totalCount = document.getElementById('cart-count');
totalCount.innerText = cart.length;


function addToCart (i) {
     var totalCount = document.getElementById('cart-count');
     var alredy = totalCount.innerText * 1;
     let inputCount = document.getElementById('count').innerText * 1;
     totalCount.innerText = cart.length;
     cart.push(products[i]);
     localStorage.setItem('cart', JSON.stringify(cart));
}

setInterval(function() {
     let visiterscount = document.getElementById('visiters');
     visiterscount.innerText = Math.floor(Math.random() * 50) + 100;
}, 2000);

function plus (n) {
     let count = document.getElementById('count');
     let currentcount = count.innerText * 1 + 1;
     count.innerText = currentcount;
}
function minus (n) {
     let count = document.getElementById('count');
     let currentcount = count.innerText * 1;
     if (currentcount <= 1) return;
     else {
          currentcount--;
          count.innerText = currentcount;
     }
} var previous;
function replaceSize (number) {
     var notavaliable = ['1', '7']; if (previous) {
          previous.style.background = 'white';
          previous.style.color = 'black';
     }
     if (notavaliable.includes(number)) {
          let buyitnow = document.getElementById('buy-it-now');
          buyitnow.style.opacity = '0'; return;
     }

     let toDisplay = document.getElementById('size-tshirt');
     let size = document.getElementById(`st-${number}`).innerHTML;
     document.getElementById(`st-${number}`).style.background = 'black';
     document.getElementById(`st-${number}`).style.color = 'white';
     previous = document.getElementById(`st-${number}`);
     toDisplay.textContent = size;
     let buyitnow = document.getElementById('buy-it-now');
     buyitnow.style.opacity = '1';
}

var coll = document.getElementsByClassName("collapsible");
var i;
for (i = 0; i < coll.length; i++) {
     coll[i].addEventListener("click", function() {
          this.classList.toggle("active");
          var content = this.nextElementSibling;
          var plus = content.nextElementSibling;
          if (content.style.display === "block") {
               content.style.display = "none";
               plus.innerText = "+";
          } else {
               content.style.display = "block";
               plus.innerText = "";
          }
     });
}

var products = [
     {
          img: ' https://cdn.shopify.com/s/files/1/0553/4793/7465/products/BCCI-Round-Neck-Tee-Grey-01_360x.jpg?v=1624366706',
          name: 'Team india Jersey fan edition',
          imgBack: 'https://cdn.shopify.com/s/files/1/0553/4793/7465/products/BCCI-Round-Neck-Tee-Grey-Back-01_360x.jpg?v=1624366706'
          , price: '1,000.00'
     }, {
          name: 'stadium jersey',
          img: 'https://cdn.shopify.com/s/files/1/0553/4793/7465/products/BCCI-Stadium-Jersey_360x.jpg?v=1623350446'
          ,
          imgBack: 'https://cdn.shopify.com/s/files/1/0553/4793/7465/products/Back_1803b31e-06d5-43e4-ac6e-bbe4c9649fc2_720x.jpg?v=1623350369'
          , price: '1,599.00'
     }, {
          name: 'BCCI training jersey',
          img: 'https://cdn.shopify.com/s/files/1/0553/4793/7465/products/BCCI-Training-Jersey-Sleeveless-Old_360x.jpg?v=1624639454'
          ,
          imgBack: 'https://cdn.shopify.com/s/files/1/0553/4793/7465/products/IMG_3463_540x.jpg?v=1624639455'
          , price: '999.00'
     }, {
          name: 'Cheers Team India-white',
          img: 'https://cdn.shopify.com/s/files/1/0553/4793/7465/products/Front_00fd79d7-5df9-45ac-b4de-8d8e59615ef4_360x.jpg?v=1623776642'
          ,
          imgBack: 'https://cdn.shopify.com/s/files/1/0553/4793/7465/products/Back_944d8972-ea41-4e6b-ab6a-00154bd0b4b3_540x.jpg?v=1623776642'
          , price: '999.00'
     }, {
          name: 'white jersy One Day',
          img: 'https://cdn.shopify.com/s/files/1/0553/4793/7465/products/Front_6a7a4b31-f502-447d-8547-a369ed145449_360x.jpg?v=1623350531'
          ,
          imgBack: 'https://cdn.shopify.com/s/files/1/0553/4793/7465/products/Back_cd8ecbf1-177b-4f86-b995-287c27875aec_540x.jpg?v=1623350531'
          , price: '1,599.00'
     }
];

for (var i = 0; i < products.length; i++) {
     appendProduct(products[i], i);

}


function hover (id, toggle) {
     let theimg = document.getElementById(`${id}`);
     theimg.src = toggle.imgBack;
} function unhover (el, id) {console.log('unhover');}



function appendProduct (el, i) {
     var outerDiv = document.getElementById('similar-products-div');
     let productDiv = document.createElement('div');
     productDiv.setAttribute('class', 'product-div');
     productDiv.addEventListener('mouseenter', function() {
          let thisimg = document.getElementById(`img-no-${i}`);
          thisimg.src = el.imgBack;
     });
     productDiv.addEventListener('mouseleave', function() {
          let thisimg2 = document.getElementById(`img-no-${i}`);
          thisimg2.src = el.img;
     });
     productDiv.setAttribute('id', `product-no-${i}`);

     let img = document.createElement('img');
     img.setAttribute('id', `img-no-${i}`);
     img.src = el.img; let iconDiv = document.createElement('div');
     iconDiv.setAttribute('class', 'heart');
     iconDiv.innerHTML = `<i onclick='addToCart(${i})' class="fa fa-heart fa-1x"></i>`;

     let namePara = document.createElement('p');
     namePara.innerHTML = el.name;

     let price = document.createElement('h4');
     price.setAttribute('class', 'product-price');
     price.innerHTML = el.price;

     let addCartButton = document.createElement('button');
     addCartButton.setAttribute('class', 'shop-now');
     addCartButton.textContent = 'SHOP NOW';
     addCartButton.setAttribute('class', 'shop-now');

     productDiv.append(img, iconDiv, namePara, price, addCartButton);

     outerDiv.append(productDiv);
} var flag = false;
function showmenu () {
     let menu = document.getElementById('menu-onclick');
     let navdiv = document.getElementById('navigation-div');
     menu.style.transitionDuration = '2000ms';
     if (!flag) {
          menu.style.display = 'flex'; flag = true;
          navdiv.style.maxHeight = '100%';
     }
     else {
          menu.style.display = 'none'; flag = false;
          navdiv.style.maxHeight = '100px';
     }
} var coll = document.getElementsByClassName("collapsible");
var i;

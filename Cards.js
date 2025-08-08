var mycards=[{
    image: "./b1.png",
    price: "1200/-",
    brand: "Puma"
},
{
    image: "./b2.jpg",
    price: "1800/-",
    brand: "Bata"
},
{
    image: "./b3.jpg",
    price: "400/-",
    brand: "RareRabbit"
},
{
    image: "./b4.jpg",
    price: "600/-",
    brand: "Wrogn"
},
{
    image: "./b5.png",
    price: "900/-",
    brand: "Priority"
},
{
    image: "./b6.png",
    price: "1000/-",
    brand: "Hp"
},
{
    image: "./b7.png",
    price: "1400/-",
    brand: "Dell"
},
{
    image: "./b8.png",
    price: "2000/-",
    brand: "Lenovo"
},
{
    image: "./b9.png",
    price: "500/-",
    brand: "Asus"
},
{
    image: "./b10.png",
    price: "1500/-",
    brand: "Apple"
}]
var cards=mycards.map(ele =>{
    return (
        `  <div class="card">
                <div class="image-section">
                    <img src="${ele.image}">
                </div>
                <div class="info-section">
                    <div class="price">Price: ${ele.price}</div>
                    <div class="brand">Brand: ${ele.brand}</div>
                </div>
            </div>`
    )
})

var products=document.getElementsByClassName("card-parent")[0]
products.innerHTML=cards;

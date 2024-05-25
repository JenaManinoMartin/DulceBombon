let productSlider = ``

for (let item of products) {
    productSlider = productSlider + `
    
    <div class="swiper-slide">
         <img src="${item.image}" alt="">
         <div class="card-description">
             <div class="card-title">
                <h4>${item.name.toUpperCase()}</h4>
             </div>
             <div class="card-price">
                <p >${item.cost}</p>
             </div>
             <div class="card-link">
                 <a href="../templates/products-detail.htm">Añadir al carrito</a>
             </div>
         </div>
    </div>
   
    `
}

document.querySelector(".swiper-wrapper").innerHTML = productSlider

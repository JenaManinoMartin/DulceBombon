let productSlider = ``

for(let item of products){
    productSlider = productSlider + `
    
    <article class="card-item">
        <a class="card-item__link" href="">
            <picture class="card-item__cover">
                 <img src="${item.image}" alt="imagen de dulce bombon">
            </picture>
            <div class="card-item__content">
                <h4 class="card-item__name">${item.name.toUpperCase()}</h4>
                <p class="card-item__price">${item.cost}</p>
                <p>Añadir al carrito</p>
            </div>
        </a>
    </article>
   
    `
} 
 
document.querySelector(".slider__item").innerHTML = productSlider

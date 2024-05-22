
let categoryProduct = ``

for(let item of categoryPrime){
    categoryProduct = categoryProduct + `   

    <article class="card__item">
        <a class="card__item__link" href="../templates/category-detail.html">
            <picture class="card-item__cover">
              <span class="card-item__span">ver mas</span>
                <img src="${item.image}" alt="Figura categoria de Dulce Bombón ">
           
            </picture>
        </a>
        <div class="card-item__content">
          <p class="card-item__title">${item.name.toUpperCase()}</p> 
        </div>
     </article>

       
   
    `
} 
 
document.querySelector(".collection__item").innerHTML = categoryProduct

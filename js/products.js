let categoryProduct = ``

for(let item of categoryPrime){
    categoryProduct = categoryProduct + `   

            <article class="card__item">  
                <a class="card-item__link" href="category-detail.html">
                    <span class="card-item__span" >ver mas</span>
                   <picture class="card-item__cover">
                   <div class="img">
                      <img src="${item.image}" alt="Figura categoria de producto Dulce Bombón de Macarons">
                      </div>                      
                   </picture>
                   <div class="card-item__content">
                      <p class="card-item__title">${item.name.toUpperCase()}</p>
                   </div>
                </a>
            </article>
       
   
    `
} 
 
document.querySelector(".collection__item").innerHTML = categoryProduct


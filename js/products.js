let categoryProduct = ``

for(let item of categoryPrime){
    categoryProduct = categoryProduct + `
    
            <article class="card__item">  
            <a class="card-item__link" href="category-detail.html">
                 <picture class="card-item__cover">
                     
                        <span class="card-item__span" >ver mas</span>
                     
                       <img src="${item.image}" alt="Figura categoria de producto Dulce Bombón de Macarons">
                 </picture>
            </a>     
                <div class="card-item__content">
                     <p class="card-item__title">${item.name.toUpperCase()}</p>
                </div>
            </article>
       
   
    `
} 
 
document.querySelector(".collection__item").innerHTML = categoryProduct


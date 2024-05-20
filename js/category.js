let categoryProduct = ``

for(let item of categoryPrime){
    categoryProduct = categoryProduct + `
    
            <article class="collection__content">    
                <picture class="collection__cover">
                    <img src="${item.image}" alt="Figura categoria de producto Dulce Bombón de Macarons">
                </picture>
                <p class="collection__title"${item.name.toUpperCase()}</p>
                <a class="collection__link" href="category-detail.html">ver mas</a>
            </article>
       
   
    `
} 
 
document.querySelector(".collection__item").innerHTML = categoryProduct


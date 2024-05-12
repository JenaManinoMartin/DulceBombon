let miCategory = ``

for (let categoria of category) {
    miCategory = miCategory + `
    <div class="tarjeta">
                <a href="product-detail.html"><img src=${categoria.image} alt="categoria">
                <div class="textocard">
                    <p>${categoria.name.toUpperCase()}</p>
                </div>
                </a>
            </div>
    `
}

document.querySelector(".categories").innerHTML = miCategory
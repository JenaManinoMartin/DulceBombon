let miHeader = `
<div id="container-header">
            <div id="logo">
                <a href="/">
                    <p>DULCE</p><span>
                        BOMBÓN</span>
                </a>
            </div>
            <input type="checkbox" id="menu-check">
            <label id="menu" for="menu-check">
                <span id="menu-open"><i class="fa-solid fa-bars"></i></span>
                <span id="menu-close"><i class="fa-solid fa-xmark"></i></span>
            </label>
            <nav>
                <a href="/">INICIO</a>
                <a href="../templates/about-us.html">QUIENES SOMOS</a>
                <a href="../templates/products.html">PRODUCTOS</a>
                <a href="../templates/contact.html">CONTACTO</a>
                <a href="../templates/shopping-cart"><i class="fa-solid fa-bag-shopping"></i></a>
            </nav>
        </div>
        <hr>
`
document.querySelector("header").innerHTML = miHeader
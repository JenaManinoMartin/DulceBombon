let currentSection = 'categorias';
const data = {
    categorias: [],
    productos: [],
    sabores: [],
    clientes: [],
    pedidos: []
};

function showSection(sectionId) {
    currentSection = sectionId;
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => section.classList.remove('active'));
    document.getElementById(sectionId).classList.add('active');
    renderList();
    updateFormOptions();
}

function renderList() {
    const list = document.getElementById(`${currentSection}-list`);
    list.innerHTML = `
        <tr>
            ${getTableHeaders()}
        </tr>
    `;
    data[currentSection].forEach((item, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            ${getTableCells(item)}
            <td class="actions">
                <button onclick="editItem(${index})"><i class="fas fa-edit"></i></button>
                <button onclick="deleteItem(${index})"><i class="fas fa-trash"></i></button>
            </td>
        `;
        list.appendChild(row);
    });
}



function updateFormOptions() {
    if (currentSection === 'productos') {
        const categoriaSelect = document.getElementById('producto-categoria');
        const saboresSelect = document.getElementById('producto-sabores');
        
        categoriaSelect.innerHTML = '<option value="">Seleccione una categoría</option>';
        data.categorias.forEach(categoria => {
            categoriaSelect.innerHTML += `<option value="${categoria.nombre}">${categoria.nombre}</option>`;
        });

        saboresSelect.innerHTML = '';
        data.sabores.forEach(sabor => {
            saboresSelect.innerHTML += `<option value="${sabor.nombre}">${sabor.nombre}</option>`;
        });
    } else if (currentSection === 'pedidos') {
        const clienteSelect = document.getElementById('pedido-cliente');
        const productoSelect = document.getElementById('pedido-producto');

        clienteSelect.innerHTML = '<option value="">Seleccione un cliente</option>';
        data.clientes.forEach(cliente => {
            clienteSelect.innerHTML += `<option value="${cliente.id}">${cliente.nombre}</option>`;
        });

        productoSelect.innerHTML = '<option value="">Seleccione un producto</option>';
        data.productos.forEach(producto => {
            productoSelect.innerHTML += `<option value="${producto.nombre}">${producto.nombre}</option>`;
        });
    }
}

function getTableHeaders() {
    switch(currentSection) {
        case 'categorias':
            return '<th>Nombre</th><th></th>';
        case 'productos':
            return '<th>Nombre</th><th>Precio</th><th>Categoría</th><th>Sabores</th><th></th>';
        case 'sabores':
            return '<th>Nombre</th><th></th>';
        case 'clientes':
            return '<th>ID</th><th>Nombre</th><th>DNI</th><th>Teléfono</th><th>Email</th><th>Red Social</th><th>Ubicación</th><th>Género</th><th>Imagen</th><th></th>';
        case 'pedidos':
            return '<th>Número</th><th>Cliente</th><th>Productos</th><th></th>';
    }
}

function getTableCells(item) {
    switch(currentSection) {
        case 'categorias':
            return `<td>${item.nombre}</td>`;
        case 'productos':
            return `<td>${item.nombre}</td><td>$${item.precio}</td><td>${item.categoria}</td><td>${item.sabores.join(', ')}</td>`;
        case 'sabores':
            return `<td>${item.nombre}</td>`;
        case 'clientes':
            return `<td>${item.id}</td><td>${item.nombre}</td><td>${item.dni}</td><td>${item.telefono}</td><td>${item.email}</td><td>${item.redSocial}</td><td>${item.ubicacion}</td><td>${item.genero}</td><td>${item.imagen}</td>`;
        case 'pedidos':
            return `<td>${item.numero}</td><td>${item.cliente}</td><td>${item.productos.map(p => `${p.nombre} (${p.cantidad})`).join(', ')}</td>`;
    }
}

function addItem(e) {
    e.preventDefault();
    const form = e.target;
    let newItem;
    switch(currentSection) {
        case 'categorias':
            newItem = {
                nombre: form.querySelector('#categoria-nombre').value
            };
            break;
        case 'productos':
            newItem = {
                nombre: form.querySelector('#producto-nombre').value,
                precio: parseFloat(form.querySelector('#producto-precio').value),
                categoria: form.querySelector('#producto-categoria').value,
                sabores: Array.from(form.querySelector('#producto-sabores').selectedOptions).map(option => option.value)
            };
            break;
        case 'sabores':
            newItem = {
                nombre: form.querySelector('#sabor-nombre').value
            };
            break;
        case 'clientes':
            newItem = {
                id: data.clientes.length + 1,
                nombre: form.querySelector('#cliente-nombre').value,
                dni: form.querySelector('#cliente-dni').value,
                telefono: form.querySelector('#cliente-telefono').value,
                email: form.querySelector('#cliente-email').value,
                redSocial: form.querySelector('#cliente-red-social').value,
                ubicacion: form.querySelector('#cliente-ubicacion').value,
                genero: form.querySelector('#cliente-genero').value,
                imagen: form.querySelector('#cliente-imagen').files[0] ? form.querySelector('#cliente-imagen').files[0].name : 'Sin imagen'
            };
            break;
        case 'pedidos':
            newItem = {
                numero: data.pedidos.length + 1,
                cliente: form.querySelector('#pedido-cliente').value,
                productos: [{
                    nombre: form.querySelector('#pedido-producto').value,
                    cantidad: parseInt(form.querySelector('#pedido-cantidad').value)
                }]
            };
            break;
    }
    data[currentSection].push(newItem);
    renderList();
    form.reset();
    updateFormOptions();
}

function editItem(index) {
    const item = data[currentSection][index];
    const form = document.getElementById(`${currentSection.slice(0, -1)}-form`);
    
    switch(currentSection) {
        case 'categorias':
            form.querySelector('#categoria-nombre').value = item.nombre;
            break;
        case 'productos':
            form.querySelector('#producto-nombre').value = item.nombre;
            form.querySelector('#producto-precio').value = item.precio;
            form.querySelector('#producto-categoria').value = item.categoria;
            Array.from(form.querySelector('#producto-sabores').options).forEach(option => {
                option.selected = item.sabores.includes(option.value);
            });
            break;
        case 'sabores':
            form.querySelector('#sabor-nombre').value = item.nombre;
            break;
        case 'clientes':
            form.querySelector('#cliente-nombre').value = item.nombre;
            form.querySelector('#cliente-dni').value = item.dni;
            form.querySelector('#cliente-telefono').value = item.telefono;
            form.querySelector('#cliente-email').value = item.email;
            form.querySelector('#cliente-red-social').value = item.redSocial;
            form.querySelector('#cliente-ubicacion').value = item.ubicacion;
            form.querySelector('#cliente-genero').value = item.genero;
            // No podemos establecer el valor del campo de archivo por razones de seguridad
            break;
        case 'pedidos':
            form.querySelector('#pedido-cliente').value = item.cliente;
            form.querySelector('#pedido-producto').value = item.productos[0].nombre;
            form.querySelector('#pedido-cantidad').value = item.productos[0].cantidad;
            break;
    }

    form.onsubmit = (e) => {
        e.preventDefault();
        data[currentSection][index] = addItem(e);
        renderList();
        form.reset();
        form.onsubmit = addItem;
    };
}



function deleteItem(index) {
    data[currentSection].splice(index, 1);
    renderList();
}

document.querySelectorAll('form').forEach(form => form.onsubmit = addItem);

// Datos de ejemplo
data.categorias.push({nombre: 'Tartas'});
data.productos.push({nombre: 'Tarta de chocolate', precio: 25.99, categoria: 'Tartas', sabores: ['Chocolate']});
data.sabores.push({nombre: 'Chocolate'});
data.clientes.push({id: 1, nombre: 'Juan Pérez', email: 'juan@example.com'});
data.pedidos.push({numero: 1, cliente: 'Juan Pérez', productos: [{nombre: 'Tarta de chocolate', cantidad: 1}]});
data.clientes.push({
    id: 1, 
    nombre: 'Juan Pérez', 
    dni: '12345678A', 
    telefono: '123456789', 
    email: 'juan@example.com', 
    redSocial: 'facebook', 
    ubicacion: 'Madrid', 
    genero: 'masculino', 
    imagen: 'Sin imagen'
});
// Mostrar la sección de categorías por defecto
showSection('categorias');
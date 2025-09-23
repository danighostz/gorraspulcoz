// Datos de productos (simulados)
const products = [
    {
        id: 1,
        name: "Gorra New Era Flag 9FORTY Ajustable Azul",
        category: "hombre",
        price: 599,
        originalPrice: 799,
        description: "Gorra ajustable New Era con diseño de bandera en color azul. Ideal para uso casual.",
        images: [
            "img/Gorra New Era Flag 9FORTY Ajustable Azul/1.png",
            "img/Gorra New Era Flag 9FORTY Ajustable Azul/2.png",
            "img/Gorra New Era Flag 9FORTY Ajustable Azul/3.png",
            "img/Gorra New Era Flag 9FORTY Ajustable Azul/4.png"
        ],
        inStock: true,
        sizes: ["S", "M", "L", "XL"]
    },
    {
        id: 2,
        name: "Gorra New Era Flag 9FORTY Ajustable Beige",
        category: "mujer",
        price: 549,
        originalPrice: 699,
        description: "Gorra ajustable New Era con diseño de bandera en color beige. Estilo moderno y cómodo.",
        images: [
            "img/Gorra New Era Flag 9FORTY Ajustable Beige/1.png",
            "img/Gorra New Era Flag 9FORTY Ajustable Beige/2.png",
            "img/Gorra New Era Flag 9FORTY Ajustable Beige/3.png",
            "img/Gorra New Era Flag 9FORTY Ajustable Beige/4.png"
        ],
        inStock: true,
        sizes: ["S", "M", "L"]
    },
    {
        id: 3,
        name: "Gorra Tonal 9FORTY Ajustable Negra New Era",
        category: "unisex",
        price: 649,
        originalPrice: 849,
        description: "Gorra tonal negra de la marca New Era. Diseño clásico y atemporal.",
        images: [
            "img/Gorra Tonal 9FORTY Ajustable Negra New Era/1.png",
            "img/Gorra Tonal 9FORTY Ajustable Negra New Era/2.png",
            "img/Gorra Tonal 9FORTY Ajustable Negra New Era/3.png",
            "img/Gorra Tonal 9FORTY Ajustable Negra New Era/4.png"
        ],
        inStock: true,
        sizes: ["S", "M", "L", "XL"]
    },
    {
        id: 4,
        name: "Gorra New Era Performance 9FIFTY Ajustable Azul",
        category: "hombre",
        price: 799,
        originalPrice: 999,
        description: "Gorra de performance New Era en color azul. Perfecta para actividades deportivas.",
        images: [
            "img/Gorra New Era Performance 9FIFTY Ajustable Azul/1.webp",
            "img/Gorra New Era Performance 9FIFTY Ajustable Azul/2.webp",
            "img/Gorra New Era Performance 9FIFTY Ajustable Azul/3.webp",
            "img/Gorra New Era Performance 9FIFTY Ajustable Azul/4.webp"
        ],
        inStock: true,
        sizes: ["M", "L", "XL"]
    },
    {
        id: 5,
        name: "Gorra New Era Flower Embroidery 9FORTY Ajustable Negra",
        category: "mujer",
        price: 699,
        originalPrice: 899,
        description: "Gorra negra con bordado de flores de New Era. Diseño femenino y elegante.",
        images: [
            "img/Gorra New Era Flower Embroidery 9FORTY Ajustable Negra/1.png",
            "img/Gorra New Era Flower Embroidery 9FORTY Ajustable Negra/2.png",
            "img/Gorra New Era Flower Embroidery 9FORTY Ajustable Negra/3.png",
            "img/Gorra New Era Flower Embroidery 9FORTY Ajustable Negra/4.png"
        ],
        inStock: true,
        sizes: ["S", "M", "L"]
    },
    {
        id: 6,
        name: "Gorra Tom & Jerry 85th Anniversary 9FIFTY Ajustable Azul",
        category: "unisex",
        price: 749,
        originalPrice: 949,
        description: "Gorra conmemorativa del 85 aniversario de Tom & Jerry. Edición especial limitada.",
        images: [
            "img/Gorra Tom & Jerry 85th Anniversary 9FIFTY Ajustable Azul/1.webp",
            "img/Gorra Tom & Jerry 85th Anniversary 9FIFTY Ajustable Azul/2.webp",
            "img/Gorra Tom & Jerry 85th Anniversary 9FIFTY Ajustable Azul/3.webp",
            "img/Gorra Tom & Jerry 85th Anniversary 9FIFTY Ajustable Azul/4.webp"
        ],
        inStock: true,
        sizes: ["S", "M", "L", "XL"]
    },
    {
        id: 7,
        name: "Gorra New Era Basic 9FORTY Ajustable Blanca",
        category: "hombre",
        price: 499,
        originalPrice: 649,
        description: "Gorra básica blanca de New Era. Ideal para combinar con cualquier outfit.",
        images: [
            "img/Gorra New Era Basic 9FORTY Ajustable Blanca/1.png",
            "img/Gorra New Era Basic 9FORTY Ajustable Blanca/2.png",
            "img/Gorra New Era Basic 9FORTY Ajustable Blanca/3.png",
            "img/Gorra New Era Basic 9FORTY Ajustable Blanca/4.png"
        ],
        inStock: true,
        sizes: ["S", "M", "L", "XL"]
    },
    {
        id: 8,
        name: "Gorra New Era City Script 9FORTY Ajustable Rosado",
        category: "mujer",
        price: 599,
        originalPrice: 749,
        description: "Gorra rosada con script de ciudad de New Era. Diseño urbano y moderno.",
        images: [
            "img/Gorra New Era City Script 9FORTY Ajustable Rosado New Era/1.webp",
            "img/Gorra New Era City Script 9FORTY Ajustable Rosado New Era/2.webp",
            "img/Gorra New Era City Script 9FORTY Ajustable Rosado New Era/3.webp",
            "img/Gorra New Era City Script 9FORTY Ajustable Rosado New Era/4.webp"
        ],
        inStock: true,
        sizes: ["S", "M", "L"]
    }
];

// Estado de la aplicación
let cart = [];
let currentCategory = 'all';
let currentProduct = null;

// Elementos del DOM
const productsContainer = document.getElementById('products-container');
const productModal = document.getElementById('product-modal');
const cartModal = document.getElementById('cart-modal');
const loginModal = document.getElementById('login-modal');
const cartCount = document.querySelector('.cart-count');
const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');
const categoryLinks = document.querySelectorAll('.category-link');

// Inicialización
document.addEventListener('DOMContentLoaded', function() {
    displayProducts(products);
    initEventListeners();
    initBannerSlider();
    initContactForm();
    initFAQ();
});

// Inicializar event listeners
function initEventListeners() {
    // Filtrado por categoría
    categoryLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            currentCategory = this.getAttribute('data-category');
            
            // Actualizar clase activa
            categoryLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
            
            // Filtrar productos
            const filteredProducts = currentCategory === 'all' 
                ? products 
                : products.filter(product => product.category === currentCategory);
            
            displayProducts(filteredProducts);
        });
    });
    
    // Búsqueda
    searchForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const searchTerm = searchInput.value.toLowerCase();
        
        if (searchTerm.trim() === '') {
            displayProducts(products);
            return;
        }
        
        const filteredProducts = products.filter(product => 
            product.name.toLowerCase().includes(searchTerm) ||
            product.description.toLowerCase().includes(searchTerm)
        );
        
        displayProducts(filteredProducts);
    });
    
    // Enlace "Acerca de Nosotros"
    document.getElementById('about-link').addEventListener('click', function(e) {
        e.preventDefault();
        window.location.href = 'acercade.html';
    });
    
    // Enlace "Contáctanos"
    document.getElementById('contact-link').addEventListener('click', function(e) {
        e.preventDefault();
        window.location.href = 'contactanos.html';
    });
    
    // Modal de producto
    document.querySelector('.close-modal').addEventListener('click', closeModals);
    document.getElementById('modal-add-to-cart').addEventListener('click', addToCartFromModal);
    
    // Modal de carrito
    document.querySelectorAll('.close-modal')[1].addEventListener('click', closeModals);
    document.querySelector('.continue-shopping').addEventListener('click', closeModals);
    document.querySelector('.checkout-btn').addEventListener('click', checkout);
    
    // Modal de login
    document.querySelectorAll('.close-modal')[2].addEventListener('click', closeModals);
    document.getElementById('user-profile').addEventListener('click', function(e) {
        e.preventDefault();
        loginModal.style.display = 'block';
    });
    
    document.getElementById('cart-icon').addEventListener('click', function(e) {
        e.preventDefault();
        displayCart();
        cartModal.style.display = 'block';
    });
    
    // Login/Registro
    document.getElementById('login-form').addEventListener('submit', handleLogin);
    document.getElementById('show-register').addEventListener('click', function(e) {
        e.preventDefault();
        document.getElementById('login-form').style.display = 'none';
        document.getElementById('register-form').style.display = 'block';
    });
    
    document.getElementById('register-form').addEventListener('submit', handleRegister);
    
    // Cerrar modales al hacer clic fuera
    window.addEventListener('click', function(e) {
        if (e.target.classList.contains('modal')) {
            closeModals();
        }
    });
}

// Función para el formulario de contacto
function initContactForm() {
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simulación de envío del formulario
            const formData = new FormData(this);
            const name = formData.get('name');
            const email = formData.get('email');
            
            alert(`¡Gracias ${name}! Hemos recibido tu mensaje. Te contactaremos pronto a ${email}`);
            this.reset();
        });
    }
}

// Función para las preguntas frecuentes
function initFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
    if (faqItems.length > 0) {
        faqItems.forEach(item => {
            const question = item.querySelector('h3');
            question.addEventListener('click', function() {
                item.classList.toggle('active');
            });
        });
    }
}

// Inicializar slider del banner
function initBannerSlider() {
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    let currentSlide = 0;
    
    function showSlide(n) {
        slides.forEach(slide => slide.classList.remove('active'));
        currentSlide = (n + slides.length) % slides.length;
        slides[currentSlide].classList.add('active');
    }
    
    prevBtn.addEventListener('click', () => showSlide(currentSlide - 1));
    nextBtn.addEventListener('click', () => showSlide(currentSlide + 1));
    
    // Cambio automático cada 5 segundos
    setInterval(() => showSlide(currentSlide + 1), 5000);
}

// Mostrar productos en la página
function displayProducts(productsToShow) {
    productsContainer.innerHTML = '';
    
    if (productsToShow.length === 0) {
        productsContainer.innerHTML = '<p class="no-products">No se encontraron productos.</p>';
        return;
    }
    
    productsToShow.forEach(product => {
        const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);
        
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <div class="product-image">
                <img src="${product.images[0]}" alt="${product.name}" onerror="handleImageError(this)">
                ${discount > 0 ? `<div class="product-badge">-${discount}%</div>` : ''}
            </div>
            <div class="product-info">
                <h3>${product.name}</h3>
                <p class="product-category">${getCategoryName(product.category)}</p>
                <div class="price-section">
                    <span class="price">$${product.price} MXN</span>
                    ${product.originalPrice > product.price ? 
                        `<span class="original-price">$${product.originalPrice} MXN</span>` : ''}
                    ${discount > 0 ? `<span class="discount">-${discount}%</span>` : ''}
                </div>
                <div class="product-actions">
                    <button class="view-details-btn" data-id="${product.id}">Ver Detalles</button>
                    <button class="add-to-cart-btn" data-id="${product.id}">Añadir al Carrito</button>
                </div>
            </div>
        `;
        
        productsContainer.appendChild(productCard);
    });
    
    // Agregar event listeners a los botones de los productos
    document.querySelectorAll('.view-details-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const productId = parseInt(this.getAttribute('data-id'));
            showProductDetails(productId);
        });
    });
    
    document.querySelectorAll('.add-to-cart-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const productId = parseInt(this.getAttribute('data-id'));
            addToCart(productId, 1, 'M');
        });
    });
}

// Obtener nombre de categoría para mostrar
function getCategoryName(category) {
    const categories = {
        'hombre': 'Hombre',
        'mujer': 'Mujer',
        'unisex': 'Unisex'
    };
    
    return categories[category] || category;
}

// Mostrar detalles del producto en modal
function showProductDetails(productId) {
    currentProduct = products.find(p => p.id === productId);
    
    if (!currentProduct) return;
    
    const discount = Math.round(((currentProduct.originalPrice - currentProduct.price) / currentProduct.originalPrice) * 100);
    
    // Actualizar contenido del modal
    document.getElementById('modal-product-name').textContent = currentProduct.name;
    document.getElementById('modal-product-category').textContent = getCategoryName(currentProduct.category);
    document.getElementById('modal-product-description').textContent = currentProduct.description;
    document.getElementById('modal-product-price').textContent = `$${currentProduct.price} MXN`;
    
    if (currentProduct.originalPrice > currentProduct.price) {
        document.getElementById('modal-original-price').textContent = `$${currentProduct.originalPrice} MXN`;
        document.getElementById('modal-product-discount').textContent = `-${discount}%`;
    } else {
        document.getElementById('modal-original-price').textContent = '';
        document.getElementById('modal-product-discount').textContent = '';
    }
    
    // Actualizar imágenes
    document.getElementById('modal-main-image').src = currentProduct.images[0];
    document.getElementById('modal-main-image').alt = currentProduct.name;
    
    const thumbnailContainer = document.getElementById('thumbnail-container');
    thumbnailContainer.innerHTML = '';
    
    currentProduct.images.forEach((image, index) => {
        const thumbnail = document.createElement('div');
        thumbnail.className = `thumbnail ${index === 0 ? 'active' : ''}`;
        thumbnail.innerHTML = `<img src="${image}" alt="${currentProduct.name} - Vista ${index + 1}" onerror="handleImageError(this)">`;
        
        thumbnail.addEventListener('click', function() {
            document.querySelectorAll('.thumbnail').forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            document.getElementById('modal-main-image').src = image;
        });
        
        thumbnailContainer.appendChild(thumbnail);
    });
    
    // Actualizar selector de tallas dinámicamente
    const sizeSelect = document.getElementById('size-select');
    sizeSelect.innerHTML = '';
    
    if (currentProduct.sizes) {
        currentProduct.sizes.forEach(size => {
            const option = document.createElement('option');
            option.value = size;
            option.textContent = size;
            sizeSelect.appendChild(option);
        });
        
        // Establecer talla M como predeterminada si está disponible
        if (currentProduct.sizes.includes('M')) {
            sizeSelect.value = 'M';
        }
    } else {
        // Si no hay tallas definidas, usar las predeterminadas
        const defaultSizes = ['S', 'M', 'L', 'XL'];
        defaultSizes.forEach(size => {
            const option = document.createElement('option');
            option.value = size;
            option.textContent = size;
            sizeSelect.appendChild(option);
        });
        sizeSelect.value = 'M';
    }
    
    // Mostrar modal
    productModal.style.display = 'block';
}

// Función para manejar imágenes faltantes
function handleImageError(img) {
    // Si una imagen no se carga, mostrar una imagen de placeholder
    img.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtc2l6ZT0iMTgiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIiBmaWxsPSIjOTk5Ij5JbWFnZW4gbm8gZGlzcG9uaWJsZTwvdGV4dD48L3N2Zz4=';
    img.alt = 'Imagen no disponible';
}

// Añadir producto al carrito desde el modal
function addToCartFromModal() {
    const quantity = parseInt(document.getElementById('quantity').value);
    const size = document.getElementById('size-select').value;
    
    addToCart(currentProduct.id, quantity, size);
    
    // Cerrar modal después de añadir al carrito
    setTimeout(() => {
        productModal.style.display = 'none';
    }, 500);
}

// Añadir producto al carrito
function addToCart(productId, quantity, size) {
    const product = products.find(p => p.id === productId);
    
    if (!product) return;
    
    // Verificar si el producto ya está en el carrito
    const existingItem = cart.find(item => item.id === productId && item.size === size);
    
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.images[0],
            quantity: quantity,
            size: size
        });
    }
    
    // Actualizar contador del carrito
    updateCartCount();
    
    // Mostrar notificación
    showNotification(`¡${product.name} añadido al carrito!`);
}

// Actualizar contador del carrito
function updateCartCount() {
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    cartCount.textContent = totalItems;
}

// Mostrar notificación
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background-color: var(--success);
        color: white;
        padding: 15px 20px;
        border-radius: 4px;
        z-index: 1000;
        animation: slideIn 0.3s, slideOut 0.3s 2.7s;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Mostrar carrito en modal
function displayCart() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<p class="empty-cart">Tu carrito está vacío</p>';
        document.getElementById('cart-total-price').textContent = '$0.00 MXN';
        return;
    }
    
    let total = 0;
    
    cart.forEach((item, index) => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <div class="cart-item-image">
                <img src="${item.image}" alt="${item.name}" onerror="handleImageError(this)">
            </div>
            <div class="cart-item-details">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-price">$${item.price} MXN</div>
                <div class="cart-item-size">Talla: ${item.size}</div>
                <div class="cart-item-quantity">
                    <button class="quantity-btn minus" data-index="${index}">-</button>
                    <input type="number" value="${item.quantity}" min="1" data-index="${index}">
                    <button class="quantity-btn plus" data-index="${index}">+</button>
                </div>
                <button class="remove-item" data-index="${index}">Eliminar</button>
            </div>
            <div class="cart-item-total">$${itemTotal} MXN</div>
        `;
        
        cartItems.appendChild(cartItem);
    });
    
    document.getElementById('cart-total-price').textContent = `$${total.toFixed(2)} MXN`;
    
    // Agregar event listeners a los controles del carrito
    document.querySelectorAll('.quantity-btn.minus').forEach(btn => {
        btn.addEventListener('click', function() {
            const index = parseInt(this.getAttribute('data-index'));
            updateCartItemQuantity(index, -1);
        });
    });
    
    document.querySelectorAll('.quantity-btn.plus').forEach(btn => {
        btn.addEventListener('click', function() {
            const index = parseInt(this.getAttribute('data-index'));
            updateCartItemQuantity(index, 1);
        });
    });
    
    document.querySelectorAll('.remove-item').forEach(btn => {
        btn.addEventListener('click', function() {
            const index = parseInt(this.getAttribute('data-index'));
            removeCartItem(index);
        });
    });
    
    document.querySelectorAll('.cart-item-quantity input').forEach(input => {
        input.addEventListener('change', function() {
            const index = parseInt(this.getAttribute('data-index'));
            const newQuantity = parseInt(this.value);
            
            if (newQuantity < 1) {
                this.value = 1;
                return;
            }
            
            updateCartItemQuantity(index, newQuantity - cart[index].quantity);
        });
    });
}

// Actualizar cantidad de item en carrito
function updateCartItemQuantity(index, change) {
    if (index < 0 || index >= cart.length) return;
    
    const newQuantity = cart[index].quantity + change;
    
    if (newQuantity < 1) {
        removeCartItem(index);
        return;
    }
    
    cart[index].quantity = newQuantity;
    displayCart();
    updateCartCount();
}

// Eliminar item del carrito
function removeCartItem(index) {
    if (index < 0 || index >= cart.length) return;
    
    cart.splice(index, 1);
    displayCart();
    updateCartCount();
    
    showNotification('Producto eliminado del carrito');
}

// Cerrar todos los modales
function closeModals() {
    productModal.style.display = 'none';
    cartModal.style.display = 'none';
    loginModal.style.display = 'none';
}

// Procesar pago
function checkout() {
    if (cart.length === 0) {
        alert('Tu carrito está vacío');
        return;
    }
    
    alert('¡Gracias por tu compra! Serás redirigido a la página de pago.');
    // En una implementación real, aquí redirigiríamos a la pasarela de pago
    cart = [];
    updateCartCount();
    closeModals();
}

// Manejar login
function handleLogin(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    // Simulación de login (en una app real, esto se conectaría a un backend)
    if (email && password) {
        alert(`Bienvenido, ${email}`);
        loginModal.style.display = 'none';
        document.getElementById('login-form').reset();
    } else {
        alert('Por favor, complete todos los campos');
    }
}

// Manejar registro
function handleRegister(e) {
    e.preventDefault();
    const email = document.getElementById('reg-email').value;
    const password = document.getElementById('reg-password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    
    if (password !== confirmPassword) {
        alert('Las contraseñas no coinciden');
        return;
    }
    
    // Simulación de registro (en una app real, esto se conectaría a un backend)
    if (email && password) {
        alert(`¡Registro exitoso! Bienvenido, ${email}`);
        loginModal.style.display = 'none';
        document.getElementById('register-form').reset();
        
        // Volver al formulario de login
        document.getElementById('login-form').style.display = 'block';
        document.getElementById('register-form').style.display = 'none';
    } else {
        alert('Por favor, complete todos los campos');
    }
}

// Agregar estilos CSS para las animaciones
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    
    @keyframes slideOut {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
    
    .category-link.active {
        background-color: rgba(255,255,255,0.2);
    }
    
    .no-products, .empty-cart {
        text-align: center;
        grid-column: 1 / -1;
        padding: 40px;
        font-size: 18px;
        color: var(--gray);
    }
    
    .cart-item-total {
        font-weight: bold;
        color: var(--primary);
        align-self: flex-start;
    }
`;
// Inicializar FAQ cuando la página cargue
document.addEventListener('DOMContentLoaded', function() {
    initFAQ();
});

// Función específica para inicializar FAQ
function initFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('h3');
        const answer = item.querySelector('p');
        
        // Asegurarse de que la respuesta esté oculta al inicio
        answer.style.display = 'none';
        
        question.addEventListener('click', function() {
            // Cerrar todas las demás FAQs
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    const otherAnswer = otherItem.querySelector('p');
                    otherAnswer.style.display = 'none';
                    otherItem.classList.remove('active');
                }
            });
            
            // Alternar la FAQ actual
            const isActive = item.classList.contains('active');
            if (isActive) {
                answer.style.display = 'none';
                item.classList.remove('active');
            } else {
                answer.style.display = 'block';
                item.classList.add('active');
            }
        });
    });
}
document.head.appendChild(style);
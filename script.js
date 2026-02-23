/* ==========================================================
   1. MENU DATA & GALLERY LOGIC (Requirement #3)
   ========================================================== */
const menuItems = {
    hot: [
        {title: 'Classic Espresso', desc: 'Concentrated pure coffee beans.', price: '$3.50', img: 'https://www.nestleprofessional.in/sites/default/files/2021-08/Cocoa-Macchiato-Thumbnail.jpg'},
        {title: 'Caramel Macchiato', desc: 'Vanilla-flavored milk marked with espresso.', price: '$5.50', img: 'https://thebucksjournal.com/wp-content/uploads/2025/06/Starbucks-Caramel-Ribbon-Crunch-Frappuccino-Blended-Beverage.webp'},
        {title: 'Velvet Flat White', desc: 'Rich espresso with thin micro-foam.', price: '$4.75', img: 'https://drip-drinks.s3.amazonaws.com/1769887492598-P1142.jpg'},
        {title: 'Creamy Latte', desc: 'Double espresso with steamed milk.', price: '$4.50', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjkU4z0fver6cid-gJ6zoU49bz5_3dZP3Fuw&s'},
        {title: 'Dark Mocha', desc: 'Chocolate infused espresso brew.', price: '$5.25', img: 'https://www.tastestrecipes.com/wp-content/uploads/2024/11/Dark-Chocolate-Mocha.webp'},
        {title: 'Turkish Coffee', desc: 'Finely ground beans with cardamom.', price: '$4.00', img: 'https://foolproofliving.com/wp-content/uploads/2016/02/05-8434-post/How-to-make-Turkish-Coffee-2-11158-Edit-3.jpg'},
        {title: 'Americano', desc: 'Espresso shots topped with hot water.', price: '$3.75', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnFR6rbKXHphiGjmEv6F0oUumQoEeTlxj3XA&s'},
        {title: 'Cortado', desc: 'Equal parts espresso and warm milk.', price: '$4.25', img: 'https://images.unsplash.com/photo-1485808191679-5f86510681a2?w=500'}
    ],
    cold: [
        {title: 'Nitro Cold Brew', desc: 'Nitrogen-infused smooth cold brew.', price: '$6.00', img: 'https://cdn.shopify.com/s/files/1/0530/5145/7703/files/Nitro_Cold_Brew_Coffee_-_Could_this_be_the_new_coffee_trend_in_Japan.jpg?v=1697472810'},
        {title: 'Iced Matcha', desc: 'Pure green tea over ice and milk.', price: '$5.50', img: 'https://images.unsplash.com/photo-1515823064-d6e0c04616a7?w=500'},
        {title: 'Spanish Latte Ice', desc: 'Sweetened milk with iced espresso.', price: '$5.75', img: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=500'},
        {title: 'Cold Brew Lemonade', desc: 'Coffee mixed with fresh lemon.', price: '$5.00', img: 'https://www.lifeslittlesweets.com/wp-content/uploads/2018/08/Coffee-Lemonade-www.lifeslittlesweets.com-680x1020.jpg'},
        {title: 'Iced Americano', desc: 'Refreshing espresso on rocks.', price: '$4.00', img: 'https://thumbs.dreamstime.com/b/iced-sparkling-americano-mint-syrup-wooden-table-271494654.jpg'},
        {title: 'Frappuccino', desc: 'Blended coffee with whipped cream.', price: '$6.50', img: 'https://img.freepik.com/free-photo/cup-coffee-with-whipped-cream-coffee-sprinkles_140725-5973.jpg?semt=ais_user_personalization&w=740&q=80'},
        {title: 'Dirty Chai Ice', desc: 'Chai tea with an espresso kick.', price: '$6.00', img: 'https://images.unsplash.com/photo-1499638673689-79a0b5115d87?w=500'},
        {title: 'Iced Mocha', desc: 'Cold chocolate and coffee blend.', price: '$5.50', img: 'https://bakingmischief.com/wp-content/uploads/2019/05/iced-mocha-picture-683x1024.jpg'}
    ],
    bakery: [
        {title: 'Butter Croissant', desc: 'Flaky and buttery French pastry.', price: '$3.50', img: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=500'},
        {title: 'Blueberry Muffin', desc: 'Baked fresh with organic berries.', price: '$3.25', img: 'https://bakerbynature.com/wp-content/uploads/2011/05/Blueberry-Muffins-1-of-1-500x500.jpg'},
        {title: 'Cinnamon Roll', desc: 'Glazed with sugar and spice.', price: '$4.50', img: 'https://images.unsplash.com/photo-1509365465985-25d11c17e812?w=500'},
        {title: 'New York Cheesecake', desc: 'Creamy slice of NY style cake.', price: '$6.00', img: 'https://www.onceuponachef.com/images/2017/12/cheesecake-760x882.jpg'},
        {title: 'Pain au Chocolat', desc: 'Chocolate filled puff pastry.', price: '$4.25', img: 'https://cdn.sanity.io/images/85daklna/production/8fd41ef4d77f0b55caaab424b0b3e070d285e6ed-2000x1670.webp?auto=format&q=100&url=https://cdn.sanity.io/images/85daklna/production/8fd41ef4d77f0b55caaab424b0b3e070d285e6ed-2000x1670.webp&w=1400'},
        {title: 'Classic Bagel', desc: 'Toasted with cream cheese.', price: '$5.00', img: 'https://cdnimg.webstaurantstore.com/images/products/large/551178/2064404.jpg'},
        {title: 'Fudge Brownie', desc: 'Gooey dark chocolate brownie.', price: '$3.00', img: 'https://senseandedibility.com/wp-content/uploads/2023/01/Dark-Fudgy-Brownies-Lead.jpg'},
        {title: 'Fruit Tart', desc: 'Shortcrust pastry with cream.', price: '$4.75', img: 'https://www.savingdessert.com/wp-content/uploads/2015/04/Fresh-Fruit-Tarts-6-scaled.jpg'}
    ],
    beans: [
        {title: 'Ethiopian Sidamo', desc: 'Light roast with fruity notes.', price: '$18.00', img: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=500'},
        {title: 'Brazilian Santos', desc: 'Nutty and chocolatey flavor.', price: '$16.00', img: 'https://i.ebayimg.com/thumbs/images/g/seAAAOSw9~BoXQ8e/s-l1200.jpg'},
        {title: 'Java Buzz Gold', desc: 'Our signature dark roast blend.', price: '$22.00', img: 'https://m.media-amazon.com/images/I/91W7RPyVCEL._AC_UF894,1000_QL80_.jpg'},
        {title: 'Colombian Mild', desc: 'Well-balanced morning coffee.', price: '$20.00', img: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=500'},
        {title: 'Decaf Supremo', desc: '100% flavor without caffeine.', price: '$15.00', img: 'https://static.wixstatic.com/media/c901ed_684aa6d31a9b46b095bc7685fbfc288e~mv2.jpg/v1/fill/w_480,h_534,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/c901ed_684aa6d31a9b46b095bc7685fbfc288e~mv2.jpg'},
        {title: 'Kenyan AA', desc: 'Bold and wine-like acidity.', price: '$25.00', img: 'https://virginhillcoffee.com/cdn/shop/products/Kenya.jpg?v=1753461031'},
        {title: 'Espresso Roast', desc: 'Perfectly oily for machine brew.', price: '$19.00', img: 'https://coffeebros.com/cdn/shop/articles/what-is-espresso.jpg?v=1710281243'},
        {title: 'Sumatran Tiger', desc: 'Earthy and spicy deep roast.', price: '$21.00', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsGwYLOdVsES-QtiK76ozZ3Cp1OO1nOOX1tw&s'}
    ]
};

const gallery = document.getElementById('menu-gallery');

function filterMenu(cat, btn) {
    if(!gallery) return;
    // Remove active class from all buttons
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    // Add active class to clicked button
    btn.classList.add('active');
    
    // Render Items
    gallery.innerHTML = menuItems[cat].map(item => `
        <div class="menu-card" onclick="openModal('${item.title.replace(/'/g, "\\'")}', '${item.desc.replace(/'/g, "\\'")}', '${item.price}', '${item.img}')">
            <img src="${item.img}" alt="${item.title}">
            <div class="card-txt">
                <h3>${item.title}</h3>
                <p>Price: ${item.price}</p>
            </div>
        </div>
    `).join('');
}

/* ==========================================================
   2. MODAL LOGIC
   ========================================================== */
function openModal(t, d, p, i) {
    document.getElementById('modal-title').innerText = t;
    document.getElementById('modal-desc').innerText = d;
    document.getElementById('modal-price').innerText = p;
    document.getElementById('modal-img').src = i;
    document.getElementById('detailModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('detailModal').style.display = 'none';
}

// Close modal when clicking outside of it
window.onclick = function(event) {
    const modal = document.getElementById('detailModal');
    if (event.target == modal) {
        closeModal();
    }
}

/* ==========================================================
   3. LEAFLET MAP INITIALIZATION (Requirement #4)
   ========================================================== */
function initMap() {
    // Star Gate, Karachi Coordinates
    const starGateCoords = [24.8948, 67.1450];
    
    // Initialize map
    const map = L.map('map').setView(starGateCoords, 16);

    // Add OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);

    // Add Marker for Java Buzz
    L.marker(starGateCoords).addTo(map)
        .bindPopup('<b>Java Buzz Roastery</b><br>Metro Star Gate Center, Karachi.')
        .openPopup();
}

/* ==========================================================
   4. FETCH BLOGS & SOCIAL SHARING (Requirement #5)
   ========================================================== */
function loadBlogs() {
    fetch('blogs.json')
        .then(response => response.json())
        .then(data => {
            const blogGrid = document.getElementById('blog-grid');
            if(blogGrid) {
                blogGrid.innerHTML = data.map(blog => `
                    <div class="blog-card">
                        <h3>${blog.title}</h3>
                        <p>${blog.excerpt}</p>
                        <div class="blog-share-icons">
                            <small>Share: </small>
                            <a href="https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}" target="_blank"><i class="fab fa-facebook-f"></i></a>
                            <a href="https://twitter.com/intent/tweet?text=${encodeURIComponent(blog.title)}" target="_blank"><i class="fab fa-twitter"></i></a>
                            <a href="https://wa.me/?text=${encodeURIComponent('Read this: ' + blog.title + ' ' + window.location.href)}" target="_blank"><i class="fab fa-whatsapp"></i></a>
                        </div>
                    </div>
                `).join('');
            }
        })
        .catch(error => console.error("Error loading blogs:", error));
}

/* ==========================================================
   5. INITIALIZE EVERYTHING ON LOAD
   ========================================================== */
document.addEventListener('DOMContentLoaded', () => {
    // 1. Load default menu (Hot Brews)
    const hotBtn = document.querySelector('.filter-btn');
    if(hotBtn) filterMenu('hot', hotBtn);

    // 2. Initialize Map
    initMap();

    // 3. Load Blogs
    loadBlogs();
});
// menu-script.js - Dedicated Menu Page Script
document.addEventListener('DOMContentLoaded', () => {
  // Function to get food image based on index
  function getFoodImage(index) {
    const foodImages = [
      'https://images.unsplash.com/photo-1567620905586-2d39ae68e00e?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1606787620584-aec4e16420ff?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1495521821757-a1efb6729352?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1609501676725-7186f017a4b7?auto=format&fit=crop&w=400&q=80'
    ];
    return foodImages[index % foodImages.length];
  }

  // Restaurant database - Complete with all 15 restaurants
  const restaurants = [
    {
      id: 1, name: 'Chokhi Dhani', cuisine: 'Rajasthani', rating: 4.7,
      image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=900&q=80',
      delivery: 25, price: 300,
      menu: [
        { name: 'Dal Baati Churma', price: 180 },
        { name: 'Laal Maas (Mutton)', price: 220 },
        { name: 'Gatte Ka Saag', price: 160 },
        { name: 'Ker Sangri', price: 140 },
        { name: 'Bajra Roti with Ghee', price: 80 },
        { name: 'Mawa Kachori', price: 120 },
        { name: 'Rajasthani Thali', price: 350 },
        { name: 'Pyaaz Kachumber', price: 100 },
        { name: 'Mirchi Bajji', price: 110 },
        { name: 'Bajra Khichdi', price: 130 },
        { name: 'Gujhiya', price: 90 },
        { name: 'Ghevar', price: 110 }
      ]
    },
    {
      id: 2, name: 'Peacock Rooftop', cuisine: 'North Indian', rating: 4.6,
      image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=900&q=80',
      delivery: 30, price: 350,
      menu: [
        { name: 'Butter Chicken', price: 280 },
        { name: 'Tandoori Chicken Half', price: 260 },
        { name: 'Paneer Tikka Masala', price: 250 },
        { name: 'Palak Paneer', price: 200 },
        { name: 'Biryani (Chicken/Mutton)', price: 250 },
        { name: 'Garlic Naan', price: 60 },
        { name: 'Butter Naan', price: 50 },
        { name: 'Daal Makhni', price: 180 },
        { name: 'Shahi Paneer', price: 220 },
        { name: 'Chole Bhature', price: 150 },
        { name: 'Lassi (Sweet/Salted)', price: 70 },
        { name: 'Kheer', price: 100 }
      ]
    },
    {
      id: 3, name: 'Spice Route', cuisine: 'Multi-Cuisine', rating: 4.5,
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80',
      delivery: 28, price: 300,
      menu: [
        { name: 'Paneer Tikka', price: 210 },
        { name: 'Chicken Tikka Masala', price: 280 },
        { name: 'Seekh Kebab (Veg/Non-Veg)', price: 220 },
        { name: 'Garlic Naan', price: 80 },
        { name: 'Raita', price: 60 },
        { name: 'Kulfi', price: 50 },
        { name: 'Veg Hakka Noodles', price: 140 },
        { name: 'Paneer Fried Rice', price: 160 },
        { name: 'Spring Roll', price: 70 },
        { name: 'Manchurian (Dry/Gravy)', price: 150 },
        { name: 'Samosa (Veg/Meat)', price: 60 },
        { name: 'Aloo Tikki', price: 50 }
      ]
    },
    {
      id: 4, name: 'Café Coffee Day', cuisine: 'Cafe', rating: 4.4,
      image: 'https://images.unsplash.com/photo-1495521821757-a1efb6729352?auto=format&fit=crop&w=900&q=80',
      delivery: 20, price: 150,
      menu: [
        { name: 'Cappuccino', price: 80 },
        { name: 'Espresso', price: 60 },
        { name: 'Latte', price: 90 },
        { name: 'Americano', price: 70 },
        { name: 'Iced Coffee', price: 100 },
        { name: 'Croissant', price: 80 },
        { name: 'Brownie', price: 60 },
        { name: 'Cheesecake', price: 120 },
        { name: 'Sandwich (Veggie/Meat)', price: 110 },
        { name: 'Muffin', price: 70 },
        { name: 'Cold Brew', price: 95 },
        { name: 'Mocha', price: 100 }
      ]
    },
    {
      id: 5, name: 'Pind Balluchi', cuisine: 'Punjabi', rating: 4.6,
      image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=900&q=80',
      delivery: 25, price: 280,
      menu: [
        { name: 'Sarson Da Saag with Makki Di Roti', price: 200 },
        { name: 'Chole Puri', price: 120 },
        { name: 'Aloo Parathas', price: 110 },
        { name: 'Paneer Bhurji', price: 180 },
        { name: 'Lassi', price: 70 },
        { name: 'Rajma Chawal', price: 140 },
        { name: 'Amritsari Kulcha', price: 130 },
        { name: 'Butter Naan', price: 80 },
        { name: 'Tandoori Chicken', price: 250 },
        { name: 'Chole Bhature', price: 130 },
        { name: 'Paneer Tikka', price: 180 },
        { name: 'Gulab Jamun', price: 60 }
      ]
    },
    {
      id: 6, name: 'Dragon Wok', cuisine: 'Chinese', rating: 4.5,
      image: 'https://images.unsplash.com/photo-1609501676725-7186f017a4b7?auto=format&fit=crop&w=900&q=80',
      delivery: 22, price: 250,
      menu: [
        { name: 'Hakka Noodles', price: 140 },
        { name: 'Fried Rice (Veg/Meat)', price: 160 },
        { name: 'Manchurian Dry', price: 180 },
        { name: 'Sweet Corn Soup', price: 120 },
        { name: 'Chow Mein', price: 150 },
        { name: 'Spring Roll (3pcs)', price: 80 },
        { name: 'Schezwan Sauce Noodles', price: 160 },
        { name: 'Black Bean Noodles', price: 140 },
        { name: 'Mixed Vegetable Gravy', price: 160 },
        { name: 'Chicken 65', price: 180 },
        { name: 'Paneer Chili', price: 170 },
        { name: 'Fortune Cookies (6pcs)', price: 70 }
      ]
    },
    {
      id: 7, name: 'Lassi House', cuisine: 'Desserts & Drinks', rating: 4.7,
      image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=900&q=80',
      delivery: 15, price: 120,
      menu: [
        { name: 'Mango Lassi', price: 90 },
        { name: 'Sweet Lassi', price: 80 },
        { name: 'Strawberry Shake', price: 100 },
        { name: 'Kulfi Falooda', price: 110 },
        { name: 'Jalebi with Rabri', price: 50 },
        { name: 'Gulab Jamun', price: 70 },
        { name: 'Ice Cream Sundae', price: 130 },
        { name: 'Smoothie Bowl', price: 120 },
        { name: 'Iced Tea (Lemon/Mint)', price: 80 },
        { name: 'Badam Milk', price: 90 },
        { name: 'Rose Milk', price: 85 },
        { name: 'Chikhalwali (Cold Drink)', price: 60 }
      ]
    },
    {
      id: 8, name: 'Masala Dhaba', cuisine: 'North Indian', rating: 4.6,
      image: 'https://images.unsplash.com/photo-1505253758473-96b7015fcd40?auto=format&fit=crop&w=900&q=80',
      delivery: 26, price: 320,
      menu: [
        { name: 'Kadhai Chicken', price: 300 },
        { name: 'Rogan Josh', price: 280 },
        { name: 'Korma', price: 250 },
        { name: 'Vindaloo', price: 270 },
        { name: 'Do Pyaza', price: 200 },
        { name: 'Puri Bhaji', price: 100 },
        { name: 'Idli Sambar', price: 110 },
        { name: 'Dosa', price: 120 },
        { name: 'Pesarattu', price: 90 },
        { name: 'Rasam', price: 80 },
        { name: 'Biryani', price: 250 },
        { name: 'Chaat (Gol Gappa)', price: 60 }
      ]
    },
    {
      id: 9, name: 'Pizza Paradise', cuisine: 'Italian', rating: 4.5,
      image: 'https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?auto=format&fit=crop&w=900&q=80',
      delivery: 28, price: 350,
      menu: [
        { name: 'Margherita Pizza', price: 250 },
        { name: 'Pepperoni Pizza', price: 280 },
        { name: 'Vegetarian Pizza', price: 240 },
        { name: 'BBQ Chicken Pizza', price: 300 },
        { name: 'Garlic Bread', price: 100 },
        { name: 'Pasta Carbonara', price: 220 },
        { name: 'Pasta Alfredo', price: 210 },
        { name: 'Tiramisu', price: 140 },
        { name: 'Risotto', price: 200 },
        { name: 'Bruschetta', price: 120 },
        { name: 'Paneer Pizza', price: 270 },
        { name: 'Garlic Butter Bread', price: 110 }
      ]
    },
    {
      id: 10, name: 'Burger Junction', cuisine: 'Fast Food', rating: 4.4,
      image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=900&q=80',
      delivery: 20, price: 200,
      menu: [
        { name: 'Cheesy Burger', price: 180 },
        { name: 'Spicy Chicken Burger', price: 160 },
        { name: 'Veggie Burger', price: 140 },
        { name: 'Double Patty Burger', price: 220 },
        { name: 'French Fries', price: 80 },
        { name: 'Onion Rings', price: 90 },
        { name: 'Chicken Nuggets (6pcs)', price: 110 },
        { name: 'Coleslaw', price: 70 },
        { name: 'Milkshake (Vanilla/Chocolate)', price: 100 },
        { name: 'Soft Drink', price: 50 },
        { name: 'Spicy Fries', price: 100 },
        { name: 'Paneer Burger', price: 170 }
      ]
    },
    {
      id: 11, name: 'The Forresta Hotel & Cafe', cuisine: 'Cafe & Hotel', rating: 4.8,
      image: 'https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?auto=format&fit=crop&w=900&q=80',
      delivery: 18, price: 400,
      menu: [
        { name: 'Espresso', price: 70 },
        { name: 'Cappuccino Deluxe', price: 100 },
        { name: 'Cold Brew Coffee', price: 110 },
        { name: 'Croissant', price: 90 },
        { name: 'Chocolate Cake', price: 150 },
        { name: 'Salmon Sandwich', price: 200 },
        { name: 'Panini (Grilled)', price: 180 },
        { name: 'Seasonal Salad', price: 160 },
        { name: 'Herb Bread', price: 80 },
        { name: 'Macaron Assorted', price: 120 },
        { name: 'Continental Breakfast', price: 300 },
        { name: 'Latte Art Coffee', price: 120 }
      ]
    },
    {
      id: 12, name: 'Tapri Central', cuisine: 'Cafe & Tea House', rating: 4.5,
      image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=900&q=80',
      delivery: 12, price: 100,
      menu: [
        { name: 'Masala Chai', price: 30 },
        { name: 'Ginger Tea', price: 35 },
        { name: 'Green Tea', price: 40 },
        { name: 'Black Tea', price: 30 },
        { name: 'Milk Coffee', price: 40 },
        { name: 'Biscuit Packet', price: 20 },
        { name: 'Namkeen (Salty)', price: 25 },
        { name: 'Samosa', price: 30 },
        { name: 'Pakora Mix', price: 50 },
        { name: 'Rusks', price: 40 },
        { name: 'Honey Tea', price: 45 },
        { name: 'Herbal Tea', price: 50 }
      ]
    },
    {
      id: 13, name: 'Niros Restaurant', cuisine: 'Rajasthani & North Indian', rating: 4.7,
      image: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=900&q=80',
      delivery: 30, price: 350,
      menu: [
        { name: 'Dal Baati Churma Special', price: 200 },
        { name: 'Laal Maas Deluxe', price: 250 },
        { name: 'Butter Chicken Niros', price: 280 },
        { name: 'Paneer Tikka Masala', price: 240 },
        { name: 'Tandoori Chicken Full', price: 300 },
        { name: 'Naan Basket (5pcs)', price: 100 },
        { name: 'Ghee Rice', price: 120 },
        { name: 'Mixed Thali', price: 400 },
        { name: 'Gatte Ki Sabzi', price: 160 },
        { name: 'Ker Sangri Fry', price: 140 },
        { name: 'Rajasthani Bread Basket', price: 150 },
        { name: 'Shahi Tukda', price: 100 }
      ]
    },
    {
      id: 14, name: 'Surya Niwas Hotel', cuisine: 'Multi-Cuisine Hotel', rating: 4.6,
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=900&q=80',
      delivery: 32, price: 450,
      menu: [
        { name: 'Continental Breakfast', price: 350 },
        { name: 'Grilled Fish', price: 400 },
        { name: 'Ribeye Steak', price: 550 },
        { name: 'Butter Garlic Prawns', price: 450 },
        { name: 'Paneer Makhani', price: 300 },
        { name: 'Chicken Stroganoff', price: 380 },
        { name: 'Veg Biryani', price: 250 },
        { name: 'Dal Tadka', price: 180 },
        { name: 'Grilled Vegetables', price: 220 },
        { name: 'Chocolate Lava Cake', price: 200 },
        { name: 'Crème Brûlée', price: 180 },
        { name: 'Mixed Platter', price: 600 }
      ]
    },
    {
      id: 15, name: 'Handi Restaurant', cuisine: 'Hyderabadi & Multi-Cuisine', rating: 4.5,
      image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=900&q=80',
      delivery: 28, price: 320,
      menu: [
        { name: 'Hyderabadi Biryani', price: 280 },
        { name: 'Haleem', price: 220 },
        { name: 'Nihari (Goat/Chicken)', price: 240 },
        { name: 'Butter Chicken', price: 260 },
        { name: 'Paneer Tikka', price: 200 },
        { name: 'Tandoori Naan', price: 70 },
        { name: 'Roomali Roti', price: 80 },
        { name: 'Mutton Keema', price: 250 },
        { name: 'Shami Kabab (6pcs)', price: 150 },
        { name: 'Seekh Kebab', price: 200 },
        { name: 'Kulfi Falooda', price: 100 },
        { name: 'Sheermal', price: 90 }
      ]
    }
  ];

  // Get restaurant ID from URL
  const urlParams = new URLSearchParams(window.location.search);
  const restaurantId = parseInt(urlParams.get('id'));
  
  console.log('Looking for restaurant ID:', restaurantId);
  
  const restaurant = restaurants.find(r => r.id === restaurantId);
  
  console.log('Found restaurant:', restaurant);
  
  if (!restaurant) {
    console.error('Restaurant not found, redirecting...');
    window.location.href = 'index.html';
    return;
  }
  
  console.log('Restaurant menu has', restaurant.menu.length, 'items');

  // Render restaurant header
  function renderRestaurantHeader() {
    const headerHTML = `
      <div class="menu-hero-overlay"></div>
      <img src="${restaurant.image}" alt="${restaurant.name}" class="menu-hero-bg">
      <div class="container menu-hero-content">
        <h1>${restaurant.name}</h1>
        <p class="menu-hero-cuisine">${restaurant.cuisine}</p>
        <div class="menu-hero-stats">
          <span class="stat-badge">⭐ ${restaurant.rating}</span>
          <span class="stat-badge">⏱ ${restaurant.delivery} mins</span>
          <span class="stat-badge">💰 ₹${restaurant.price} for one</span>
          <span class="stat-badge">🍽️ ${restaurant.menu.length} items</span>
        </div>
      </div>
    `;
    document.getElementById('restaurantHeader').innerHTML = headerHTML;
  }

  // Render menu items grid
  function renderMenuItems(items = restaurant.menu) {
    const menuGrid = document.getElementById('menuItemsGrid');
    const menuCountEl = document.getElementById('menuItemCount');
    
    if (menuCountEl) {
      menuCountEl.textContent = `${items.length} delicious items`;
    }
    
    menuGrid.innerHTML = items.map((item, index) => `
      <div class="menu-page-card">
        <div class="menu-page-img">
          <img src="${item.image || getFoodImage(index)}" alt="${item.name}" loading="lazy">
        </div>
        <div class="menu-page-info">
          <h3>${item.name}</h3>
          <div class="menu-page-price-row">
            <p class="menu-page-price">₹${item.price}</p>
            <button class="btn-add-quick" onclick="addToCart('${item.name.replace(/'/g, "\\'")}', ${item.price}, '${restaurant.name.replace(/'/g, "\\'")}')">
              +
            </button>
          </div>
        </div>
      </div>
    `).join('');
  }  // Search functionality
  const searchInput = document.getElementById('searchMenuItems');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const query = e.target.value.toLowerCase();
      const filtered = restaurant.menu.filter(item => 
        item.name.toLowerCase().includes(query)
      );
      renderMenuItems(filtered);
    });
  }

  // Cart functions
  function getCart() {
    return JSON.parse(localStorage.getItem('sanji_cart') || '[]');
  }

  function saveCart(cart) {
    localStorage.setItem('sanji_cart', JSON.stringify(cart));
  }

  function addToCart(itemName, price, restaurantName) {
    const cart = getCart();
    const existing = cart.find(i => i.name === `${itemName} (${restaurantName})`);
    
    if (existing) {
      existing.qty++;
    } else {
      cart.push({
        id: Date.now(),
        name: `${itemName} (${restaurantName})`,
        price: price,
        restaurant: restaurantName,
        qty: 1
      });
    }
    
    saveCart(cart);
    updateCartCount();
    
    // Show notification
    showNotification(`${itemName} added to cart!`);
  }

  function updateCartCount() {
    const cart = getCart();
    const count = cart.reduce((sum, item) => sum + item.qty, 0);
    document.getElementById('cartCount').textContent = count;
  }

  function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'cart-notification';
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
      notification.classList.add('show');
    }, 10);
    
    setTimeout(() => {
      notification.classList.remove('show');
      setTimeout(() => notification.remove(), 300);
    }, 2000);
  }

  // Footer year
  const year = new Date().getFullYear();
  document.querySelectorAll('[id="year"]').forEach(el => { el.textContent = year; });

  // Initialize page
  console.log('Initializing menu page...');
  renderRestaurantHeader();
  renderMenuItems();
  updateCartCount();
  console.log('Menu page initialized successfully!');

  // Make functions global
  window.addToCart = addToCart;
});

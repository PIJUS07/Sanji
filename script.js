// script.js — Sanji Food Delivery Platform (Enhanced)
console.log('Script.js loaded!');
document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM Content Loaded!');
  // ===== RESTAURANT DATABASE (15 Restaurants) =====
  const restaurants = [
    {
      id: 1,
      name: 'Chokhi Dhani',
      cuisine: 'Rajasthani',
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=900&q=80',
      delivery: 25,
      price: 300,
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
      id: 2,
      name: 'Peacock Rooftop',
      cuisine: 'North Indian',
      rating: 4.6,
      image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=900&q=80',
      delivery: 30,
      price: 350,
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
      id: 3,
      name: 'Spice Route',
      cuisine: 'Multi-Cuisine',
      rating: 4.5,
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80',
      delivery: 28,
      price: 300,
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
      id: 4,
      name: 'Café Coffee Day',
      cuisine: 'Cafe',
      rating: 4.4,
      image: 'https://images.unsplash.com/photo-1495521821757-a1efb6729352?auto=format&fit=crop&w=900&q=80',
      delivery: 20,
      price: 150,
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
      id: 5,
      name: 'Pind Balluchi',
      cuisine: 'Punjabi',
      rating: 4.6,
      image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=900&q=80',
      delivery: 25,
      price: 280,
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
      id: 6,
      name: 'Dragon Wok',
      cuisine: 'Chinese',
      rating: 4.5,
      image: 'https://images.unsplash.com/photo-1609501676725-7186f017a4b7?auto=format&fit=crop&w=900&q=80',
      delivery: 22,
      price: 250,
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
      id: 7,
      name: 'Lassi House',
      cuisine: 'Desserts & Drinks',
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=900&q=80',
      delivery: 15,
      price: 120,
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
      id: 8,
      name: 'Masala Dhaba',
      cuisine: 'North Indian',
      rating: 4.6,
      image: 'https://images.unsplash.com/photo-1505253758473-96b7015fcd40?auto=format&fit=crop&w=900&q=80',
      delivery: 26,
      price: 320,
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
      id: 9,
      name: 'Pizza Paradise',
      cuisine: 'Italian',
      rating: 4.5,
      image: 'https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?auto=format&fit=crop&w=900&q=80',
      delivery: 28,
      price: 350,
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
      id: 10,
      name: 'Burger Junction',
      cuisine: 'Fast Food',
      rating: 4.4,
      image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=900&q=80',
      delivery: 20,
      price: 200,
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
      id: 11,
      name: 'The Forresta Hotel & Cafe',
      cuisine: 'Cafe & Hotel',
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?auto=format&fit=crop&w=900&q=80',
      delivery: 18,
      price: 400,
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
      id: 12,
      name: 'Tapri Central',
      cuisine: 'Cafe & Tea House',
      rating: 4.5,
      image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=900&q=80',
      delivery: 12,
      price: 100,
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
      id: 13,
      name: 'Niros Restaurant',
      cuisine: 'Rajasthani & North Indian',
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=900&q=80',
      delivery: 30,
      price: 350,
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
      id: 14,
      name: 'Surya Niwas Hotel',
      cuisine: 'Multi-Cuisine Hotel',
      rating: 4.6,
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=900&q=80',
      delivery: 32,
      price: 450,
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
      id: 15,
      name: 'Handi Restaurant',
      cuisine: 'Hyderabadi & Multi-Cuisine',
      rating: 4.5,
      image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=900&q=80',
      delivery: 28,
      price: 320,
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

  // ===== RENDER FUNCTIONS =====
  function renderFeaturedRestaurants() {
    console.log('renderFeaturedRestaurants called with', restaurants.length, 'restaurants');
    const topRestaurants = restaurants.slice(0, 3);
    const container = document.getElementById('featuredContainer');
    console.log('Featured container:', container);
    if (!container) return;
    
    container.innerHTML = topRestaurants.map(r => `
      <div class="featured-card fade-in">
        <div class="featured-img-wrapper">
          ${r.image ? `<img src="${r.image}" alt="${r.name}" class="featured-img" onerror="this.style.display='none'"/>` : `<div class="featured-img-placeholder"></div>`}
          <div class="featured-badges">
            <span class="offer-badge">FREE DELIVERY</span>
            <span class="rating-badge">⭐ ${r.rating}</span>
          </div>
        </div>
        <div class="featured-info">
          <h3>${r.name}</h3>
          <p class="cuisine">${r.cuisine}</p>
          <div class="delivery-info">
            <span>📍 ${Math.round(Math.random() * 4 + 1)}.${Math.round(Math.random() * 9)} km</span>
            <span>⏱ ${r.delivery} mins</span>
            <span>₹${r.price} avg</span>
          </div>
        </div>
      </div>
    `).join('');
  }

  function renderRestaurants(filter = {}) {
    console.log('renderRestaurants called with', restaurants.length, 'restaurants');
    let filtered = restaurants;

    if (filter.cuisine) {
      filtered = filtered.filter(r => r.cuisine === filter.cuisine);
    }

    if (filter.rating) {
      filtered = filtered.filter(r => r.rating >= parseFloat(filter.rating));
    }

    if (filter.sort) {
      switch(filter.sort) {
        case 'rating':
          filtered.sort((a, b) => b.rating - a.rating);
          break;
        case 'price':
          filtered.sort((a, b) => a.price - b.price);
          break;
        case 'delivery':
          filtered.sort((a, b) => a.delivery - b.delivery);
          break;
        case 'name':
          filtered.sort((a, b) => a.name.localeCompare(b.name));
          break;
      }
    }

    const container = document.getElementById('restaurantsContainer');
    console.log('Restaurants container:', container, 'Filtered count:', filtered.length);
    if (!container) return;

    container.innerHTML = filtered.map(r => `
      <div class="restaurant-card fade-in">
        <div class="restaurant-img-wrapper" onclick="toggleMenu(${r.id})">
          ${r.image ? `<img src="${r.image}" alt="${r.name}" class="restaurant-img" onerror="this.style.display='none'"/>` : `<div class="restaurant-img-placeholder"></div>`}
          <div class="card-overlay">
            <span class="view-menu-overlay">View Full Menu →</span>
          </div>
        </div>
        <div class="restaurant-info">
          <div class="restaurant-header">
            <h3>${r.name}</h3>
            <span class="rating-badge-inline">⭐ ${r.rating}</span>
          </div>
          <p class="cuisine-tag">${r.cuisine}</p>
          <div class="meta-info">
            <span>⏱ ${r.delivery}m</span>
            <span>💰 ₹${r.price}</span>
            <span>🍽️ ${r.menu.length} items</span>
          </div>
          <button class="btn-view-menu" onclick="toggleMenu(${r.id})">
            📋 View Menu
          </button>
        </div>
      </div>
    `).join('');

    const countEl = document.getElementById('restaurantCount');
    if (countEl) countEl.textContent = filtered.length;
  }

  // ===== FILTER HANDLERS =====
  function applyFilters() {
    const cuisine = document.getElementById('cuisineFilter')?.value || '';
    const sort = document.getElementById('sortFilter')?.value || 'name';
    const rating = document.getElementById('ratingFilter')?.value || '';

    renderRestaurants({ cuisine, sort, rating });
  }

  function resetFilters() {
    document.getElementById('cuisineFilter').value = '';
    document.getElementById('sortFilter').value = 'name';
    document.getElementById('ratingFilter').value = '';
    renderRestaurants();
  }

  function toggleMenu(id) {
    // Navigate to dedicated menu page
    window.location.href = `menu.html?id=${id}`;
  }

  function getRandomFoodImage(index) {
    const foodImages = [
      '1567620905586-2d39ae68e00e?auto=format&fit=crop&w=400&q=80', // Indian food
      '1585937421612-70a008356fbe?auto=format&fit=crop&w=400&q=80', // Curry
      '1546069901-ba9599a7e63c?auto=format&fit=crop&w=400&q=80', // Restaurant food
      '1606787620584-aec4e16420ff?auto=format&fit=crop&w=400&q=80', // Curry dishes
      '1603894584373-5ac82b2ae398?auto=format&fit=crop&w=400&q=80', // Noodles
      '1565299624946-b28f40a0ae38?auto=format&fit=crop&w=400&q=80', // Pizza
      '1568901346375-23c9450c58cd?auto=format&fit=crop&w=400&q=80', // Burger
      '1563805042-7684c019e1cb?auto=format&fit=crop&w=400&q=80', // Dessert
      '1601050690597-df0568f70950?auto=format&fit=crop&w=400&q=80', // Indian thali
      '1495521821757-a1efb6729352?auto=format&fit=crop&w=400&q=80', // Coffee
      '1604068549290-dea0e4a305ca?auto=format&fit=crop&w=400&q=80', // Pizza close
      '1609501676725-7186f017a4b7?auto=format&fit=crop&w=400&q=80'  // Asian food
    ];
    return foodImages[index % foodImages.length];
  }

  function closeMenuModal(event) {
    if (event) event.stopPropagation();
    const modal = document.getElementById('menuModal');
    modal.classList.add('hidden');
    document.body.style.overflow = 'auto';
  }

  function addToCartQuick(itemName, price, restaurantName) {
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
  }

  // ===== SEARCH FUNCTIONALITY =====
  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const query = e.target.value.toLowerCase();
      const filtered = restaurants.filter(r => 
        r.name.toLowerCase().includes(query) ||
        r.cuisine.toLowerCase().includes(query) ||
        r.menu.some(m => m.name.toLowerCase().includes(query))
      );

      const container = document.getElementById('restaurantsContainer');
      if (!container) return;

      if (query === '') {
        renderRestaurants();
      } else {
        container.innerHTML = filtered.map(r => `
          <div class="restaurant-card fade-in">
            <div class="restaurant-img-wrapper" onclick="toggleMenu(${r.id})">
              ${r.image ? `<img src="${r.image}" alt="${r.name}" class="restaurant-img" onerror="this.style.display='none'"/>` : `<div class="restaurant-img-placeholder"></div>`}
              <div class="card-overlay">
                <span class="view-menu-overlay">View Full Menu →</span>
              </div>
            </div>
            <div class="restaurant-info">
              <div class="restaurant-header">
                <h3>${r.name}</h3>
                <span class="rating-badge-inline">⭐ ${r.rating}</span>
              </div>
              <p class="cuisine-tag">${r.cuisine}</p>
              <div class="meta-info">
                <span>⏱ ${r.delivery}m</span>
                <span>💰 ₹${r.price}</span>
                <span>🍽️ ${r.menu.length} items</span>
              </div>
              <button class="btn-view-menu" onclick="toggleMenu(${r.id})">
                📋 View Menu
              </button>
            </div>
          </div>
        `).join('');
      }
    });
  }

  // ===== FILTER EVENT LISTENERS =====
  document.getElementById('cuisineFilter')?.addEventListener('change', applyFilters);
  document.getElementById('sortFilter')?.addEventListener('change', applyFilters);
  document.getElementById('ratingFilter')?.addEventListener('change', applyFilters);

  // ===== CART FUNCTIONALITY =====
  function getCart() {
    return JSON.parse(localStorage.getItem('sanji_cart') || '[]');
  }

  function saveCart(cart) {
    localStorage.setItem('sanji_cart', JSON.stringify(cart));
  }

  function addToCart(item) {
    const cart = getCart();
    const existing = cart.find(i => i.name === item.name);
    if (existing) {
      existing.qty++;
    } else {
      cart.push({ ...item, id: Date.now(), qty: 1 });
    }
    saveCart(cart);
    updateCartCount();
    alert(`${item.name} added to cart!`);
  }

  function removeFromCart(itemId) {
    const cart = getCart().filter(i => i.id !== itemId);
    saveCart(cart);
    updateCartCount();
  }

  function updateQty(itemId, qty) {
    const cart = getCart();
    const item = cart.find(i => i.id === itemId);
    if (!item) return;
    item.qty = Math.max(0, qty);
    const filtered = cart.filter(i => i.qty > 0);
    saveCart(filtered);
    updateCartCount();
  }

  function cartCount() {
    return getCart().reduce((sum, item) => sum + item.qty, 0);
  }

  function updateCartCount() {
    const el = document.getElementById('cartCount');
    if (el) el.textContent = String(cartCount());
  }

  window.SanjiCart = { getCart, saveCart, addToCart, removeFromCart, updateQty };
  updateCartCount();

  // ===== FORM VALIDATION =====
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('contactName').value.trim();
      const email = document.getElementById('contactEmail').value.trim();
      const msg = document.getElementById('contactMessage').value.trim();
      const feedback = document.getElementById('contactFeedback');
      feedback.textContent = '';
      if (!name || !email || !msg) {
        feedback.style.color = 'crimson';
        feedback.textContent = 'Please fill all fields.';
        return;
      }
      if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
        feedback.style.color = 'crimson';
        feedback.textContent = 'Please enter a valid email.';
        return;
      }
      feedback.style.color = 'green';
      feedback.textContent = 'Thanks! Your message has been sent.';
      contactForm.reset();
    });
  }

  const signupForm = document.getElementById('signupForm');
  if (signupForm) {
    signupForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('signupName').value.trim();
      const email = document.getElementById('signupEmail').value.trim();
      const pw = document.getElementById('signupPassword').value;
      const conf = document.getElementById('signupConfirm').value;
      const fb = document.getElementById('signupFeedback');
      fb.textContent = '';
      if (!name || !email || !pw || !conf) {
        fb.style.color = 'crimson';
        fb.textContent = 'Please complete all fields.';
        return;
      }
      if (pw.length < 6) {
        fb.style.color = 'crimson';
        fb.textContent = 'Password must be at least 6 characters.';
        return;
      }
      if (pw !== conf) {
        fb.style.color = 'crimson';
        fb.textContent = 'Passwords do not match.';
        return;
      }
      fb.style.color = 'green';
      fb.textContent = 'Account created! You can now log in.';
      signupForm.reset();
    });
  }

  const loginForm = document.getElementById('loginForm');
  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = document.getElementById('loginEmail').value.trim();
      const pw = document.getElementById('loginPassword').value;
      const fb = document.getElementById('loginFeedback');
      fb.textContent = '';
      if (!email || !pw) {
        fb.style.color = 'crimson';
        fb.textContent = 'Please fill email and password.';
        return;
      }
      if (pw.length < 6) {
        fb.style.color = 'crimson';
        fb.textContent = 'Password must be at least 6 characters.';
        return;
      }
      fb.style.color = 'green';
      fb.textContent = 'Login successful!';
      loginForm.reset();
    });
  }

  // ===== FOOTER YEAR =====
  const year = new Date().getFullYear();
  document.querySelectorAll('[id="year"]').forEach(el => { el.textContent = year; });

  // ===== MOBILE MENU TOGGLE =====
  const mobileMenuToggle = document.getElementById('mobileMenuToggle');
  const mainNav = document.getElementById('mainNav');
  
  if (mobileMenuToggle && mainNav) {
    mobileMenuToggle.addEventListener('click', () => {
      mobileMenuToggle.classList.toggle('active');
      mainNav.classList.toggle('active');
      document.body.style.overflow = mainNav.classList.contains('active') ? 'hidden' : 'auto';
    });

    // Close menu when clicking nav links
    mainNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenuToggle.classList.remove('active');
        mainNav.classList.remove('active');
        document.body.style.overflow = 'auto';
      });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!mainNav.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
        mobileMenuToggle.classList.remove('active');
        mainNav.classList.remove('active');
        document.body.style.overflow = 'auto';
      }
    });
  }

  // ===== SMOOTH SCROLL =====
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // ===== SCROLL ANIMATIONS =====
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  // Observe elements with fade-in class
  document.querySelectorAll('.fade-in').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });

  // ===== INITIAL RENDER =====
  renderFeaturedRestaurants();
  renderRestaurants();

  // ===== SCROLL TO TOP BUTTON =====
  const scrollTopBtn = document.createElement('button');
  scrollTopBtn.className = 'scroll-to-top';
  scrollTopBtn.innerHTML = '↑';
  scrollTopBtn.setAttribute('aria-label', 'Scroll to top');
  document.body.appendChild(scrollTopBtn);

  // Show/hide scroll button
  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
      scrollTopBtn.classList.add('show');
    } else {
      scrollTopBtn.classList.remove('show');
    }
  });

  // Scroll to top on click
  scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  // ===== ADD TO CART TOAST NOTIFICATION =====
  function showToast(message, type = 'success') {
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.textContent = message;
    toast.style.cssText = `
      position: fixed;
      top: 100px;
      right: 20px;
      background: ${type === 'success' ? '#10B981' : '#EF4444'};
      color: white;
      padding: 1rem 1.5rem;
      border-radius: 12px;
      box-shadow: 0 8px 24px rgba(0,0,0,0.15);
      z-index: 9999;
      animation: slideInRight 0.3s ease, fadeOut 0.3s ease 2.7s;
      font-weight: 600;
    `;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 3000);
  }

  // Add toast animation styles
  const style = document.createElement('style');
  style.textContent = `
    @keyframes slideInRight {
      from { transform: translateX(400px); opacity: 0; }
      to { transform: translateX(0); opacity: 1; }
    }
    @keyframes fadeOut {
      from { opacity: 1; }
      to { opacity: 0; }
    }
  `;
  document.head.appendChild(style);

  // Make functions global
  window.applyFilters = applyFilters;
  window.resetFilters = resetFilters;
  window.toggleMenu = toggleMenu;
  window.addToCartQuick = addToCartQuick;
  window.closeMenuModal = closeMenuModal;
  window.showToast = showToast;
});

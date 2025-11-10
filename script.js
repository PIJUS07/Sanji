// script.js — dynamic restaurant rendering, search, cart, and form validation
document.addEventListener('DOMContentLoaded', () => {
  // sample data with real food images
  const restaurants = [
    {
      id: 1,
      name: 'Umami House',
      image: 'https://images.unsplash.com/photo-1604908177522-1bd2c8f2d3f6?auto=format&fit=crop&w=900&q=80',
      menu: [
        { name: 'Spicy Ramen', price: 12.99, foodImage: 'https://images.unsplash.com/photo-1582878826629-29b3f081b941?auto=format&fit=crop&w=400&q=80' },
        { name: 'Gyoza', price: 6.5, foodImage: 'https://images.unsplash.com/photo-1631299228527-dd47d90fee9d?auto=format&fit=crop&w=400&q=80' },
        { name: 'Matcha Cheesecake', price: 5.5, foodImage: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=400&q=80' }
      ]
    },
    {
      id: 2,
      name: 'Mediterraneo',
      image: 'https://images.unsplash.com/photo-1604908554020-df542f9d2f2b?auto=format&fit=crop&w=900&q=80',
      menu: [
        { name: 'Shawarma Plate', price: 10.5, foodImage: 'https://images.unsplash.com/photo-1599022107567-1da32ba42e10?auto=format&fit=crop&w=400&q=80' },
        { name: 'Falafel Bowl', price: 9.0, foodImage: 'https://images.unsplash.com/photo-1599599810694-b5ac4dd64b11?auto=format&fit=crop&w=400&q=80' },
        { name: 'Baklava', price: 4.5, foodImage: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=400&q=80' }
      ]
    },
    {
      id: 3,
      name: 'Bella Pizza',
      image: 'https://images.unsplash.com/photo-1548365328-8f8e1b7a4b7a?auto=format&fit=crop&w=900&q=80',
      menu: [
        { name: 'Margherita', price: 11.0, foodImage: 'https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?auto=format&fit=crop&w=400&q=80' },
        { name: 'Pepperoni', price: 12.5, foodImage: 'https://images.unsplash.com/photo-1628840042765-356cda07f04a?auto=format&fit=crop&w=400&q=80' },
        { name: 'Tiramisu', price: 6.0, foodImage: 'https://images.unsplash.com/photo-1571115177098-24ec42ed204d?auto=format&fit=crop&w=400&q=80' }
      ]
    }
  ];

  // DOM refs
  const restaurantsRoot = document.getElementById('restaurants');
  const searchInput = document.getElementById('searchInput');

  function formatPrice(p) { return `$${p.toFixed(2)}` }

  function renderRestaurants(list) {
    if (!restaurantsRoot) return;
    restaurantsRoot.innerHTML = '';
    if (!list.length) {
      restaurantsRoot.innerHTML = '<p class="muted">No restaurants match your search.</p>';
      return;
    }
    list.forEach(r => {
      const card = document.createElement('article');
      card.className = 'card';

      card.innerHTML = `
        <div class="media" style="background-image:url('${r.image}')"></div>
        <div class="card-body">
          <h3>${r.name}</h3>
          <ul class="menu-list">
            ${r.menu.slice(0,3).map((m, idx)=>`<li class="menu-item"><div style="display:flex;gap:0.5rem;align-items:center"><img src="${m.foodImage}" alt="${m.name}" style="width:60px;height:60px;border-radius:6px;object-fit:cover"/><div><strong>${m.name}</strong></div></div><span><span class="price">${formatPrice(m.price)}</span> <button class="btn add-btn" data-restaurant="${r.id}" data-index="${idx}">Add</button></span></li>`).join('')}
          </ul>
        </div>
        <div class="card-actions">
          <span class="muted">From ${formatPrice(r.menu[0].price)}</span>
          <button class="btn" data-id="${r.id}">View</button>
        </div>
      `;

      // hook add buttons
      card.querySelectorAll('.add-btn').forEach(btn=>{
        btn.addEventListener('click', ()=>{
          const rid = Number(btn.dataset.restaurant);
          const idx = Number(btn.dataset.index);
          const rest = restaurants.find(x=>x.id===rid);
          const item = rest.menu[idx];
          addToCart({ id: `${rid}-${idx}`, restaurant: rest.name, name: item.name, price: item.price, qty: 1 });
        });
      });

      // view button demo
      card.querySelector('button[data-id]')?.addEventListener('click', ()=>{
        alert(`Viewing ${r.name}. In a full app this would navigate to a restaurant page.`);
      });

      restaurantsRoot.appendChild(card);
    });
  }

  // initial render
  renderRestaurants(restaurants);

  // search filtering (by restaurant name or dish name)
  if (searchInput) {
    searchInput.addEventListener('input', ()=>{
      const q = searchInput.value.trim().toLowerCase();
      if (!q) return renderRestaurants(restaurants);
      const filtered = restaurants.filter(r => {
        if (r.name.toLowerCase().includes(q)) return true;
        return r.menu.some(m => m.name.toLowerCase().includes(q));
      });
      renderRestaurants(filtered);
    });
  }

  // CART: localStorage-based cart with basic helpers
  const CART_KEY = 'sanji_cart';

  function getCart(){
    try{ return JSON.parse(localStorage.getItem(CART_KEY)) || [] }catch(e){ return [] }
  }

  function saveCart(cart){
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
    updateCartCount();
  }

  function addToCart(item){
    const cart = getCart();
    const existing = cart.find(i=>i.id===item.id);
    if(existing){ existing.qty += item.qty } else { cart.push(item) }
    saveCart(cart);
    // feedback
    alert(`${item.name} added to cart.`);
  }

  function removeFromCart(itemId){
    const cart = getCart().filter(i=>i.id!==itemId);
    saveCart(cart);
  }

  function updateQty(itemId, qty){
    const cart = getCart();
    const it = cart.find(i=>i.id===itemId);
    if(!it) return;
    it.qty = Math.max(0, qty);
    const filtered = cart.filter(i=>i.qty>0);
    saveCart(filtered);
  }

  function cartCount(){
    return getCart().reduce((s,i)=>s+i.qty,0);
  }

  function updateCartCount(){
    const el = document.getElementById('cartCount');
    if(el) el.textContent = String(cartCount());
  }

  // expose for other pages
  window.SanjiCart = { getCart, saveCart, addToCart, removeFromCart, updateQty };

  // init cart count
  updateCartCount();

  // CONTACT FORM VALIDATION
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
      // simple email check
      if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
        feedback.style.color = 'crimson';
        feedback.textContent = 'Please enter a valid email.';
        return;
      }
      feedback.style.color = 'green';
      feedback.textContent = 'Thanks! Your message has been sent (demo).';
      contactForm.reset();
    });
  }

  // SIGNUP VALIDATION
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
        fb.style.color = 'crimson'; fb.textContent = 'Please complete all fields.'; return;
      }
      if (pw.length < 6) { fb.style.color='crimson'; fb.textContent = 'Password must be at least 6 characters.'; return; }
      if (pw !== conf) { fb.style.color='crimson'; fb.textContent = 'Passwords do not match.'; return; }
      fb.style.color='green'; fb.textContent = 'Account created (demo). You can now log in.';
      signupForm.reset();
    });
  }

  // LOGIN VALIDATION
  const loginForm = document.getElementById('loginForm');
  if (loginForm) {
    loginForm.addEventListener('submit', (e)=>{
      e.preventDefault();
      const email = document.getElementById('loginEmail').value.trim();
      const pw = document.getElementById('loginPassword').value;
      const fb = document.getElementById('loginFeedback');
      fb.textContent = '';
      if (!email || !pw) { fb.style.color='crimson'; fb.textContent='Please fill email and password.'; return; }
      if (pw.length < 6) { fb.style.color='crimson'; fb.textContent='Password must be at least 6 chars.'; return; }
      fb.style.color='green'; fb.textContent='Login successful (demo).';
      loginForm.reset();
    });
  }

  // set year in footers
  const years = new Date().getFullYear();
  document.querySelectorAll('[id^="year"]').forEach(el=>{ el.textContent = years });
});

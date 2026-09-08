const WHATSAPP_NUMBER = '2348166352271';

const products = {
  school: [
    {
      name: "Dragon Totem Back-to-School Pack",
      model: "RM-2007F4",
      meta: "1000ml big flask · 350ml small flask · side dish · 500ml water bottle · spoon & fork · FREE lunch bag",
      price: null,
      campaign: "Mama's Promise"
    },
    {
      name: "Dragon Totem 5-in-1 Back-to-School Pack",
      model: "RM-2007F6",
      meta: "800ml big food flask · 650ml small food flask · 500ml water bottle · side dish · spoon & fork · FREE lunch bag",
      price: null,
      campaign: "Mama's Promise"
    }
  ],
  water: [
    {name:"Dragon Water Flask RM-500ML A",model:"RM-500ML A",meta:"Compact everyday water flask",price:11500,campaign:"Her Moment"},
    {name:"Dragon Water Flask RM-1.0L",model:"RM-1.0L",meta:"1.0L everyday capacity",price:20000,campaign:"Her Moment"},
    {name:"Dragon Water Flask RM-1.2L WA",model:"RM-1.2L WA",meta:"1.2L · double-wall vacuum insulation · leakproof + packable",price:18500,campaign:"Her Moment"},
    {name:"Dragon Water Flask RM-1.5L",model:"RM-1.5L",meta:"Larger-capacity hydration for long days",price:26000,campaign:"Her Moment"}
  ],
  food: [
    {name:"Dragon Food Flask RM-800FA",model:"RM-800FA",meta:"800ml · 18/8 food-grade stainless steel · leak-resistant lid",price:20000,campaign:"Desk Goals"},
    {name:"Dragon Food Flask RM-1.0FA",model:"RM-1.0FA",meta:"1.0L · built for packed meals and workdays",price:21000,campaign:"Desk Goals"},
    {name:"Dragon Food Flask RM-1.3L",model:"RM-1.3L",meta:"1.3L food flask for a fuller lunch",price:27000,campaign:"Desk Goals"},
    {name:"Dragon Food Flask RM-1.4L",model:"RM-1.4L",meta:"1.4L food flask for long days and larger portions",price:26000,campaign:"Desk Goals"}
  ]
};

const money = value => new Intl.NumberFormat('en-NG', {style:'currency',currency:'NGN',maximumFractionDigits:0}).format(value);

function waUrl(message){
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function orderMessage(product, quantity){
  const qty = Number(quantity || 1);
  const buyingMode = qty > 1 ? 'Please confirm the best retail/wholesale price available for this quantity.' : 'Please confirm availability, colour options and delivery cost.';
  return `Hello Royal Molson. I want ${product.name} (${product.model}) from the ${product.campaign} campaign. Quantity: ${qty}. ${buyingMode}`;
}

function cardTemplate(product){
  const price = product.price ? `<span class="price">${money(product.price)}</span><span class="price-note">current online retail price</span>` : `<span class="price">Price on request</span><span class="price-note">confirm in WhatsApp</span>`;
  return `
    <article class="product-card" data-model="${product.model}">
      <div class="product-visual" aria-label="Temporary product visual for ${product.name}"><div class="mini-flask" aria-hidden="true"></div></div>
      <span class="model">${product.model}</span>
      <h3>${product.name}</h3>
      <p class="product-meta">${product.meta}</p>
      <div class="price-row">${price}</div>
      <div class="qty-control"><label class="sr-only" for="qty-${product.model.replace(/[^a-zA-Z0-9]/g,'')}">Quantity</label><input id="qty-${product.model.replace(/[^a-zA-Z0-9]/g,'')}" class="qty" type="number" min="1" value="1" aria-label="Quantity"><span class="price-note">units</span></div>
      <div class="card-actions">
        <a class="button button-primary buy-card" href="#">Chat to buy</a>
        <a class="button button-outline quote-card-action" href="#">Wholesale</a>
      </div>
    </article>`;
}

function renderProducts(list, target){
  const root = document.querySelector(target);
  if (!root) return;
  root.innerHTML = list.map(cardTemplate).join('');
  root.querySelectorAll('.product-card').forEach((card, i) => {
    const product = list[i];
    const qty = card.querySelector('.qty');
    card.querySelector('.buy-card').addEventListener('click', e => {
      e.preventDefault();
      window.open(waUrl(orderMessage(product, qty.value)), '_blank', 'noopener');
    });
    card.querySelector('.quote-card-action').addEventListener('click', e => {
      e.preventDefault();
      const message = `Hello Royal Molson. I am interested in wholesale pricing for ${product.name} (${product.model}). Quantity: ${qty.value}. Please send the applicable wholesale price and MOQ information.`;
      window.open(waUrl(message), '_blank', 'noopener');
    });
  });
}

renderProducts(products.school, '#school-products');
renderProducts(products.water, '#water-product-grid');
renderProducts(products.food, '#food-product-grid');

const generalMessages = {
  general: 'Hello Royal Molson. I want to buy a Dragon Totem product. Please help me choose the right model, colour and quantity.',
  mama: "Hello Royal Molson. I am interested in the Mama's Promise Back-to-School Lunch Pack. Please send the available models, colours, current price and delivery options."
};

document.querySelectorAll('[data-wa]').forEach(link => {
  const key = link.dataset.wa;
  link.href = waUrl(generalMessages[key] || generalMessages.general);
  link.target = '_blank';
  link.rel = 'noopener';
});

const quoteForm = document.querySelector('#quote-form');
quoteForm?.addEventListener('submit', e => {
  e.preventDefault();
  const data = new FormData(quoteForm);
  const message = `Hello Royal Molson. I want a wholesale quote. Product/model: ${data.get('product')}. Quantity: ${data.get('quantity')}. Delivery city: ${data.get('city')}. Please confirm the applicable wholesale price, MOQ and delivery terms.`;
  window.open(waUrl(message), '_blank', 'noopener');
});

const navToggle = document.querySelector('.nav-toggle');
const mainNav = document.querySelector('.main-nav');
navToggle?.addEventListener('click', () => {
  const open = mainNav.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(open));
});
mainNav?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  mainNav.classList.remove('open');
  navToggle?.setAttribute('aria-expanded','false');
}));

document.querySelector('#year').textContent = new Date().getFullYear();

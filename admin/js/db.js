const DEFAULT_DATA = {
    services: [
        { id:1, title:"Web & Mobile Development", description:"We build responsive, fast-loading websites and cross-platform mobile applications.", icon:"fa-solid fa-laptop-code", tags:["React","Next.js","Flutter"], btnText:"Get a Quote", btnUrl:"#contact", status:"visible", sortOrder:1 },
        { id:2, title:"Branding & Creative Design", description:"From logo design to full brand identity, we craft visuals that tell your story.", icon:"fa-solid fa-palette", tags:["Logo","Brand Identity","UX/UI"], btnText:"See Our Work", btnUrl:"#contact", status:"visible", sortOrder:2 },
        { id:3, title:"Video Editing & Motion", description:"Professional video editing, motion graphics, and animation services.", icon:"fa-solid fa-video", tags:["Editing","Motion","VFX"], btnText:"View Portfolio", btnUrl:"#contact", status:"visible", sortOrder:3 },
        { id:4, title:"Digital Marketing & SEO", description:"Data-driven marketing strategies, SEO optimization, and paid ad campaigns.", icon:"fa-solid fa-chart-line", tags:["SEO","Ads","Social Media"], btnText:"Boost My Traffic", btnUrl:"#contact", status:"visible", sortOrder:4 },
        { id:5, title:"ERP & Automation", description:"Streamline operations with custom ERP solutions and workflow automation.", icon:"fa-solid fa-gears", tags:["ERP","n8n","Odoo"], btnText:"Automate Now", btnUrl:"#contact", status:"visible", sortOrder:5 },
        { id:6, title:"E-commerce Solutions", description:"End-to-end e-commerce development from WooCommerce to custom marketplaces.", icon:"fa-solid fa-cart-shopping", tags:["WooCommerce","Shopify","Payment"], btnText:"Start Selling", btnUrl:"#contact", status:"visible", sortOrder:6 },
        { id:7, title:"UI/UX Design", description:"Intuitive interfaces and user-centered design for web and mobile applications.", icon:"fa-solid fa-pen-ruler", tags:["Figma","Prototyping","Design System","User Research"], btnText:"See Our Process", btnUrl:"#contact", status:"visible", sortOrder:7 },
        { id:8, title:"Cloud & Hosting", description:"Reliable hosting, VPS, domain management, and cloud infrastructure solutions.", icon:"fa-solid fa-cloud", tags:["VPS","Domain","SSL","Maintenance"], btnText:"Get Started", btnUrl:"#contact", status:"visible", sortOrder:8 }
    ],
    addons: [
        { id:1, title:"Extra 10 Canva posts", price:200, currency:"MAD", period:"", description:"Extra Canva posts for your social media", status:"visible", sortOrder:1 },
        { id:2, title:"Monthly Instagram management", price:600, currency:"MAD", period:"/mo", description:"Full Instagram account management monthly", status:"visible", sortOrder:2 },
        { id:3, title:"Add a 2nd page", price:300, currency:"MAD", period:"", description:"Extra page added to your website", status:"visible", sortOrder:3 },
        { id:4, title:"Google Maps photos + review replies", price:250, currency:"MAD", period:"", description:"Google Maps optimization with photos and replies", status:"visible", sortOrder:4 },
        { id:5, title:"WhatsApp catalogue setup", price:200, currency:"MAD", period:"", description:"WhatsApp Business catalogue setup", status:"visible", sortOrder:5 }
    ],
    packages: [
        { id:1, title:"Basic", price:499, currency:"MAD", description:"One-time setup · delivered in 3 days", features:["Simple 1-page website","Mobile-responsive design","Contact form integration","Social media links","Canva logo (basic)"], popular:false, btnText:"Choose Basic", btnUrl:"#contact", accentColor:"#0396FA", status:"visible", sortOrder:1 },
        { id:2, title:"Standard", price:1199, currency:"MAD", description:"One-time setup · delivered in 5 days", features:["Everything in Basic","1-page website with photos + contact","Facebook page + cover design","10 designed Canva posts","Professional logo"], popular:true, btnText:"Choose Standard", btnUrl:"#contact", accentColor:"#005CD8", status:"visible", sortOrder:2 },
        { id:3, title:"Premium", price:1999, currency:"MAD", description:"One-time setup · delivered in 7 days", features:["Everything in Standard","Multi-page website","20 posts + 5 story templates","Google Maps optimized","1-month free support"], popular:false, btnText:"Choose Premium", btnUrl:"#contact", accentColor:"#07DDFF", status:"visible", sortOrder:3 }
    ],
    projects: [
        { id:1, title:"E-Commerce Platform", client:"TechStore Maroc", category:"Web Development", shortDescription:"Full-featured online store with secure payments.", fullDescription:"Complete e-commerce platform with product catalog, shopping cart, and payment gateway.", featuredImage:"", gallery:[], technologies:["React","Node.js","MongoDB"], websiteUrl:"", completionDate:"2025-06-15", status:"published", featured:true, sortOrder:1, slug:"e-commerce-platform", seoTitle:"", seoDescription:"" },
        { id:2, title:"Brand Identity Suite", client:"Casa Design Studio", category:"Branding", shortDescription:"Complete brand identity including logo and guidelines.", fullDescription:"Comprehensive brand identity with logo, color palette, and guidelines document.", featuredImage:"", gallery:[], technologies:["Figma","Illustrator"], websiteUrl:"", completionDate:"2025-04-20", status:"published", featured:true, sortOrder:2, slug:"brand-identity-suite", seoTitle:"", seoDescription:"" },
        { id:3, title:"Corporate Web App", client:"Groupe Omnium", category:"Web Development", shortDescription:"Internal management platform with dashboards.", fullDescription:"Corporate web application with interactive dashboards and reporting.", featuredImage:"", gallery:[], technologies:["Next.js","TypeScript","PostgreSQL"], websiteUrl:"", completionDate:"2025-08-01", status:"published", featured:false, sortOrder:3, slug:"corporate-web-app", seoTitle:"", seoDescription:"" },
        { id:4, title:"Real Estate Portal", client:"Immobilière Tanger", category:"Web Development", shortDescription:"Property listing website with virtual tours.", fullDescription:"Real estate portal with property search, map integration, and virtual tours.", featuredImage:"", gallery:[], technologies:["Vue.js","Laravel","MySQL"], websiteUrl:"", completionDate:"2025-03-10", status:"published", featured:false, sortOrder:4, slug:"real-estate-portal", seoTitle:"", seoDescription:"" },
        { id:5, title:"Mobile Fitness App", client:"FitLife Maroc", category:"Mobile App", shortDescription:"Cross-platform fitness tracking app.", fullDescription:"Fitness app with workout tracking, nutrition logs, and progress charts.", featuredImage:"", gallery:[], technologies:["Flutter","Firebase","Dart"], websiteUrl:"", completionDate:"2025-07-22", status:"published", featured:true, sortOrder:5, slug:"mobile-fitness-app", seoTitle:"", seoDescription:"" },
        { id:6, title:"Restaurant Management System", client:"Le Détroit Restaurant", category:"Web Development", shortDescription:"Complete POS and management system.", fullDescription:"Restaurant management system with POS, online ordering, and reservations.", featuredImage:"", gallery:[], technologies:["React","Node.js","MongoDB"], websiteUrl:"", completionDate:"2025-05-30", status:"published", featured:false, sortOrder:6, slug:"restaurant-management-system", seoTitle:"", seoDescription:"" }
    ],
    blogs: [
        { id:1, title:"Comment choisir la bonne technologie pour votre projet web", slug:"choisir-technologie-projet-web", category:"Web Development", tags:["React","conseils"], featuredImage:"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='300'%3E%3Cdefs%3E%3ClinearGradient id='g'%3E%3Cstop offset='0%25' stop-color='%23005CD8'/%3E%3Cstop offset='100%25' stop-color='%230396FA'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect fill='url(%23g)' width='600' height='300'/%3E%3Ctext x='300' y='150' text-anchor='middle' fill='rgba(255,255,255,0.15)' font-size='80' font-weight='800' font-family='sans-serif'%3EW%3C/text%3E%3Ctext x='300' y='220' text-anchor='middle' fill='white' font-size='20' font-weight='600' font-family='sans-serif'%3EWeb%20Development%3C/text%3E%3C/svg%3E", content:"<p>Choisir la bonne technologie pour votre projet web est crucial.</p>", excerpt:"Découvrez les critères pour sélectionner la stack technique idéale.", author:"Mediasoft", publishDate:"2025-09-15", readingTime:"5 min", seoTitle:"", seoDescription:"", status:"published" },
        { id:2, title:"L'importance du branding pour les PME marocaines", slug:"importance-branding-pme-maroc", category:"Branding", tags:["branding","Maroc"], featuredImage:"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='300'%3E%3Cdefs%3E%3ClinearGradient id='g'%3E%3Cstop offset='0%25' stop-color='%236C3CF5'/%3E%3Cstop offset='100%25' stop-color='%238B5CF6'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect fill='url(%23g)' width='600' height='300'/%3E%3Ctext x='300' y='150' text-anchor='middle' fill='rgba(255,255,255,0.15)' font-size='80' font-weight='800' font-family='sans-serif'%3EB%3C/text%3E%3Ctext x='300' y='220' text-anchor='middle' fill='white' font-size='20' font-weight='600' font-family='sans-serif'%3EBranding%3C/text%3E%3C/svg%3E", content:"<p>Le branding n'est pas réservé aux grandes entreprises.</p>", excerpt:"Pourquoi le branding est un investissement stratégique pour les PME.", author:"Mediasoft", publishDate:"2025-08-20", readingTime:"4 min", seoTitle:"", seoDescription:"", status:"published" },
        { id:3, title:"Guide complet du SEO pour les sites e-commerce", slug:"guide-seo-ecommerce", category:"Digital Marketing", tags:["SEO","e-commerce"], featuredImage:"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='300'%3E%3Cdefs%3E%3ClinearGradient id='g'%3E%3Cstop offset='0%25' stop-color='%2310B981'/%3E%3Cstop offset='100%25' stop-color='%2314B8A6'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect fill='url(%23g)' width='600' height='300'/%3E%3Ctext x='300' y='150' text-anchor='middle' fill='rgba(255,255,255,0.15)' font-size='80' font-weight='800' font-family='sans-serif'%3ES%3C/text%3E%3Ctext x='300' y='220' text-anchor='middle' fill='white' font-size='20' font-weight='600' font-family='sans-serif'%3EDigital%20Marketing%3C/text%3E%3C/svg%3E", content:"<p>Le SEO est essentiel pour générer du trafic organique.</p>", excerpt:"Tout ce que vous devez savoir pour optimiser votre boutique en ligne.", author:"Mediasoft", publishDate:"2025-10-01", readingTime:"7 min", seoTitle:"", seoDescription:"", status:"published" }
    ],
    testimonials: [
        { id:1, quote:"Mediasoft a complètement transformé notre présence en ligne. Les photos professionnelles et le site moderne ont augmenté nos réservations directes de 180%. Un investissement très rentable !", author:"Ezenhauph Transport", role:"Transport & Logistique, Tanger", avatar:"ET", color:"gradient-1", sortOrder:1, status:"published" },
        { id:2, quote:"Notre boutique en ligne est devenue notre principal canal de vente grâce à Mediasoft. Site rapide, beau et facile à gérer. Les ventes ont triplé en 6 mois. Équipe très professionnelle.", author:"LKHAMAL", role:"Immobilier, Tanger", avatar:"LK", color:"gradient-2", sortOrder:2, status:"published" },
        { id:3, quote:"Un site corporate à la hauteur de notre groupe. Mediasoft a compris nos enjeux B2B et créé une plateforme qui reflète notre stature de leader. Excellent travail et suivi impeccable.", author:"Optimum Travel", role:"Conseil Touristique & Hôtelier", avatar:"OT", color:"gradient-3", sortOrder:3, status:"published" },
        { id:4, quote:"Un logiciel sur mesure qui a transformé notre gestion quotidienne. Inventaire, facturation, finances — tout est centralisé et efficace.", author:"Nermin", role:"Distribution de Produits de Mer", avatar:"NM", color:"gradient-4", sortOrder:4, status:"published" },
        { id:5, quote:"Notre site web a changé la donne. Les clients adorent le menu en ligne et les commandes ont augmenté de façon significative.", author:"Buga Buga Pizzeria", role:"Restauration, Tanger", avatar:"BB", color:"gradient-5", sortOrder:5, status:"published" }
    ],
    messages: [],
    clients: [],
    finance: { transactions: [
        { id:1, type:"income", category:"ERP", description:"ezenhauph update TETOUAN", amount:1000, date:"2026-06-30" },
        { id:2, type:"income", category:"Web Development", description:"ezenhauph update website", amount:1500, date:"2026-04-01" },
        { id:3, type:"income", category:"Web Development", description:"ezenhauph update hjar nhal", amount:2000, date:"2026-03-31" },
        { id:4, type:"income", category:"ERP", description:"ezenhauph paie", amount:6500, date:"2026-01-01" },
        { id:5, type:"income", category:"Web Development", description:"lkhamal website", amount:3000, date:"2025-07-31" },
        { id:6, type:"income", category:"ERP", description:"nermin fish", amount:4000, date:"2025-03-31" },
        { id:7, type:"income", category:"Web Development", description:"ezenhauph app+ website", amount:20000, date:"2025-01-01" },
        { id:8, type:"income", category:"Web Development", description:"trfaoui website", amount:3000, date:"2022-05-11" }
    ] },
    settings: {
        companyName:"Mediasoft", logo:"assets/images/logo.png", email:"contact.adilraffas@gmail.com",
        phone:"0708060819", whatsapp:"212708060819", address:"Tanger, Maroc",
        social:{ facebook:"https://www.facebook.com/mediasoft.10", instagram:"https://www.instagram.com/mediasoft.ma/", github:"#" },
        seo:{ title:"Mediasoft – Agence Web & Digitale | Tanger", description:"Mediasoft, votre agence web à Tanger." }
    }
};

const DB = {
    _cache: {},
    _ready: false,
    _queue: [],

    async init() {
        this._cache = {};
        const stores = Object.keys(DEFAULT_DATA);
        for (const store of stores) {
            let data = null;
            const ls = localStorage.getItem('mediasoft_' + store);
            if (ls) { try { data = JSON.parse(ls); } catch {} }
            if (!data) {
                data = JSON.parse(JSON.stringify(DEFAULT_DATA[store]));
                try { localStorage.setItem('mediasoft_' + store, JSON.stringify(data)); } catch {}
            }
            this._cache[store] = data;
        }
        this._ready = true;
        while (this._queue.length) {
            const [store, data] = this._queue.shift();
            try { localStorage.setItem('mediasoft_' + store, JSON.stringify(data)); } catch {}
        }
    },

    get(store) {
        if (this._cache[store] !== undefined) return this._cache[store];
        const fallback = DEFAULT_DATA[store] || (store === 'finance' ? {transactions:[]} : []);
        return JSON.parse(JSON.stringify(fallback));
    },

    set(store, data) {
        this._cache[store] = data;
        if (!this._ready) { this._queue.push([store, data]); return; }
        try {
            localStorage.setItem('mediasoft_' + store, JSON.stringify(data));
        } catch {
            // Quota exceeded — free space by removing other mediasoft keys, retry once
            try {
                Object.keys(localStorage).filter(k => k.startsWith('mediasoft_') && k !== 'mediasoft_' + store).forEach(k => localStorage.removeItem(k));
                localStorage.setItem('mediasoft_' + store, JSON.stringify(data));
            } catch {}
        }
    },

    getById(store, id) {
        const data = this.get(store);
        if (store === 'finance') return (data.transactions || []).find(t => t.id === id);
        return data.find(item => item.id === id);
    },

    add(store, item) {
        const data = this.get(store);
        item.id = Date.now() + Math.floor(Math.random() * 1000);
        if (store === 'finance') {
            (data.transactions || (data.transactions = [])).push(item);
        } else {
            item.sortOrder = data.length + 1;
            data.push(item);
        }
        this.set(store, data);
        return item;
    },

    update(store, id, updates) {
        const data = this.get(store);
        if (store === 'finance') {
            const idx = (data.transactions || []).findIndex(t => t.id === id);
            if (idx === -1) return null;
            data.transactions[idx] = { ...data.transactions[idx], ...updates };
        } else {
            const idx = data.findIndex(item => item.id === id);
            if (idx === -1) return null;
            data[idx] = { ...data[idx], ...updates };
        }
        this.set(store, data);
    },

    delete(store, id) {
        const data = this.get(store);
        if (store === 'finance') {
            data.transactions = (data.transactions || []).filter(t => t.id !== id);
        } else {
            this.set(store, data.filter(item => item.id !== id));
            return;
        }
        this.set(store, data);
    },

    reorder(store, ids) {
        const data = this.get(store);
        const ordered = ids.map((id, i) => {
            const item = data.find(d => d.id === id);
            if (item) item.sortOrder = i + 1;
            return item;
        }).filter(Boolean);
        const remaining = data.filter(d => !ids.includes(d.id));
        this.set(store, [...ordered, ...remaining]);
    },

    toast(message, type = 'success') {
        const existing = document.querySelector('.toast');
        if (existing) existing.remove();
        const t = document.createElement('div');
        t.className = 'toast toast-' + type;
        t.textContent = message;
        document.body.appendChild(t);
        requestAnimationFrame(() => t.classList.add('show'));
        setTimeout(() => { t.classList.remove('show'); setTimeout(() => t.remove(), 400); }, 3000);
    }
};

# BarXX SaaS Platform

## 🎯 Doel

Een moderne webapp waar:

* Gebruikers kunnen registreren en inloggen
* Een user dashboard hebben
* Digitale producten kunnen kopen (ZIP downloads)
* Admins alles kunnen beheren

---

## 🧱 Tech Stack (Beste keuze 2026)

### Frontend

* Next.js (App Router)
* React
* Tailwind CSS

### Backend

* Next.js API routes (voor simpele endpoints)
* Node.js + Express (voor complexere logica)

### Database + Auth

* Supabase

### Payments

* Stripe

### File Storage

* Supabase Storage

### Hosting

* Frontend: Vercel
* Backend: Railway

---

## 📁 Project Structuur

```
/project
  /apps
    /web (Next.js frontend + API routes)
    /api (Express backend)
  /packages
    /ui (shared components)
    /lib (shared utils)
```

---

## 🔐 Authenticatie Flow

1. User registreert via Supabase Auth
2. JWT/session wordt opgeslagen
3. Frontend gebruikt session voor requests
4. Backend valideert user via token

---

## 🧑‍💻 User Features

* Register / Login
* Dashboard
* Aankoopgeschiedenis
* Download pagina
* Profiel instellingen

---

## 🛠️ Admin Features

* Admin dashboard
* Users beheren
* Producten uploaden (ZIP files)
* Orders bekijken
* Statistieken

---

## 🛒 Product Flow

1. Admin upload ZIP bestand
2. Wordt opgeslagen in Supabase Storage
3. Product wordt aangemaakt in database
4. User koopt via Stripe
5. Webhook bevestigt betaling
6. User krijgt toegang tot download

---

## 💳 Payment Flow (Stripe)

1. User klikt "Buy"
2. Stripe Checkout start
3. Na betaling -> webhook
4. Backend:

   * verifieert betaling
   * maakt order aan
   * koppelt product aan user

---

## 📦 Download Security

* Downloads alleen via backend
* Signed URLs (tijdelijk geldig)
* Check of user betaald heeft

---

## 🔌 API Structuur

### Next.js API

* /api/auth
* /api/user

### Express API

* /api/products
* /api/orders
* /api/admin
* /api/webhooks/stripe

---

## 🗄️ Database Tabellen (Supabase)

### users

* id
* email
* role (user/admin)

### products

* id
* name
* description
* price
* file_url

### orders

* id
* user_id
* product_id
* status

---

## 🚀 Deployment Flow

1. Code push naar GitHub
2. Vercel deploy frontend
3. Railway deploy backend
4. Supabase blijft extern

---

## 🔒 Security Basics

* Role-based access (admin/user)
* JWT validation
* Rate limiting
* File access via backend only

---

## 🧠 Future Upgrades

* Subscriptions
* Coupons
* License keys
* API keys voor users
* Multi-tenant support

---

## ✅ Samenvatting

Start simpel:

* Next.js + Supabase + Stripe

Later uitbreiden:

* Express backend
* Meer schaalbare architectuur



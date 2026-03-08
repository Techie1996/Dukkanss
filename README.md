## Dukaans Ecommerce Platform

Premium, production-grade ecommerce platform inspired by high‑end Shopify storefronts.

### Tech Stack

- **Frontend**: Next.js 14 (App Router), TypeScript, TailwindCSS, Framer Motion, Zustand
- **Backend**: Node.js, Express.js, MongoDB, Mongoose, JWT, bcrypt
- **Payments**: Stripe Checkout
- **Deploy**: Frontend on Vercel, Backend on Render

### Apps

- `frontend` – Next.js storefront + admin dashboard
- `backend` – Express REST API (auth, products, collections, cart, orders, Stripe)

### Getting Started

1. Install dependencies:

   ```bash
   cd backend && npm install
   cd ../frontend && npm install
   ```

2. Copy the example env files and fill in real values:

   ```bash
   cp backend/.env.example backend/.env
   cp frontend/.env.example frontend/.env.local
   ```

3. Run the backend:

   ```bash
   cd backend
   npm run dev
   ```

4. Run the frontend:

   ```bash
   cd frontend
   npm run dev
   ```

5. Open the storefront at `http://localhost:3000`.

### Deployment

- **Frontend (Vercel)**: Point to `frontend` directory, set env vars from `.env.example`.
- **Backend (Render)**: Point to `backend` directory, use `npm start`, add env vars from `.env.example`.


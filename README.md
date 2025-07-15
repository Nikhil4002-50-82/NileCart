# NileCart

NileCart is a full-stack eCommerce web application built using React, Express.js, and Supabase.

## Getting Started

Follow the steps below to run the project locally.

### 1. Clone the Repository

```bash
git clone https://github.com/Nikhil4002-50-82/NileCart.git
cd NileCart
```

### 2. Install Dependencies

#### For the React Frontend (client)

```bash
cd client
npm install
```

#### For the Express Backend (server)

In a separate terminal window:

```bash
cd server
npm install
```

### 3. Run the Project

#### Start the Frontend

```bash
cd client
npm start
```

Runs the React app on http://localhost:5173

#### Start the Backend

In a separate terminal:

```bash
cd server
npm start
```

Runs the Express API on http://localhost:3000

## Environment Variables

In the `server/` folder, create a `.env` file with the following:

```env
SUPABASE_URL=your-supabase-url
SUPABASE_KEY=your-supabase-anon-key
```

## Supabase Tables (Run in Supabase SQL Editor)

```sql
-- Products table
create table if not exists products (
  productid integer primary key,
  title text,
  price numeric,
  description text,
  category text,
  image text,
  rate numeric,
  count integer
);

-- Users table
create table if not exists auth (
  id uuid default gen_random_uuid() primary key,
  name text,
  phoneno text,
  username text unique,
  password text
);

-- Cart table
create table if not exists cart (
  id uuid default gen_random_uuid() primary key,
  userid uuid references auth(id) on delete cascade,
  productid integer references products(productid),
  quantity integer
);
```

## Features

- Browse products
- Register and log in as a user
- Add products to cart
- View cart and total
- Delete items from cart

## Tech Stack

- Frontend: React, Tailwind CSS
- Backend: Express.js, Supabase
- Database: PostgreSQL (via Supabase)

## Author

Developed by Nikhil R Nambiar

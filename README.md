# 🔗 Smol.link — The Smol URL Shortener with Big Ambitions

Welcome to **Smol.link**, the place where long URLs go to get a haircut. 💇‍♂️ Whether you’re sharing a 300-character link to a recipe blog or a mysterious Google Doc, Smol.link shrinks it down — with style, speed, and scalability.

---

## 🧰 Tech Stack (What’s Under the Hood)

  Here’s what’s powering this smol beast — and why:

- **Express.js** – The tried-and-true Node.js framework. Like the duct tape of backend development: fast, lightweight, and it *just works*.
- **TypeScript** – Because catching errors *before* deploying to prod is a good time.
- **PostgreSQL (via Neon)** – It's SQL, it's relational, it's reliable. We’re not trying to reinvent the wheel.
- **Prisma ORM** – Because writing raw SQL is like speaking Latin. Cool, but painful.
- **Redis Cloud** – Fast is fun. Redis makes our redirects blazing quick (like instant noodles but with cache).
- **EJS + Tailwind CSS** – EJS is simple, effective, and avoids React’s overhead for a tiny project. And Tailwind? That’s just drip for your frontend.

---

## 🧠 So… How Does It Work?

When you submit a long, awkward URL into the Smol.link form:

1. The server first checks if the exact same URL already exists in the database — because why duplicate?
2. If it exists, it returns the existing short link.
3. If not, it generates a smol, unique slug using Base62 (6–8 characters), saves it in the database, and caches it in Redis for *zoom zoom* redirects.
4. When someone visits the short URL, Redis is checked first (because Redis is basically the Formula 1 of data), and if it’s not there, the app falls back to the database and then caches it.

Efficiency + Speed = Happy URLs. 🎉

---

## 🎨 Frontend Features

- ✨ Responsive, modern design thanks to Tailwind CSS
- ✍️ Input form with client-side validation
- ⚡ AJAX-based shortening (no page reloads!)
- 📋 Copy-to-clipboard button
- 🌀 Loading spinners and error messages that don’t scream at you
- 🌈 Gradient backgrounds because… aesthetic.

---

## 🛠️ Local Setup (a.k.a. Make It Work On Your Machine)

1. **Clone the repo & install dependencies**:
   ```bash
   git clone https://github.com/yourusername/smol.link.git
   cd smol.link
   npm i
2. Create a .env in your root directory using format
   ```bash
   DATABASE_URL=your_postgres_connection_string
   PORT=3000
   HOST_DOMAIN=http://localhost:3000
   REDIS_PORT=your_redis_port
   REDIS_USERNAME=your_redis_user
   REDIS_PASSWORD=your_redis_password
   REDIS_HOST=your_redis_host
3. Generate Prisma Client
   ```bash
   npx prism generate
4. Run development server
     ```bash
     npm run dev

## 🚀 Scope for Improvement 
🧠 Redis Lookup for Duplicate URLs

Right now, we check only the database for existing URLs. Introducing Redis here too could make duplication checks even faster.

## 💌 Final Words

**Smol.link** is simple in concept — just a tiny app that shortens URLs — but it’s built with some seriously scalable tech under the hood. 

Bug reports? Ideas? Curious improvements? Bring ’em on. This smol app is here to teach, grow, and scale with you. 🌱

Made with ❤️, Redis ⚡, and a pinch of TypeScript.

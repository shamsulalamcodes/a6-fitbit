# 💪 FitLog — Workout Library

A dark, no-nonsense gym companion built with Next.js. Browse a library of workouts, drop lifts into **Today's Plan**, save others for later, and watch your session numbers add up in real time — no sign-up, no clutter, just log and lift.

**🔗 Live Site:** [a6-fitbit.vercel.app](https://a6-fitbit.vercel.app)

---

## 📸 Overview

FitLog lets you browse a full library of exercises, dive into a detailed breakdown of each one (equipment, difficulty, sets, reps, instructions), and build out a daily plan on the fly. Everything — from the navbar badge counts to the live stats bar — updates instantly as you add, save, complete, or remove workouts.

---

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| **Next.js (App Router)** | Page routing, layouts, and dynamic exercise detail pages |
| **React** | Component architecture and client-side state |
| **Tailwind CSS** | Styling, responsive layout, and utility-first design |
| **daisyUI** | Tabs, buttons, and base UI components |
| **React Toastify** | Toast notifications for plan/save/remove actions |
| **REST API** | Live workout data fetched from a Cloudflare Workers-hosted endpoint |
| **Vercel** | Deployment and hosting |

---

## ✨ Key Features

1. **📚 Full Workout Library** — Browse every exercise in a responsive 3×4 grid (collapsing gracefully on tablet and mobile), each card showing the workout image, muscle-group tags, equipment, and a quick stats row (duration, calories, rating).

2. **🏋️ Detailed Workout Pages** — Click into any workout for a two-column detail view: hero image on one side, and a full spec panel (equipment, difficulty, sets, reps, duration, calories, rating) plus numbered step-by-step instructions on the other.

3. **📝 Live Plan & Saved Tracking** — Add a workout to **Today's Plan** or **Saved for Later** directly from its detail page, with instant toast confirmations and navbar badge counters that update in real time.

4. **📊 My Plan Dashboard** — A dedicated `/my-plan` page with a live metrics bar (Exercises, Minutes, Calories), tabbed views for Plan vs. Saved, a sortable list (by Duration, Calories, or Rating), and per-item actions to mark complete or remove — complete with a friendly empty state when there's nothing logged yet.

5. **📱 Fully Responsive & Resilient** — A mobile-first layout that holds up across every screen size, paired with graceful loading states while data fetches and a custom 404 page for any invalid route.

---

## 🚀 Getting Started

```bash
# Clone the repo
git clone https://github.com/shamsulalamcodes/a6-fitbit.git
cd a6-fitbit

# Install dependencies
npm install

# Run the dev server
npm run dev
```


---

## 📄 License

This project was built as part of a learning program assignment. Feel free to explore the code for reference.
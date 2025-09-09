# Gas Management System ⛽

A modern, full-stack **Gas Management System** built with Next.js, TypeScript, Prisma, and TailwindCSS.  
Manage gas orders, users, and inventory efficiently in a clean and responsive web application.

---

## 🚀 Tech Stack

### Frontend

- ⚛️ React 18
- 📝 TypeScript
- 🌐 Next.js 15
- 🎨 TailwindCSS
- ✨ tailwindcss-animate
- 🔧 clsx
- 🖌️ class-variance-authority
- 📦 Lucide React (Icons)
- 📦 React Icons
- 🔌 @radix-ui/react-dialog
- 📣 Axios

### Backend

- 🟢 Node.js (via Next.js API routes)
- 🗄️ Prisma ORM
- 💾 @prisma/client
- 🔑 JWT Authentication (if implemented)
- 💡 TypeScript
- 🌐 REST / API routes via Next.js

---

## 💡 Features

- 🧑‍💻 **User Management**: Register, login, and manage users  
- ⛽ **Gas Orders**: Create, track, and manage gas orders  
- 📦 **Inventory Management**: Track gas cylinder stock and availability  
- 🔔 **Notifications**: Alerts for low stock or pending orders  
- 📊 **Dashboard**: View analytics and stats of gas usage and orders  

---

## 📁 Project Structure

```
gas-management/
├── app/ or src/ # Main source files (Next.js pages & components)
│ ├── pages/ # Next.js pages (Dashboard, Orders, Users)
│ ├── components/ # Reusable React components
│ ├── lib/ # Utility libraries (e.g., Prisma client)
│ ├── hooks/ # Custom React hooks
│ └── styles/ # TailwindCSS & global styles
├── prisma/ # Prisma schema & migrations
│ └── schema.prisma
├── public/ # Static assets
├── package.json # Dependencies & scripts
│ # Scripts
│ # dev: next dev
│ # build: next build
│ # start: next start
│ # lint: next lint
│ # Dependencies: react, react-dom, next, axios, tailwindcss-animate, clsx, class-variance-authority, lucide-react, react-icons, @radix-ui/react-dialog, @prisma/client, tailwind-merge
│ # DevDependencies: typescript, eslint, @types/react, @types/react-dom, @types/node, eslint-config-next, postcss, tailwindcss, prisma
└── tsconfig.json # TypeScript configuration
```


---

## 🛠️ Installation

1. Clone the repository:

```bash
git clone https://github.com/hire12/gas.git
cd gas-management
```

## Install dependencies:
```bash
npm install
```
## Set up environment variables:
```ini
# Example .env
DATABASE_URL="your_database_connection_string"
NEXT_PUBLIC_API_URL="your_api_url_if_needed"
JWT_SECRET="your_jwt_secret"
```
## Set up Prisma database:
```bash
npx prisma migrate dev --name init
npx prisma generate
```
## Start development server:
```bash
npm run dev
```

📦 Available Scripts

`npm run dev` - Start Next.js development server

`npm run build` - Build project for production

`npm run start` - Start production server

`npm run lint` - Run ESLint

🔒 Security Features

JWT-based authentication (if implemented)

Prisma ORM for secure database interactions

Environment variable protection

TailwindCSS for responsive and safe UI design


## 📜 License
MIT © [Hiriyan] — Go build something epic!

Made with ❤️ by [Hiriyan]
🐦 [[Linkdein](https://www.linkedin.com/in/hiriyan-mohammed/)] · 💼 [[Portfolio](https://github.com/hire12)] · 📧 [[Email](hireemoh@gmail.com)]


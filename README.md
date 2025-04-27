## Features

- Fetches blog posts from the API at https://www.futwiz.com/en/dev/test
- Displays each blog post using the BlogCard.tsx component
- Styled with Tailwind CSS

## Getting Started

To get started with this project, follow these steps:

1. **Clone the repository:**
   ```
   git clone https://github.com/brennan-jenkins/wizz-blog.git
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Run the development server:**
   ```
   npm run dev
   ```

4. **Open your browser and navigate to:**
   ```
   http://localhost:3000
   ```

## Project Structure

```
nextjs-blog-feed
├── public
│   └── favicon.ico
├── src
│   ├── components
│   │   ├── BlogCard.tsx
│   │   └── Navbar.tsx
│   ├── pages
│   │   ├── index.tsx
│   │   └── _app.tsx
│   ├── styles
│   │   ├── globals.css
│   │   └── tailwind.css
│   └── utils
│       └── fetcher.ts
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── tsconfig.json
└── README.md
```

## Technologies Used

- **Next.js**
- **Tailwind CSS**
- **TypeScript**
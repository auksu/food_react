import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

/* 
<main>
git init
git add .
git commit -m "initial commit"
git branch -M main
git remote add origin https://github.com/auksu/food_react.git
git push -u origin main

<gh-pages>
npm run build
npm run deploy

*/
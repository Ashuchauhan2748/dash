import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

document.body.style.margin = '0'
document.body.style.padding = '0'
document.body.style.background = '#f7f7f7'
document.body.style.fontFamily = "'IBM Plex Sans', 'Inter', 'Segoe UI', system-ui, -apple-system, sans-serif"

const rootElement = document.getElementById('root')

if (rootElement) {
  rootElement.style.minHeight = '100vh'
}

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

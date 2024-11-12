import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ReactDom from './reactDom.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ReactDom />
  </StrictMode>,
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './mycss.css'
import Guess from './Guess'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Guess/>
  </StrictMode>,
)

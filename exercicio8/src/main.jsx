import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Online from './components/Online'

createRoot(document.getElementById('root')).render(
  <StrictMode>
 <Online online = {true}/> <br/>
 <Online online = {false}/>
  </StrictMode>,
)

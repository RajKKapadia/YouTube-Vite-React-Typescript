import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@/index.css'
import CustomProviders from '@/providers/CustomProvider'
import App from '@/App'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CustomProviders>
      <App></App>
    </CustomProviders>
  </StrictMode>
)

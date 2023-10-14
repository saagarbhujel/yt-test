import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { AuthProvider } from './context/AuthContext.tsx'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import ActiveSectionContext from '../src/context/active-section-context.tsx'

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <ActiveSectionContext>
          <Routes>
            <Route path="/*" element={<App />} />
          </Routes>
        </ActiveSectionContext>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);

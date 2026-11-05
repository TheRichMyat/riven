import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const rootEl = document.getElementById('root')
const path = window.location.pathname

const app = (
  <React.StrictMode>
    <App path={path} />
  </React.StrictMode>
)

// If the root has been pre-rendered (SSG), hydrate it. Otherwise mount fresh.
if (rootEl.hasChildNodes()) {
  ReactDOM.hydrateRoot(rootEl, app)
} else {
  ReactDOM.createRoot(rootEl).render(app)
}

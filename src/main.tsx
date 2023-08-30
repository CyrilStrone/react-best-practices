import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './app/app'

import './index/index.css'
import './styles/style-of-title.css'
import './styles/style-of-font.css'
import './styles/style-of-block.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

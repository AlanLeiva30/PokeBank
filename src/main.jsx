import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from '/src/dashboard/layout.jsx'
import '/src/index.css'

// Importa las páginas
import Deposit from '/src/dashboard/deposit/page.jsx'
import History from '/src/dashboard/history/page.jsx'
import Home from '/src/dashboard/home/page.jsx'
import PayService from '/src/dashboard/payService/page.jsx'
import Withdraw from '/src/dashboard/withdraw/page.jsx'
import Login from '/src/pages/login.jsx'

// Puedes definir este componente si aún no lo tienes en tu proyecto
function NotFound() {
  return <div>Página no encontrada</div>;
}

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard/*">
            <Route index element={<Layout><Home /></Layout>} />
            <Route path="deposit" element={<Layout><Deposit /></Layout>} />
            <Route path="withdraw" element={<Layout><Withdraw /></Layout>} />
            <Route path="payService" element={<Layout><PayService /></Layout>} />
            <Route path="history" element={<Layout><History /></Layout>} />
        </Route>
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

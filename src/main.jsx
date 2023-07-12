
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {createContext} from 'react'
import ContextProvider from './context/login/Context.jsx'
import CartContextProvider from './context/addtoCart/context.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ContextProvider>
  <CartContextProvider>
    <BrowserRouter>
  <React.StrictMode>
<App />
</React.StrictMode>
</BrowserRouter>

</CartContextProvider>
</ContextProvider>
)

import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import 'react-toastify/dist/ReactToastify.css'

// ========================================
//This brings up the html index as the root and this home export

ReactDOM.render(
  <BrowserRouter>
  <ToastContainer />
    <App />
  </BrowserRouter>,
  document.getElementById('root')
)

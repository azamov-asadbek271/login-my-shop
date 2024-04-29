import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { GlobalContextProdive } from './context/useGlobalContext.jsx';
ReactDOM.createRoot(document.getElementById("root")).render(
  <GlobalContextProdive>
    <App />
  </GlobalContextProdive>
);

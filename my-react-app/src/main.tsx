import { createContext, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import  ContextProvider  from "./context/CounterContext.jsx"

import { Provider } from 'react-redux';
// import store from './store/store.js'

import store from './store/rtkStore.js'

import MyBrowserRouter from './myRouter/MyBrowserRouter.jsx';

export const MyStore = createContext(null);

createRoot(document.getElementById('root')!).render(
    <StrictMode>
      {/* <MyStore value={{store}}> */}
      <MyBrowserRouter>
      <Provider store={store}>
      <App />
      </Provider>
    {/* </MyStore> */}
    </MyBrowserRouter>
  </StrictMode>
    
  
)

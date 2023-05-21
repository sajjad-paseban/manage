import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/dashboard/dashboard.page';
import Prices from './pages/prices/prices.page';
import Factors from './pages/factors/factors.page';
import Brands from './pages/brands/brands.page';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter basename='/manage/'>
    <Routes>
      <Route path='/' element={<App />}>
        <Route index element={<Dashboard />} />
        <Route path='prices' element={<Prices />} />
        <Route path='factors' element={<Factors />} />
        <Route path='brands' element={<Brands />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

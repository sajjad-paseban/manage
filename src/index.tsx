import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/dashboard/dashboard.page';
import Prices from './pages/prices/prices.page';
import Factors from './pages/factors/factors.page';
import Brands from './pages/brands/brands.page';
import Users from './pages/users/users.page';
import BaseTable from './pages/base-tables/base-table.page';
import Settings from './pages/settings/settings.page';
import Access from './pages/access/access.page';
import CreatePrice from './pages/prices/create-price.page';
import EditPrice from './pages/prices/edit-price.page';
import CreateBrand from './pages/brands/create-brand.page';
import EditBrand from './pages/brands/edit-brand.page';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Routes>
      <Route path='/' element={<App />}>
        <Route index element={<Dashboard />} />

        {/* Prices Routing */}

        <Route path='prices' element={<Prices />} />
        <Route path='prices/create' element={<CreatePrice />} />
        <Route path='prices/:id/edit' element={<EditPrice />} />
        
        {/* Prices Routing */}


        {/* Factors Routing */}

        <Route path='factors' element={<Factors />} />
        <Route path='factors/create' element={<Factors />} />
        <Route path='factors/:id/edit' element={<Factors />} />

        {/* Factors Routing */}


        {/* Brands Routing */}
        
        <Route path='brands' element={<Brands />} />
        <Route path='brands/create' element={<CreateBrand />} />
        <Route path='brands/:id/edit' element={<EditBrand />} />
        
        {/* Brands Routing */}


        {/* Users Routing */}

        <Route path='users' element={<Users />} />
        <Route path='users/create' element={<Users />} />
        <Route path='users/:id/edit' element={<Users />} />

        {/* Users Routing */}


        <Route path='baseTable' element={<BaseTable />} />
        <Route path='settings' element={<Settings />} />
        <Route path='access' element={<Access />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

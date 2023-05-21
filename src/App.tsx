import Header from './partials/header/header.partial';
import './App.scss';
import { app } from './assets/scripts/header.script';
import Sidebar from './partials/sidebar/sidebar.partial';
import { Outlet } from 'react-router-dom';
function App() {
  return (
    <div className='app' onClick={app}>
      <div className="main-content full-width">
        <Header />
        <Outlet />
      </div>
      <div className="sidebar close" onClick={(e) => {e.stopPropagation()}}>
        <Sidebar />
      </div>
    </div>
  );
}

export default App;

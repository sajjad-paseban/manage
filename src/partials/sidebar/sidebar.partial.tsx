import { FaCog, FaCogs, FaFileImport, FaHome, FaKey, FaList, FaMeteor, FaPercentage, FaToolbox, FaTools, FaUsers } from 'react-icons/fa';
import './sidebar.style.scss';
import SideBarMenuItem from '../../components/sidebar-menu-item/sidebar-menu-item.component';

function Sidebar(){
    return(
        <div className="sidebar-wrapper">
            <div className="sidebar-header">
                <img src="https://cdn-icons-png.flaticon.com/512/5396/5396225.png" alt="" />
                <span>
                    مدیریت قیمت ها و فاکتورها
                </span>
            </div>
            <div className="sidebar-content">
                <ul>
                    <SideBarMenuItem href="/" title="داشبورد" icon={<FaHome color='42a5f5' />}/>
                    <SideBarMenuItem href="/prices" title="قیمت ها" icon={<FaPercentage color='388e3c'/>}/>
                    <SideBarMenuItem href="/brands" title="برندها" icon={<FaMeteor color='e53935'/>}/>
                    <SideBarMenuItem href="/factors" title="فاکتورها" icon={<FaFileImport color='40c4ff'/>}/>
                    <SideBarMenuItem href="/access" title="دسترسی ها" icon={<FaKey color='ba68c8'/>}/>
                    <SideBarMenuItem href="/users" title="کاربران" icon={<FaUsers color='009688'/>}/>
                    <SideBarMenuItem href="/baseTable" title="مدیریت جداول پایه" icon={<FaList color='ffa000'/>}/>
                    <SideBarMenuItem href="/settings" title="تنظیمات" icon={<FaCogs color='263238'/>}/>
                </ul>
            </div>
        </div>
    );
}

export default Sidebar;
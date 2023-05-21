import './sidebar-menu-item.style.scss';
import { Link } from 'react-router-dom';
function SideBarMenuItem(props: any){
    return(
        <li className="sidebar-menu-item">
            <Link to={props.href}>
                {props.icon}
                <span>
                    {props.title}
                </span>
            </Link>
        </li>
    );
}

export default SideBarMenuItem;
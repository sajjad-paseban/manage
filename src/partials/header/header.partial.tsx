import { Component, ReactNode } from 'react';
import './header.style.scss';
import { 
    BsList,
    BsEnvelope,
    BsBell
} from 'react-icons/bs';
import { openSidebar, showProfile } from '../../assets/scripts/header.script';
import { FaCog, FaSignOutAlt, FaUser } from 'react-icons/fa';

class Header extends Component<any,any>{
    
    constructor(props: any){
        super(props);
    }
    
    render(): ReactNode {        
        return (
            <div className="header">
                <div className="row justify-content-between align-items-center">
                    <div className="col-auto">
                        <div className="d-flex align-items-center">
                            <div className='header-profile' onClick={(e) => {e.stopPropagation(); showProfile()}}>
                                <span>
                                    سجاد پاسبان رضوی
                                </span>
                                <small className='text-muted'>
                                    مدیر سایت
                                </small>
                                <img src="https://newprofilepic2.photo-cdn.net//assets/images/article/profile.jpg" width={45} alt="" />
                                <div className='header-profile-content' onClick={(e) => {e.stopPropagation()}}>
                                    <div className="d-flex justify-content-center">
                                        <div>
                                            <FaCog />
                                        </div>
                                        <div>
                                            <FaUser />
                                        </div>
                                        <div>
                                            <FaSignOutAlt />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <span className='badge bg-danger'>3</span>
                                <BsEnvelope size={25}/>
                            </div>
                            <div>
                                <span className="badge bg-primary">2</span>
                                <BsBell size={25} />
                            </div>
                        </div>
                    </div>
                    <div className="col-auto">
                        <div className="d-flex align-items-center">
                            <div className='sidebar-opener-icon' onClick={(e) => {e.stopPropagation(); openSidebar()}}>
                                <BsList size={28}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;
import { Link } from 'react-router-dom';
import './header-page.style.scss';
import { FaBarcode, FaSearch } from 'react-icons/fa';
import { HeaderPageInterface } from './header-page.interface';

function HeaderPage({title, topPart=true, topLink='/', topLinkTitle='برگشت به صفحه اصلی', buttons=[], placeholder='', name='', scannerButton=false, scannerButtonHandler}: HeaderPageInterface){
    return(
        <div className="header-page">
            {topPart &&
                <div className="top">
                    <div className='text-muted'>
                        <small>
                            {title}
                        </small>
                    </div>
                    <div>
                        <small>
                            <Link to={topLink}>{topLinkTitle}</Link>
                        </small>
                    </div>
                </div>
            }

            <div className="bottom">
                <div>
                    {
                        buttons.map((value: any,index)=>
                            <Link key={index} className='btn btn-sm btn-outline-primary' style={{marginRight: '8px'}} to={value.link}>{value.title}</Link>
                        )
                    }
                </div>
                <div className='d-flex'>
                    {scannerButton &&
                        <button className='btn btn-sm btn-warning' onClick={()=> {scannerButtonHandler(1)}} style={{marginRight: "5px"}}>
                            <FaBarcode />
                        </button>
                    }
                    <div className="form-group ">
                        <div className="input-group">
                            <button className='btn btn-sm btn-primary'>
                                <FaSearch size={15} />
                            </button>
                            <input type="text" style={{direction: 'rtl'}} name={name} id={name} className={"form-control form-control-sm "+ name} placeholder={placeholder} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeaderPage;
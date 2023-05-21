import { FaCube } from 'react-icons/fa';
import './page-title.style.scss';
import { PageTitleInterface } from './page-title.interface';

function PageTitle({title}: PageTitleInterface){
    return(
        <div className="page-title">
            <div className="row">
                <div className="col">
                    <h3>
                        {title}
                    </h3>
                </div>
            </div>
        </div>
    );
}

export default PageTitle;
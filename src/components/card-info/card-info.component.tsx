import { FaBarcode, FaBars, FaChartBar, FaChartLine, FaChartPie, FaSignal } from 'react-icons/fa';
import './card-info.style.scss';

function CardInfo({color, title, amount = 0}: any){
    return(
        <div className="card-info">
            <div className="card-info-header">
                <h5>
                    {title}
                </h5>
            </div>
            <div className="card-info-body" data-color={color}>
                <div>
                    <span>
                        {amount}
                    </span>
                </div>
                <div>
                    <FaChartPie />
                </div>
            </div>
        </div>
    );
}

export default CardInfo;
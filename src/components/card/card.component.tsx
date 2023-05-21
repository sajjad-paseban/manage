import { Link } from 'react-router-dom';
import './card.style.scss';

function Card({title, width='100%', HeaderBoardering=true, buttons=[], children}: any){
    return(
        <div className="x-card" style={{width}}>
            { title &&

                <div className={"x-card-header"+(!HeaderBoardering ? " without-border" : "")}>
                    <div>
                        {
                            buttons.map((value: any)=>
                                    <Link className='btn btn-sm btn-primary' style={{marginRight: "3px"}} to={value.link}>{value.title}</Link>
                            )
                        }
                    </div>
                    <div>
                        <h6>
                            {title}
                        </h6>
                    </div>
                </div>
            }
            <div className="x-card-body">
                {children}
            </div>
        </div>
    );
}

export default Card;
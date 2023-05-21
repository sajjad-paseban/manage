import { FaEdit, FaTrash } from 'react-icons/fa';
import Card from '../../components/card/card.component';
import HeaderPage from '../../components/header-page/header-page.component';
import PageTitle from '../../components/page-title/page-title.component';
import './brands.style.scss';

function Brands(){
    return(
        <div className="brands">
            <PageTitle title="مدیریت برندها" />
            <HeaderPage name='barndSearch' placeholder='جست و جوی نام برند' buttons={[{title: 'برند جدید' , link: '/brands/create'}]}/>
            <div className="row m-2">
                <div className="col">
                    <Card>
                        <table className='table table-hover text-center'>
                            <thead>
                                <tr>
                                    <th>
                                        #
                                    </th>
                                    <th>
                                        نام برند
                                    </th>
                                    <th>
                                        کاربر ثبت کننده
                                    </th>
                                    <th>
                                        تاریخ ثبت
                                    </th>
                                    <th>
                                        عملیات
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>2</td>
                                    <td>3</td>
                                    <td>4</td>
                                    <td>
                                        <button className='btn btn-sm btn-danger' style={{marginLeft: '8px'}}>
                                            <FaTrash size={18} />
                                        </button>
                                        <button className='btn btn-sm btn-primary'>
                                            <FaEdit size={18} />
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </Card>
                </div>
            </div>
        </div>
    );
}

export default Brands;
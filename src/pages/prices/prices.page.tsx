import { FaEdit, FaTrash } from 'react-icons/fa';
import Card from '../../components/card/card.component';
import HeaderPage from '../../components/header-page/header-page.component';
import PageTitle from '../../components/page-title/page-title.component';
import './prices.style.scss';
import React, { useEffect, useState } from 'react';
import { Scanner } from '../../components/scanner/scanner.component';

function Prices(){
    const [data,setData] = useState('');
    const [scannerState,setScannerState] = useState(0);
    const actions = {
        useScannerHandler: (value: any) => setScannerState(value)
    }
    const buttons = [
        {title: 'محصول جدید', link:'/'}
    ]
    return(
        <div className="prices">
            {scannerState === 1 &&
                <Scanner callbackData = {setData} scannerStateHandler = {actions.useScannerHandler} />
            }
            {data}
            <PageTitle title='مدیریت قیمت محصولات' />
            <HeaderPage buttons={buttons} placeholder='جست و جوی نام محصول' scannerButton={true} scannerButtonHandler={actions.useScannerHandler} />
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
                                        نام محصول
                                    </th>
                                    <th>
                                        قیمت خرید
                                    </th>
                                    <th>
                                        قیمت فروش
                                    </th>
                                    <th>
                                        تاریخ ثبت
                                    </th>
                                    <th>
                                        تاریخ ویرایش
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
                                    <td>4</td>
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

export default Prices;
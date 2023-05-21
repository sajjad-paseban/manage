import { FaBell, FaCalendarDay, FaDollarSign, FaEdit, FaRegBell, FaTrash } from 'react-icons/fa';
import CardInfo from '../../components/card-info/card-info.component';
import Card from '../../components/card/card.component';
import PageTitle from '../../components/page-title/page-title.component';
import './dashboard.style.scss';
import { CChart } from '@coreui/react-chartjs';

function Dashboard(){
    return(
        <div className="dashboard container-fluid">
            <PageTitle title="داشبورد" />
            <div className="row">
                <div className="col-12 col-sm">
                    <CardInfo title="تعداد بازدید ها" amount="2" color='primary' />
                </div>
                <div className="col-12 col-sm">
                    <CardInfo color='warning' />
                </div>
                <div className="col-12 col-sm">
                    <CardInfo color='danger' />
                </div>
                <div className="col-12 col-sm">
                    <CardInfo color='success' />
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-sm-12 col-md-3">
                    <div className="row">
                        <div className="col">
                            <Card>
                                <div className="d-flex justify-content-between align-items-center timeLeft p-2">
                                    <div>
                                        <h5>
                                            <b>30 روز</b>
                                        </h5>
                                        <p>مدت زمان اعتبار محصول</p>
                                    </div>
                                    <div>
                                        <FaDollarSign />
                                    </div>
                                </div>
                                <div className="time-left-progressBar">
                                    <div className="time-left-progressBar-inner">
                                        <div className="time-left-progressBar-inner-point"></div>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <Card>
                                <div className="d-flex justify-content-between align-items-center p-2 date-card">
                                    <div>
                                        <h5>
                                            <b>
                                                {new Intl.DateTimeFormat('fa-u-ca-persian', { dateStyle: 'full' }).format(new Date())}
                                            </b>
                                        </h5>
                                        <p>
                                            روز عادی
                                        </p>
                                    </div>
                                    <div>
                                        <FaCalendarDay />
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <Card title="اعلامیه ها">
                                <ul className='notification-card'>
                                    <li>
                                        <FaRegBell />
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div>
                                                سجاد پاسبان رضوی
                                            </div>
                                            <div>
                                                یک روز پیش
                                            </div>
                                        </div>
                                        <p>
                                        مدت زمان اعتبار محصول مدت زمان اعتبار محصولمدت زمان اعتبار محصول مدت زمان اعتبار محصولمدت زمان اعتبار محصول
                                        </p>
                                        <div className="notification-tags">
                                            <span className='badge bg-danger pt-1'>
                                                مدیر سیستم
                                            </span>
                                        </div>
                                    </li>
                                    <li>
                                        <FaRegBell />
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div>
                                                سجاد پاسبان رضوی
                                            </div>
                                            <div>
                                                یک روز پیش
                                            </div>
                                        </div>
                                        <p>
                                            مدت زمان اعتبار محصول شما به پایان رسیده است
                                        </p>
                                        <div className="notification-tags">
                                            <span className='badge bg-danger pt-1'>
                                                مدیر سیستم
                                            </span>
                                        </div>
                                    </li>
                                    <div className='notification-end'></div>
                                </ul>
                            </Card>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-12 col-md-9">
                    <div className="row">
                        <div className="col">
                            <Card title="آخرین کاربران ثبت شده" HeaderBoardering={false}>
                                <table className='table table-striped text-center'>
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>نام و نام خانوادگی</th>
                                            <th>نام کاربری</th>
                                            <th>پست الکترونیکی</th>
                                            <th>شماره همراه</th>
                                            <th>تاریخ ثبت</th>
                                            <th>عملیات</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>سجاد پاسبان رضوی</td>
                                            <td>@sajad09152146319</td>
                                            <td>s.pr98@yahoo.com</td>
                                            <td>0s35a61100</td>
                                            <td>1402/02/27</td>
                                            <td>
                                                <div className="d-flex justify-content-center">
                                                    <div className='mx-1'>
                                                        <button className='btn btn-sm btn-danger'>
                                                            <FaTrash />
                                                        </button>
                                                    </div>
                                                    <div className='mx-1'>
                                                        <button className='btn btn-sm btn-primary'>
                                                            <FaEdit />
                                                        </button>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </Card>
                        </div>    
                    </div>
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-12 col-lg-6">
                            <Card buttons={[{title: 'ثبت فاکتور جدید' , link: '/factors'},{title: 'نمایش فاکتورها' , link: '/factors'}]} title="آخرین فاکتورهای ثبت شده">
                                <table className='table text-center table-hover'>
                                    <thead>
                                        <tr>
                                            <th>شماره فاکتور</th>
                                            <th>نام مشتری</th>
                                            <th>تاریخ</th>
                                            <th>جمع فاکتور</th>
                                            <th>عملیات</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>سجاد پاسبان رضوی</td>
                                            <td>@sajad09152146319</td>
                                            <td>s.pr98@yahoo.com</td>
                                            <td>1402/02/27</td>
                                            <td>
                                                <div className="d-flex justify-content-center">
                                                    <div className='mx-1'>
                                                        <button className='btn btn-sm btn-danger'>
                                                            <FaTrash />
                                                        </button>
                                                    </div>
                                                    <div className='mx-1'>
                                                        <button className='btn btn-sm btn-primary'>
                                                            <FaEdit />
                                                        </button>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </Card>
                        </div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-6">
                            <Card title="آخرین محصولات ثبت شده">
                                <table className='table text-center table-hover'>
                                    <thead>
                                        <tr>
                                            <th>کد</th>
                                            <th>عنوان</th>
                                            <th>قیمت</th>
                                            <th>تاریخ ثبت</th>
                                            <th>عملیات</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>@sajad09152146319</td>
                                            <td>s.pr98@yahoo.com</td>
                                            <td>0s35a61100</td>
                                            <td>1402/02/27</td>
                                            <td>
                                                <div className="d-flex justify-content-center">
                                                    <div className='mx-1'>
                                                        <button className='btn btn-sm btn-danger'>
                                                            <FaTrash />
                                                        </button>
                                                    </div>
                                                    <div className='mx-1'>
                                                        <button className='btn btn-sm btn-primary'>
                                                            <FaEdit />
                                                        </button>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </Card>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <Card title="نمودار ثبت فاکتور">
                              <CChart
                                    className='p-3'
                                    type="bar"
                                    data={{
                                        labels: ['فروردین','اردیبهشت','خرداد','تیر','مرداد','شهریور','مهر','آبان','آذر','دی','بهمن','اسفند'],
                                        datasets: [
                                        {
                                            label: 'GitHub Commits',
                                            backgroundColor: '#1e88e5',
                                            data: [1000000, 100000, 50000, 20000, 450000, 800000, 248000, 5000000, 4500000, 3000000, 1500000, 50000],
                                        },
                                        ],
                                    }}
                                />
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
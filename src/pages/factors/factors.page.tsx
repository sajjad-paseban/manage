import HeaderPage from '../../components/header-page/header-page.component';
import PageTitle from '../../components/page-title/page-title.component';
import './factors.style.scss';

function Factors(){
    return(
        <div className="factors">
            <PageTitle title='مدیریت فاکتورها' />
            <HeaderPage buttons={[{title: 'فاکتور جدید',link: '/'}]} placeholder='جست و جوی فاکتور' />
        </div>
    );
}

export default Factors;
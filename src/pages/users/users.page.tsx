import HeaderPage from '../../components/header-page/header-page.component';
import PageTitle from '../../components/page-title/page-title.component';
import './users.style.scss';

function Users(){
    return(
        <div className="users">
            <PageTitle title='مدیریت کاربران' />
            <HeaderPage buttons={[{title: 'کاربر جدید',link: '/'}]} placeholder='جست و جوی کاربر' />
        </div>
    );
}

export default Users;
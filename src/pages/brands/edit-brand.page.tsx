import Card from '../../components/card/card.component';
import PageTitle from '../../components/page-title/page-title.component';
import './edit-brand.style.scss';

function EditBrand(){
    return(
        <div className="edit-brand">
            <PageTitle title='ویرایش برند' />
            <div className="row mx-2">
                <div className="col">
                    <Card title='ویرایش برند موجود' buttons={[{title:'برگشت',link: '/brands'}]}>
                        
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default EditBrand;
import Card from '../../components/card/card.component';
import PageTitle from '../../components/page-title/page-title.component';
import './create-brand.style.scss';

function CreateBrand(){
    return(
        <div className="create-brand">
            <PageTitle title='برند جدید' />
            <div className="row mx-2">
                <div className="col">
                    <Card title='ثبت برند جدید' buttons={[{title:'برگشت',link: '/brands'}]}>
                        
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default CreateBrand;
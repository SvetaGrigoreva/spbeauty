import PrimaryButton from "../../../../../Components/PrimaryButton";
import SecondaryButton from "../../../../../Components/SecondaryButton";
import ListElement from "./ListElement";
function Addresses() {
    return (
        <div className='d-inline-flex flex-column col justify-content-between p-4 border rounded-3 ms-5'> 
            <div className='title'>Адреса заведений</div>
            <div className='d-flex flex-column gap-5'>
                <ListElement>Санкт-Петербург, Невский пр-т. 28</ListElement>
                <ListElement>Санкт-Петербург, Казанская ул, 7</ListElement>
                <PrimaryButton>Добавить филиал</PrimaryButton>
            </div>
        </div>
    );
}

export default Addresses;
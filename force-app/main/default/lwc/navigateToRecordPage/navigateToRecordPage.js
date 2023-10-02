import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

export default class NavigateToRecordPage extends NavigationMixin(LightningElement) {
    // @api recordId;
    recordViewMode() {
    
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                recordId: '0035t0000154yjWAAQ',
                actionName: 'view'
            }
        });
    }

    recordEditMode() {
    
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                recordId: '0035t0000154yjWAAQ',
                actionName: 'edit'
            }
        });
    }

}
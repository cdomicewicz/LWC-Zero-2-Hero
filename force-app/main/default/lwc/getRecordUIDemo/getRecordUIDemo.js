import { LightningElement, api, wire } from 'lwc';
import { getRecordUi } from 'lightning/uiRecordApi'

export default class GetRecordUiDemo extends LightningElement {
    formFields = [{
        fieldName: "AccuntNumber", "label":"Account Number"
    }]
    @api recordId;
    @wire(getRecordUi, {recordIds:'$recordId', layoutTypes:'Full', modes:'Edit'})
    accountRecordUiHandler({data, error}) {
        if(data) {
            console.log(data);
            data.records
        }
        if(error) {
            console.log(error);
        }
    }
}
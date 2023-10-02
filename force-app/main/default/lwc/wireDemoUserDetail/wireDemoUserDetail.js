import { LightningElement, wire } from 'lwc';
import USER_ID from '@salesforce/user/Id';
import {getRecord} from 'lightning/uiRecordApi';
import NAME_FIELD from '@salesforce/schema/User.Name';
import EMAIL_FIELD from '@salesforce/schema/User.Email';
const fields = [NAME_FIELD, EMAIL_FIELD];

export default class WireDemoUserDetail extends LightningElement {
    userId = USER_ID;
    userDetails;

    // Recommended approach - easy debug, after being sure that everything is all right, it can be changed to property approach
    // @wire(getRecord, {recordId: '0055t000004PZBzAAO', fields: fields})
    // @wire(getRecord, {recordId: '0055t000004PZBzAAO',    fields})
    @wire(getRecord, {recordId: '$userId',    fields})
    // userDetailHandler(response) {
    userDetailHandler({data, error}) {
        console.log(data);
        // console.log(response.error);
        if(data) {
            this.userDetails = data.fields;
        }
        if(error){
            console.error(error);
        }
    }

    //Other approach, not recommended
    // @wire(getRecord, {recordId: '0055t000004PZBzAAO', fields: ['User.Name', 'User.Email']})
    @wire(getRecord, {recordId: '$userId', fields: ['User.Name', 'User.Email']})
    userDetailProperty;

}
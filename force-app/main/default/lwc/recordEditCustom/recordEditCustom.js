import { LightningElement } from 'lwc';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';


export default class RecordEditCustom extends LightningElement {
    accountObject = ACCOUNT_OBJECT;
    inputValue ='';
    handleChange(event) {
        this.inputValue = event.target.value;
    }
    handleSubmit(event) {
        // Do not refresh page/form?
        event.preventDefault();
        const inputCmp = this.template.querySelector('lightning-input');
        const value = inputCmp.value;
        if(!value.includes('Australia')) {
            inputCmp.setCustomValidity("The account name must include 'Australia'");
        } else {
            inputCmp.setCustomValidity("");
            const fields = event.detail.fields;
            fields.Name = value;
            this.template.querySelector('lightning-record-edit-form').submit(fields);
        }
        inputCmp.reportValidity();
    }
    successHandler(event) {
        const evt = new ShowToastEvent({
            title: "Account created",
            message: "Record ID: " + event.detail.id,
            variant: "success"
        });
        this.dispatchEvent(evt);
    }
    handleError(event) {
        const evt = new ShowToastEvent({
            title: "Error occured!",
            message: event.detail.message,
            variant: "error"
        });
        this.dispatchEvent(evt);
    }
}
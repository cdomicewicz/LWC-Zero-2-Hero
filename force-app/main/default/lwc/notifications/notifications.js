import { LightningElement } from 'lwc';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';

export default class Notifications extends LightningElement {
    toastSuccessHandler() {
        this.createToast('Success', '{0} Congratulations! Your toast is visible! {1}','success');
    }    
    toastErrorHandler() {
        this.createToast('Error', 'An error has occured!','error');
    }    
    toastWarningHandler() {
        this.createToast('Warning', 'Warning: something may be wrong.','warn');
    }    
    toastInfoHandler() {
        this.createToast('Info', 'Information are available.','info');
    }

    createToast(title, message, variant) {
        const evt = new ShowToastEvent({
            title,
            message,
            variant,
            messageData: [
                'Salesforce', {
                    url:'http://www.salesforce.com/',
                    label: 'Click here!'
                }
            ],
            mode: 'sticky'
        });
        this.dispatchEvent(evt);
    }
}
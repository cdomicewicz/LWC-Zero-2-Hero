import { LightningElement } from 'lwc';
import {createRecord} from 'lightning/uiRecordApi'
import CONTACT_OBJECT from '@salesforce/schema/Contact'
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
export default class CreateRecordDemo extends LightningElement {
    formFields={}
    changeHandler(event){
        //    if variable has the same name (event, value) as property which we want to use inside variable (event.target.value, event.target.name) we can use
// this shortcut
        const {name, value} = event.target
        //    Below is shortcut for this example operation - name and value are taken from event so it means, from source button (there may be 4 of them)
//    this.formFields = {
//        "FirstName":"Cezary"
//    }
        this.formFields[name]=value
    }
    createContact(){
        const recordInput = {apiName:CONTACT_OBJECT.objectApiName, fields:this.formFields}
        createRecord(recordInput).then(result=>{
            this.showToast('Success!!', `contact created with is ${result.id}`)
            this.template.querySelector('form.createForm').reset()
            this.formFields={}
        }).catch(error=>{
            this.showToast('Error Creating record', error.body.message, 'error')
        })
    }

    showToast(title, message, variant){
        this.dispatchEvent(new ShowToastEvent({
            title,
            message,
            variant:variant || 'success'
        }))
    }
}
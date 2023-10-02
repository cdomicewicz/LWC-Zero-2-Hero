import { LightningElement, wire } from 'lwc';
import {getObjectInfo, getObjectInfos} from 'lightning/uiObjectInfoApi';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import OPPORTUNITY_OBJECT from '@salesforce/schema/Opportunity';
export default class GetObjectInfoDemo extends LightningElement {
    objectApiName = ACCOUNT_OBJECT;
    defaultRecordTypeId;
    apiName;
    @wire(getObjectInfo, {objectApiName: ACCOUNT_OBJECT})
    objectInfo({data, error}) {
        if(data) {
            console.log('Wired data:');
            console.log(data);
            this.defaultRecordTypeId = data.defaultRecordTypeId;
            this.apiName = data.apiName;
        }
        if(error) {
            console.error(error);
        }
    }

    //property option
    @wire(getObjectInfo, {objectApiName: ACCOUNT_OBJECT})
    objectWiredInfo;

    objectInfos;
    objectApiNames = [ACCOUNT_OBJECT, OPPORTUNITY_OBJECT];
    @wire(getObjectInfos, {objectApiNames : '$objectApiNames'})
    objectInfosHandler({data, error}) {
        if (data) {
            console.log(data);
            console.log('Object Infos');
            this.objectInfos = data;
        }
        if (error) {
            console.error(error);
        }
    }

}
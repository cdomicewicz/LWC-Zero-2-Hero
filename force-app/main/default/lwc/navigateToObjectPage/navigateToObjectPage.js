import { LightningElement } from 'lwc';
import {NavigationMixin} from 'lightning/navigation'
import { encodeDefaultFieldValues } from 'lightning/pageReferenceUtils';

export default class NavigateToObjectPage extends NavigationMixin(LightningElement) {

    

    navigateToNewRecord() {
        this[NavigationMixin.Navigate] ({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Contact',
                actionName: 'new'
            }
        });
    }    
    
    navigateToNewRecordWithDefault() {
        const defaultValues = encodeDefaultFieldValues({
            FirstName: 'Cezary',
            LastName: 'Domicewicz',
            LeadSource: 'Web'

        })
        this[NavigationMixin.Navigate] ({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Contact',
                actionName: 'new'
            },
            state: {
                defaultFieldValues: defaultValues
            }
        });
    }

    navigateToListView() {
        this[NavigationMixin.Navigate] ({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Contact',
                actionName: 'list'
            },
            state: {
                filterName: 'All Contacts'
            }
        });
    }

    navigateToFiles() {
        this[NavigationMixin.Navigate] ({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'ContentDocument',
                actionName: 'home'
            }
        });
    }

}
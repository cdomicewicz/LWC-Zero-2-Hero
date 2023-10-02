import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

export default class NavigateToWebPage extends NavigationMixin(LightningElement) {
    navigateToLwc() {
        var definition= {
            componentDef:'c:navigationLwcTarget',
            attributes: {
                recordId: '123456789'
            }
        };

        this[NavigationMixin.Navigate]({
            type: "standard__webPage",
            attributes: {
                url: '/one/one.app#' + btoa(JSON.stringify(definition))
            }
        });
    }
}
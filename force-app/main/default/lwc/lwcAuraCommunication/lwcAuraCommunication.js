import { LightningElement, api } from 'lwc';

export default class LwcAuraCommunication extends LightningElement {
    @api title;
    clickHandler() {
        const e = new CustomEvent("sentmessageevent", {
            detail: {
                message : "Hello from LWC!"
            }
        });
        this.dispatchEvent(e);
    }
}
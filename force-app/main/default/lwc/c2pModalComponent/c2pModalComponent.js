import { LightningElement } from 'lwc';

export default class C2pModalComponent extends LightningElement {
    clickHandler() {
        this.dispatchEvent(new CustomEvent("disablemodalevent",
        {
            bubbles: true,
            detail: {
                data: {
                    name: "Cezary",
                    surname: "Domicewicz"
                }
            }
        }));
    }
}
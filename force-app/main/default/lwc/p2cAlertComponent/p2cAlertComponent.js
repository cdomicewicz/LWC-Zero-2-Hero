import { LightningElement, api } from 'lwc';

export default class P2cAlertComponent extends LightningElement {
    @api message;
    @api cardHeading;

    get customMessage() {
        return this.message != null && this.message != ""  ? "\"" + this.message + "\" is received from parent component." : "";
    }
}
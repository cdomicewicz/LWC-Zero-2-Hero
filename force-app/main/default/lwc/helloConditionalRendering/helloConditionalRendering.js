import { LightningElement } from 'lwc';

export default class HelloConditionalRendering extends LightningElement {
    isVisible = false;
    password;

    handleClick() {
        this.isVisible = true;
    }
    handleClickHide() {
        this.isVisible = false;
    }
    changeHandler(event) {
        this.password = event.target.value;
    }
    get checkPassword() {
        return this.password === 'Hello';
    }

 }
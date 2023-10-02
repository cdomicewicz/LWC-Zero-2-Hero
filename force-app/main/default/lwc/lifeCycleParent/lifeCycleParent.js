import { LightningElement } from 'lwc';

export default class LifeCycleParent extends LightningElement {
    constructor() {
        super();
        console.log('Parent constructor called!');
    }

    connectedCallback() {
        console.log("Parent connectedCallback called!");
        this.template.addEventListener("click", () => console.log("Component clicked!"));
    }

    renderedCallback() {
        console.log("Parent renderedCallback called!")
    }

    buttonValue;

    clickHandler(event) {
        console.log("Button was clicked!");
        this.buttonValue = event.target.value;
    }
}
import { LightningElement } from 'lwc';

export default class LifeCycleChild extends LightningElement {
    constructor() {
        super();
        console.log('Child constructor called!');
    }

    connectedCallback() {
        console.log("Child connectedCallback called!");
        this.template.addEventListener("click", () => console.log("Component clicked!"));
    }

    renderedCallback() {
        console.log("Child renderedCallback called!")
    }
}
import { LightningElement } from 'lwc';

export default class C2pParentComponoent extends LightningElement {
    message;
    showModal = false;
    handleClick() {
        this.showModal = true;
    }

    disableModal(event) {
        this.showModal = false; 
        const eventData = event.detail.data;
        this.message = `${eventData.name}  ${eventData.surname}`;
    }
}
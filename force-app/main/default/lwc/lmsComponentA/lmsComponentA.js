import { LightningElement, wire } from 'lwc';
import SAMPLEMC from "@salesforce/messageChannel/SampleMessageChannel__c";
import { MessageContext, publish } from 'lightning/messageService';

export default class LmsComponentA extends LightningElement {
    @wire(MessageContext)
    context;

    inputValue;

    inputHandler(event) {
        this.inputValue = event.target.value;
    }

    sendHandler(event) {
        if(event.key === "Enter"){
            this.publishMessage();
          }
    }

    publishMessage() {
        const message = {
            lmsData: {
                value: this.inputValue,
                author: "Cezary Domicewicz"
            }
        }
        //publish(messageContext, messageChannel, message)
        publish(this.context, SAMPLEMC, message);
    }

}
import { LightningElement, wire } from 'lwc';
import SAMPLEMC from "@salesforce/messageChannel/SampleMessageChannel__c";
import { subscribe, unsubscribe, MessageContext, APPLICATION_SCOPE } from 'lightning/messageService';

export default class LmsComponentX extends LightningElement {
    @wire(MessageContext)
    context;

    allReceivedMessages = [];

    receivedMessage;
    subscription;

    connectedCallback() {
        this.subscribeToChannel();
    }

    subscribeToChannel() {
        //subscribe(messageContext, messageChannel, listener, subscriberOptions)
        this.subscription = subscribe(this.context, SAMPLEMC, (message) => this.handleMessage(message), {scope: APPLICATION_SCOPE});
    }

    handleUnsubscribe() {
        unsubscribe(this.subscription);
        this.subscription = null;
        this.allReceivedMessages = null;
    }

    handleMessage(message) {
        if(message.lmsData.value && message.lmsData.author) {
            this.receivedMessage = `"${message.lmsData.value}" from ${message.lmsData.author}`;
        } else {
            this.receivedMessage = "NO VALUE PASSED YET";
        }
        this.allReceivedMessages = [...this.allReceivedMessages, ...this.receivedMessage];
    }

}
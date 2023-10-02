import { LightningElement } from 'lwc';
import MY_CUSTOM_LABEL_1 from '@salesforce/label/c.myCustomLabel1';
import MY_CUSTOM_LABEL_2 from '@salesforce/label/c.myCustomLabel2';

export default class CustomLabelsDemo extends LightningElement {
    LABELS = {
        label1: MY_CUSTOM_LABEL_1,
        label2: MY_CUSTOM_LABEL_2
    }
}